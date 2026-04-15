import { Link, useParams } from "react-router-dom";
import { content } from "../Content";
import { MdArrowBack } from "react-icons/md";

const EventDetail = () => {
  const { eventId } = useParams();
  const { Projects } = content;

  // Find the specific event from Projects content
  const event = Projects.project_content.find((p) => p.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-bg_light_primary flex items-center justify-center">
        <div className="text-center text-text_light">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link to="/" className="btn bg-dark_primary text-slate-900 font-bold">
            <MdArrowBack className="inline mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg_light_primary text-text_light pt-20 pb-16">
      <div className="md:container mx-auto px-5">
        
        {/* Navigation & Title */}
        <div className="mb-10 text-center relative max-w-4xl mx-auto">
           <Link
              to="/#gallery"
              className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-text_light/70 hover:text-dark_primary transition-colors group z-10"
              onClick={() => window.scrollTo(0, 0)}
            >
              <MdArrowBack className="text-2xl group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline font-Poppins">Back to Gallery</span>
            </Link>

          <h2 className="title" data-aos="fade-down">
            {event.title}
          </h2>
          <h4 className="subtitle mt-3" data-aos="fade-down" data-aos-delay="200">
            Project Overview
          </h4>
        </div>

        {/* Huge Photo Wrapper */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border-[1px] border-gray/20 mx-auto max-w-5xl mb-12"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-auto max-h-[70vh] object-cover object-center"
          />
        </div>

        {/* About Section details */}
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-3xl p-8 md:p-12 border border-gray/20 shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-dark_primary rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-text_light font-Poppins">
                About The Event
              </h3>
            </div>
            
            <p className="text-text_light/80 text-lg leading-relaxed font-Poppins">
               {event.description || "An incredible event carefully planned and executed with absolute precision by the team. From initial rigging to final strike, every detail was monitored perfectly to create a stunning live experience."}
            </p>

            <div className="mt-10 flex gap-4">
              <Link to="/#contact" className="btn bg-dark_primary text-slate-900 font-bold border-none transition-colors">
                Book Something Similar
              </Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetail;