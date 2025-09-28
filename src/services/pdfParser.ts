import { PortfolioData, PersonalInfo, Experience, Education, Skill, Project } from '@/types/portfolio';

export class PDFParser {
  private static extractPersonalInfo(text: string): PersonalInfo {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    
    // Extract name (usually first line or after "Name:")
    const nameMatch = text.match(/(?:Name[:\s]+)?([A-Z][a-z]+ [A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i);
    const name = nameMatch ? nameMatch[1] : lines[0] || 'John Doe';
    
    // Extract email
    const emailMatch = text.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    const email = emailMatch ? emailMatch[1] : '';
    
    // Extract phone
    const phoneMatch = text.match(/(?:Phone[:\s]+)?(\+?[\d\s\-\(\)]{10,})/);
    const phone = phoneMatch ? phoneMatch[1] : '';
    
    // Extract location
    const locationMatch = text.match(/(?:Location[:\s]+|Address[:\s]+)?([A-Z][a-z]+,?\s*[A-Z]{2,})/);
    const location = locationMatch ? locationMatch[1] : '';
    
    // Extract LinkedIn
    const linkedinMatch = text.match(/(linkedin\.com\/in\/[^\s]+)/i);
    const linkedin = linkedinMatch ? `https://${linkedinMatch[1]}` : '';
    
    // Extract GitHub
    const githubMatch = text.match(/(github\.com\/[^\s]+)/i);
    const github = githubMatch ? `https://${githubMatch[1]}` : '';
    
    // Extract summary/objective
    const summaryMatch = text.match(/(?:Summary|Objective|Profile)[:\s]+(.*?)(?=\n\n|\nExperience|\nEducation|\nSkills|$)/is);
    const summary = summaryMatch ? summaryMatch[1].replace(/\n/g, ' ').trim() : '';
    
    // Determine title from context
    const titleKeywords = ['developer', 'engineer', 'designer', 'manager', 'analyst', 'consultant'];
    const titleMatch = text.toLowerCase().match(new RegExp(`(${titleKeywords.join('|')}[^\\n]*)`));
    const title = titleMatch ? titleMatch[1] : 'Professional';
    
    return {
      name,
      title: title.charAt(0).toUpperCase() + title.slice(1),
      email,
      phone,
      location,
      linkedin,
      github,
      summary
    };
  }
  
  private static extractExperience(text: string): Experience[] {
    const experiences: Experience[] = [];
    const experienceSection = text.match(/Experience[:\s]+(.*?)(?=\nEducation|\nSkills|\nProjects|$)/is);
    
    if (!experienceSection) return experiences;
    
    const experienceText = experienceSection[1];
    const jobBlocks = experienceText.split(/\n(?=[A-Z].*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))/);
    
    jobBlocks.forEach((block, index) => {
      const lines = block.split('\n').filter(line => line.trim());
      if (lines.length < 2) return;
      
      const firstLine = lines[0];
      const dateMatch = firstLine.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).*?(\d{4}).*?(?:(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).*?(\d{4})|Present)/i);
      
      if (dateMatch) {
        const position = firstLine.replace(dateMatch[0], '').trim();
        const company = lines[1] || 'Unknown Company';
        const startDate = `${dateMatch[1]} ${dateMatch[2]}`;
        const endDate = dateMatch[3] ? `${dateMatch[3]} ${dateMatch[4]}` : 'Present';
        
        const description = lines.slice(2).filter(line => 
          !line.match(/^\s*•/) && line.length > 10
        );
        
        const technologies = this.extractTechnologies(block);
        
        experiences.push({
          id: `exp-${index}`,
          company,
          position,
          startDate,
          endDate,
          location: '',
          description,
          technologies
        });
      }
    });
    
