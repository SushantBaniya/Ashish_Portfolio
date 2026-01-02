import { createElement } from "react";
import { useParams, Link } from "react-router-dom";
import { content } from "../Content";
import { MdArrowBack, MdStar, MdCheckCircle } from "react-icons/md";

const SkillDetail = () => {
    const { skillId } = useParams();
    const { skills } = content;

    // Find the skill by id (slug)
    const skill = skills.skills_content.find(
        (s) => s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === skillId
    );

    if (!skill) {
        return (
            <div className="min-h-screen bg-dark_primary flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Skill Not Found</h1>
                    <Link to="/" className="btn bg-white text-dark_primary">
                        <MdArrowBack className="inline mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark_primary via-slate-800 to-dark_primary">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-dark_variant/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-dark_variant/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-dark_variant/5 to-transparent rounded-full blur-2xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 md:container mx-auto px-5 py-10">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
                >
                    <MdArrowBack className="text-xl group-hover:-translate-x-1 transition-transform" />
                    <span className="font-Poppins">Back to Portfolio</span>
                </Link>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
                    {/* Icon Display */}
                    <div className="relative">
                        <div className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                            {skill.logo && typeof skill.logo === "string" ? (
                                <img className="h-24 md:h-32" src={skill.logo} alt={skill.name} />
                            ) : (
                                createElement(skill.logo, {
                                    className: "text-6xl md:text-8xl text-white",
                                })
                            )}
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-white/5 -m-3 animate-spin-slow"></div>
                    </div>

                    {/* Title & Quick Info */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-Poppins">
                            {skill.name}
                        </h1>
                        <p className="text-xl text-white/60 font-Poppins mb-6">
                            {skill.para}
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            {[...Array(5)].map((_, i) => (
                                <MdStar key={i} className="text-yellow-400 text-2xl" />
                            ))}
                            <span className="text-white/50 ml-2 font-Poppins">Expert Level</span>
                        </div>
                    </div>
                </div>

                {/* Description Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-Poppins flex items-center gap-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-white to-white/30 rounded-full"></span>
                        About This Skill
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed font-Poppins mb-8">
                        {skill.description}
                    </p>

                    {/* Key Points */}
                    <h3 className="text-xl font-bold text-white mb-4 font-Poppins">Key Competencies</h3>
                    <ul className="grid md:grid-cols-2 text-white gap-4">
                        {skill.keyPoints?.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-white font-Poppins"
                            >
                                <MdCheckCircle className="text-green-400 text-xl flex-shrink-0 mt-1" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Experience & Tools Section */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* Experience Card */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 font-Poppins">Experience</h3>
                        <div className="flex items-end gap-2">
                            <span className="text-5xl font-bold text-white">{skill.yearsExp || "3+"}</span>
                            <span className="text-white/50 pb-2 font-Poppins">Years</span>
                        </div>
                        <p className="text-white/60 mt-2 font-Poppins">Professional hands-on experience</p>
                    </div>

                    {/* Tools Card */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 font-Poppins">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.tools?.map((tool, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm font-Poppins border border-white/10"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 btn bg-white text-dark_primary hover:bg-white/90 transition-colors"
                    >
                        Let's Work Together
                    </Link>
                </div>
            </div>

            {/* Custom animation styles */}
            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default SkillDetail;
