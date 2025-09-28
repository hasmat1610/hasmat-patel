import React, { useEffect, useState } from "react";
import { Download, Mail, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
    const [coords, setCoords] = useState({ x: -200, y: -200 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);

        const container = document.getElementById('hero-container');
        
        const handleMouseMove = (e: MouseEvent) => {
            if (container) {
                const rect = container.getBoundingClientRect();
                // Center the glow effect on cursor
                const x = e.clientX - rect.left - 200; // Half of glow width (400px)
                const y = e.clientY - rect.top - 200;  // Half of glow height (400px)
                setCoords({ x, y });
            }
        };

        const handleMouseLeave = () => {
            setCoords({ x: -200, y: -200 }); // Move glow off-screen
        };

        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            clearTimeout(timer);
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    const handleAction = (action: string, url?: string) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            console.log(`${action} action triggered`);
        }
    };

    const companies = [
        {
            name: "CITRUSBUG TECHNOLABS",
            period: "(FEBRUARY'06 2018 - AUGUST'15 2021)",
            bgColor: "bg-gradient-to-r from-orange-600 to-orange-700",
            hoverColor: "hover:from-orange-500 hover:to-orange-600"
        },
        {
            name: "NYUSOFT SOLUTIONS LLP", 
            period: "(AUGUST'23 2021 - AUGUST'25 2023)",
            bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
            hoverColor: "hover:from-blue-500 hover:to-blue-600"
        },
        {
            name: "TECHUZ INFOWEB PVT LTD",
            period: "(SEPTEMBER'05 2023 - PRESENT)",
            bgColor: "bg-gradient-to-r from-yellow-600 to-yellow-700", 
            hoverColor: "hover:from-yellow-500 hover:to-yellow-600"
        }
    ];

    return (
        <section
            id="hero-container"
            className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 px-6 py-20 overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '20px 20px'
            }}
        >
            {/* Interactive Glow Effect */}
            <div 
                style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: `translate(${coords.x}px, ${coords.y}px)`,
                    transition: 'transform 0.1s ease-out',
                    zIndex: 1,
                    filter: 'blur(1px)',
                    left: 0,
                    top: 0
                }}
                id="glow-overlay" 
            />
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                
                {/* Status Badge */}
                <div 
                    className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 text-white text-sm font-medium mb-16 transition-all duration-1000 hover:scale-105 hover:bg-white/5 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <div className="relative">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <span>Available for exciting opportunities</span>
                    <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Main Heading */}
                <h1 
                    className={`text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <span className="text-white">Hi, I'm </span>
                    <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                        style={{
                            background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Hasmat Patel.
                    </span>
                </h1>

                {/* Subtitle */}
                <h2 
                    className={`max-w-4xl text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-gray-300 mb-6 transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    Turning ideas into powerful, pixel-perfect experiences.
                </h2>

                {/* Description */}
                <p 
                    className={`text-lg text-gray-500 mb-12 font-medium transition-all duration-1000 ease-out delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    Senior Frontend Developer & UI/UX Designer with 7.6+ years of expertise.
                </p>

                {/* Action Buttons */}
                <div 
                    className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 ease-out delay-400 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <button
                        onClick={() => handleAction("Download Resume")}
                        className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-full transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                    >
                        <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                        <span>Download Resume</span>
                    </button>

                    <button
                        onClick={() => handleAction("Get in touch", "mailto:hasmat1610@gmail.com")}
                        className="group relative flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 text-white font-medium rounded-full border border-gray-600 hover:border-gray-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                        <Mail className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                        <span>Get in touch</span>
                    </button>
                </div>

                {/* Companies Section */}
                <div 
                    className={`w-full transition-all duration-1000 ease-out delay-600 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
                        COMPANIES I WORKED WITH
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
                        {companies.map((company, index) => (
                            <div 
                                key={company.name}
                                className={`${company.bgColor} ${company.hoverColor} py-3 px-6 rounded-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                                style={{
                                    animationDelay: `${(index + 1) * 0.1}s`,
                                    animation: isVisible ? 'fadeInUp 0.6s ease-out both' : 'none'
                                }}
                            >
                                <div className="text-white font-semibold text-sm uppercase tracking-wide">
                                    {company.name}
                                </div>
                                <div className="text-white/80 text-xs mt-1">
                                    {company.period}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;