    return experiences;
  }
  
  private static extractEducation(text: string): Education[] {
    const education: Education[] = [];
    const educationSection = text.match(/Education[:\s]+(.*?)(?=\nExperience|\nSkills|\nProjects|$)/is);
    
    if (!educationSection) return education;
    
    const educationText = educationSection[1];
    const schoolBlocks = educationText.split(/\n(?=[A-Z].*(?:University|College|Institute|School))/);
    
    schoolBlocks.forEach((block, index) => {
      const lines = block.split('\n').filter(line => line.trim());
      if (lines.length < 2) return;
      
      const institution = lines[0];
      const degreeMatch = lines.join(' ').match(/(Bachelor|Master|PhD|Associate).*?(?:in\s+)?([A-Z][a-z\s]+)/i);
      const dateMatch = block.match(/(\d{4}).*?(\d{4})/);
      
      if (degreeMatch && dateMatch) {
        education.push({
          id: `edu-${index}`,
          institution,
          degree: degreeMatch[1],
          field: degreeMatch[2],
          startDate: dateMatch[1],
          endDate: dateMatch[2]
        });
      }
    });
    
    return education;
  }
  
  private static extractSkills(text: string): Skill[] {
    const skills: Skill[] = [];
    const skillsSection = text.match(/Skills[:\s]+(.*?)(?=\nExperience|\nEducation|\nProjects|$)/is);
    
    if (!skillsSection) return skills;
    
    const skillsText = skillsSection[1];
    const technicalSkills = ['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'HTML', 'CSS', 'SQL', 'Git'];
    const softSkills = ['Leadership', 'Communication', 'Problem Solving', 'Team Work', 'Project Management'];
    
    // Extract mentioned skills
    technicalSkills.forEach(skill => {
      if (skillsText.toLowerCase().includes(skill.toLowerCase())) {
        skills.push({
          name: skill,
          level: Math.floor(Math.random() * 30) + 70, // Random level between 70-100
          category: 'technical'
        });
      }
    });
    
    softSkills.forEach(skill => {
      if (skillsText.toLowerCase().includes(skill.toLowerCase())) {
        skills.push({
          name: skill,
          level: Math.floor(Math.random() * 20) + 80, // Random level between 80-100
          category: 'soft'
        });
      }
    });
    
    return skills;
  }
  
  private static extractProjects(text: string): Project[] {
    const projects: Project[] = [];
    const projectsSection = text.match(/Projects[:\s]+(.*?)(?=\nExperience|\nEducation|\nSkills|$)/is);
    
    if (!projectsSection) return projects;
    
    const projectsText = projectsSection[1];
    const projectBlocks = projectsText.split(/\n(?=[A-Z].*Project)/);
    
    projectBlocks.forEach((block, index) => {
      const lines = block.split('\n').filter(line => line.trim());
      if (lines.length < 2) return;
      
      const title = lines[0].replace(/Project[:\s]*/i, '');
      const description = lines.slice(1).join(' ');
      const technologies = this.extractTechnologies(block);
      
      projects.push({
        id: `proj-${index}`,
        title,
        description,
        technologies,
        featured: index < 3
      });
    });
    
    return projects;
  }
  
  private static extractTechnologies(text: string): string[] {
    const techKeywords = [
      'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust',
      'React', 'Vue', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel',
      'HTML', 'CSS', 'SCSS', 'Tailwind', 'Bootstrap', 'Material-UI', 'Chakra UI',
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'AWS', 'Docker', 'Kubernetes',
      'Git', 'GitHub', 'GitLab', 'Jenkins', 'CI/CD', 'Agile', 'Scrum'
    ];
    
    const foundTech = techKeywords.filter(tech => 
      text.toLowerCase().includes(tech.toLowerCase())
    );
    
    return [...new Set(foundTech)]; // Remove duplicates
  }
  
  public static async parsePDFText(text: string): Promise<PortfolioData> {
    try {
      const personalInfo = this.extractPersonalInfo(text);
      const experience = this.extractExperience(text);
      const education = this.extractEducation(text);
      const skills = this.extractSkills(text);
      const projects = this.extractProjects(text);
      
      return {
        personalInfo,
        experience,
        education,
        skills,
        projects
      };
    } catch (error) {
      console.error('Error parsing PDF text:', error);
      throw new Error('Failed to parse PDF content');
    }
  }
}