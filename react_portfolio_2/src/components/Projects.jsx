import { content } from "../Content";
import { Link } from "react-router-dom";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="gallery">
      <div className="md:container px-5 pt-14 pb-20 min-h-screen flex flex-col">
        <div className="mb-10 text-center">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.project_content.map((content, i) => (
            <Link
              to={`/event/${content.id}`}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg border border-gray/20 cursor-pointer block"
            >
              {/* Background Image */}
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h5 className="text-2xl font-bold font-Poppins text-text_light mb-2">{content.title}</h5>
                  <div className="w-12 h-1 bg-dark_primary rounded-full transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up">
           <button className="btn bg-dark_primary text-slate-900 font-bold border-none hover:bg-dark_primary/80 transition-colors">
              VIEW FULL GALLERY
           </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
