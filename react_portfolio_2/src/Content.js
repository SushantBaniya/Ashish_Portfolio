// import images
import Hero_person from "./assets/images/Hero/Ashish.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/Ashish.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/Ashish2.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdGraphicEq, MdSwitchVideo, MdLightMode, MdSettingsEthernet, MdWifiTethering, MdBuild } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "AVL Technician",
    firstName: "ASHISH",
    LastName: "B.K.",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years engineering live audio, video, and lighting",
      },
      {
        count: "500+",
        text: "Events delivered across corporate, worship, and touring",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Audio Engineering & Mixing",
        para: "FOH/monitor mixes, gain structure, FX, stage patch",
        logo: MdGraphicEq,
      },
      {
        name: "Video Switching & IMAG",
        para: "Roland/Blackmagic ops, SDI/NDI workflows, latency checks",
        logo: MdSwitchVideo,
      },
      {
        name: "Lighting Programming",
        para: "DMX addressing, cue stacks, atmospherics safety",
        logo: MdLightMode,
      },
      {
        name: "Digital Audio Networking",
        para: "Dante routing, VLAN prep, redundant paths",
        logo: MdSettingsEthernet,
      },
      {
        name: "RF Coordination",
        para: "Wireless mics/IEMs, frequency planning, Intermod mitigation",
        logo: MdWifiTethering,
      },
      {
        name: "Event Systems Troubleshooting",
        para: "Signal flow, cabling, rapid diagnostics under show pressure",
        logo: MdBuild,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Live Audio Support",
        para: "FOH/monitor mixes, stage patching, RF coordination, and mic selection for conferences, worship, and concerts.",
        logo: services_logo1,
      },
      {
        title: "Video & Presentation Control",
        para: "Switcher operation, projection/LED wall feed management, graphics handoff, and streaming quality checks.",
        logo: services_logo2,
      },
      {
        title: "Lighting Operation",
        para: "Cue building, DMX troubleshooting, atmospherics compliance, and calling transitions with stage managers.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Corporate Summit AV Package",
        image: project1,
      },
      {
        title: "Hybrid Townhall Livestream",
        image: project2,
      },
      {
        title: "House of Worship Upgrade",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Ashish kept comms clear and solved RF hits quickly, giving our speakers confidence on stage.”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Smooth cueing on video and lighting—our townhall stream was flawless for both in-room and remote.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“He walks in with a plan, keeps calm under pressure, and leaves the rig documented for the next show.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“Dependable AVL tech—great with volunteers and fast at troubleshooting lighting and audio issues.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,

    para: "Need a calm, reliable AVL tech for your next show? I prep signal flow, handle FOH/monitors, switch video, and keep lighting cues tight so your presenters shine.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ashish.avl.tech@gmail.com",
        icon: GrMail,
        link: "mailto:ashish.avl.tech@gmail.com",
      },
      {
        text: "+91 9000 123 456",
        icon: MdCall,
        link: "https://wa.me/919000123456",
      },
      {
        text: "ashish.avl.tech",
        icon: BsInstagram,
        link: "https://www.instagram.com/ashish.avl.tech/",
      },
    ],
  },
  Footer: {
    text: "Sushantprojects@all rights reserved 2025",
  },
};
