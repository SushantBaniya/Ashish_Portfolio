// import content
import { createElement } from "react";
import { content } from "../Content";
import { Link } from "react-router-dom";

const Skills = () => {
  const { skills } = content;

  // Generate URL slug from skill name
  const getSkillSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <Link
              to={`/skill/${getSkillSlug(skill.name)}`}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 hover:border-dark_primary hover:shadow-lg transition-all duration-300"
            >
              <div>
                {typeof skill.logo === "string" ? (
                  <img
                    src={skill.logo}
                    alt="..."
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                ) : (
                  createElement(skill.logo, {
                    className:
                      "text-3xl text-dark_primary group-hover:scale-125 duration-200",
                  })
                )}
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3 group-hover:translate-x-1 transition-transform">
                  {createElement(skills.icon)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
