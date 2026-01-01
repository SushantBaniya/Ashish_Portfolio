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
        description: "I specialize in delivering crystal-clear audio experiences for live events, conferences, and concerts. With expertise in front-of-house and monitor mixing, I ensure every performer and audience member hears exactly what they need. From setting optimal gain structures to crafting immersive effects chains, I bring technical precision and artistic sensibility to every mix.",
        keyPoints: [
          "Front-of-house (FOH) mixing for audiences up to 10,000+",
          "Monitor mixing ensuring artist comfort and performance",
          "Gain staging and signal optimization for clean audio",
          "Creative use of reverbs, delays, and dynamic processing",
          "Stage patching and input list management",
          "Multi-track recording during live performances"
        ],
        tools: ["Yamaha CL/QL Series", "DiGiCo SD", "Allen & Heath dLive", "Waves Plugins", "Shure Wireless"],
        yearsExp: "4+"
      },
      {
        name: "Video Switching & IMAG",
        para: "Roland/Blackmagic ops, SDI/NDI workflows, latency checks",
        logo: MdSwitchVideo,
        description: "I operate professional video switching systems to deliver seamless visual experiences for live events, broadcasts, and streaming productions. My expertise spans from intimate corporate presentations to large-scale IMAG (Image Magnification) for concert venues, ensuring audiences never miss a moment of the action.",
        keyPoints: [
          "Multi-camera live switching for dynamic visual storytelling",
          "IMAG operation for large venues and festivals",
          "SDI and NDI workflow implementation and troubleshooting",
          "Graphics integration and lower-third management",
          "Streaming quality optimization and encoding",
          "Latency management for live-to-screen synchronization"
        ],
        tools: ["Roland V-Series", "Blackmagic ATEM", "vMix", "OBS Studio", "NDI Tools", "Resolume"],
        yearsExp: "3+"
      },
      {
        name: "Lighting Programming",
        para: "DMX addressing, cue stacks, atmospherics safety",
        logo: MdLightMode,
        description: "I create captivating lighting designs that transform spaces and elevate performances. From programming intricate cue sequences to real-time busking during live shows, I understand how light shapes emotion and guides audience attention. Safety is paramount in my work, especially when operating atmospherics and pyrotechnics.",
        keyPoints: [
          "DMX addressing and fixture configuration",
          "Cue stack programming for theatrical precision",
          "Live busking and real-time show control",
          "Moving head and LED fixture programming",
          "Atmospherics operation with safety compliance",
          "Timecode synchronization for multimedia shows"
        ],
        tools: ["GrandMA2/MA3", "Avolites Titan", "ETC EOS", "WYSIWYG", "Capture", "Martin Rush"],
        yearsExp: "3+"
      },
      {
        name: "Digital Audio Networking",
        para: "Dante routing, VLAN prep, redundant paths",
        logo: MdSettingsEthernet,
        description: "I architect and deploy robust digital audio networks that form the backbone of modern live productions. With deep knowledge of Dante, AVB, and other audio-over-IP protocols, I ensure reliable, low-latency audio distribution across complex venue infrastructures. My network designs prioritize redundancy and scalability.",
        keyPoints: [
          "Dante network design and implementation",
          "VLAN configuration for audio network isolation",
          "Redundant network path design for failover",
          "Network switch configuration and QoS settings",
          "Multi-venue audio distribution systems",
          "Troubleshooting network latency and packet loss"
        ],
        tools: ["Dante Controller", "Dante Virtual Soundcard", "Cisco/Netgear Switches", "Wireshark", "AVB"],
        yearsExp: "3+"
      },
      {
        name: "RF Coordination",
        para: "Wireless mics/IEMs, frequency planning, Intermod mitigation",
        logo: MdWifiTethering,
        description: "I manage complex wireless ecosystems ensuring interference-free operation of microphones, in-ear monitors, and communication systems. In today's congested RF environment, proper frequency coordination is critical. I use professional scanning tools and coordination software to create clean frequency plans for events of any scale.",
        keyPoints: [
          "Wireless microphone and IEM system deployment",
          "RF spectrum scanning and analysis",
          "Frequency coordination for multi-system events",
          "Intermodulation prediction and avoidance",
          "Antenna distribution and RF zone planning",
          "Compliance with local RF regulations"
        ],
        tools: ["Shure Wireless Workbench", "Sennheiser WSM", "RF Explorer", "IAS Intermod Analysis", "Lectrosonics"],
        yearsExp: "3+"
      },
      {
        name: "Event Systems Troubleshooting",
        para: "Signal flow, cabling, rapid diagnostics under show pressure",
        logo: MdBuild,
        description: "When things go wrong during a live event, I'm the person who stays calm and fixes it fast. Years of hands-on experience have honed my ability to trace signal paths, diagnose equipment failures, and implement solutions—all while the show continues. I believe in proactive system checks, but I'm equally prepared for the unexpected.",
        keyPoints: [
          "Rapid signal flow diagnosis and repair",
          "Cable testing and infrastructure troubleshooting",
          "Equipment swap and backup system deployment",
          "Communication with production teams under pressure",
          "Preventive maintenance and system checks",
          "Documentation of issues for future prevention"
        ],
        tools: ["Multimeters", "Cable Testers", "Audio Analyzers", "Network Testers", "Tool Kit", "Spare Parts Inventory"],
        yearsExp: "4+"
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
        text: "ashishlamkade79@gmail.com",
        icon: GrMail,
        link: "mailto:ashishlamkade79@gmail.com",
      },
      {
        text: "+91 9802347095",
        icon: MdCall,
        link: "https://wa.me/919802347095",
      },
      {
        text: "ashish.lamkade",
        icon: BsInstagram,
        link: "https://www.instagram.com/ashish.lamkade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
  },
  Footer: {
    text: "Sushantprojects@all rights reserved 2025",
  },
};
