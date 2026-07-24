import {
  Code2,
  Cookie,
  Scissors,
  Palette,
  Camera,
  Video,
  Users,
  Crown,
  Trophy,
  HeartHandshake,
  KeyboardMusic,
} from "lucide-react";

import danielwega from "@/assets/danielwega.jpg";
import wahuu from "@/assets/wahuu.jpeg";
import kym from "@/assets/kym.jpg";
import ochran from "@/assets/ochran.jpeg"

export const departments = [
  {
    name: "Creative Coding",
    tag: "Logic as art",
    body: "Build practical coding skills through creative projects.",
    Icon: Code2,
  },
  {
    name: "Music & Rhythm",
    tag: "Songs from silence",
    body: "Learn instruments and rhythm in a hands-on environment.",
    Icon: KeyboardMusic,
  },
  {
    name: "The Art of Baking",
    tag: "Science in the kitchen",
    body: "Discover the science of baking and pastry design.",
    Icon: Cookie,
  },
  {
    name: "Fashion & Design",
    tag: "Stitching identity",
    body: "Learn tailoring, sketching, and basic needlework.",
    Icon: Scissors,
  },
  {
    name: "Arts & Crafts",
    tag: "Colour, texture, story",
    body: "Explore creativity through paint, clay, and paper.",
    Icon: Palette,
  },
  {
    name: "Photography",
    tag: "Seeing on purpose",
    body: "Learn camera basics, lighting, and visual storytelling.",
    Icon: Camera,
  },
  {
    name: "Videography",
    tag: "Stories that move",
    body: "Shoot and edit short films from start to finish.",
    Icon: Video,
  },
  {
    name: "Leadership",
    tag: "The courage to guide",
    body: "Build confidence through public speaking and decision making.",
    Icon: Users,
  },
  {
    name: "Strategy Games",
    tag: "Play that sharpens the mind",
    body: "Develop focus and critical thinking through strategic play.",
    Icon: Crown,
  },
  {
    name: "Sports",
    tag: "The joy of the body",
    body: "Engage in physical fitness, teamwork, and athletic drills.",
    Icon: Trophy,
  },
  {
    name: "Team Building",
    tag: "Better together",
    body: "Enhance trust and communication through group challenges.",
    Icon: HeartHandshake,
  },
];

export const sponsorshipTiers = [
  {
    tier: "Meals",
    line: "Warm plates for one child, all three days.",
    amount: "KES 1,500",
  },
  {
    tier: "Materials",
    line: "Paint, code kits and thread for one workshop.",
    amount: "KES 3,000",
  },
  {
    tier: "Equipment",
    line: "A camera or an instrument that outlasts the camp.",
    amount: "KES 8,000",
  },
  {
    tier: "Transport",
    line: "Getting a child to camp, and safely home.",
    amount: "KES 2,000",
  },
  {
    tier: "Scholarship",
    line: "A full path — meals, materials, mentorship for one dreamer.",
    amount: "KES 15,000",
  },
  {
    tier: "General Gift",
    line: "Wherever the need is loudest. Every shilling counts.",
    amount: "Any amount",
  },
];

export const faqs = [
  {
    q: "Who is the bootcamp for?",
    a: "Any child aged 8 to 16. No prior skill is needed — the whole point is discovery. We reserve half of every cohort for children from underserved communities.",
  },
  {
    q: "How much does it cost to attend?",
    a: "Children from the home attend fully free. Children joining from the wider community contribute KES 1,500 each — this covers their snacks, materials and a share of the organizing costs. Sponsors and partners cover everything else.",
  },
  {
    q: "When and where does it happen?",
    a: "Thursday 20th, Friday 21st and Saturday 22nd of August — three days during the August school holiday. The venue is our home base in Nairobi; full directions are shared on registration.",
  },
  {
    q: "How are the children kept safe?",
    a: "Every mentor is background-checked and trained in child safeguarding. Parents check in and out of the venue in person, and we operate a strict 1:6 mentor-to-child ratio.",
  },
  {
    q: "Can I partner long-term?",
    a: "Yes. We work with a handful of long-term partners each year on materials, equipment and scholarships. Reach out through the invitation section and we'll send our partnership pack.",
  },
  {
    q: "Where does my donation actually go?",
    a: "100% of donations go directly to the child experience: meals, transport, materials, equipment and scholarships. Our books are audited and published annually.",
  },
];

export const FORM_LINKS = {
  registerChild: "https://forms.gle/oUs5PPs4JaR99gdA7",
  mentor: "https://forms.gle/oUs5PPs4JaR99gdA7",
  partner: "https://forms.gle/oUs5PPs4JaR99gdA7",
  donate: "https://forms.gle/oUs5PPs4JaR99gdA7",
};

export const team = [
  {
    name: "Daniel Wega",
    roles: ["Bootcamp Lead Coordinator", "Technical Instructor/Educator"],
    bio: "Coordinates planning, scheduling and volunteer operations throughout the bootcamp.",
    image: danielwega,
    socials: {
      twitter: "https://x.com/_dwegan",
      portfolio: "https://porrtfolio-rose.vercel.app/"
    }
  },
  {
    name: "Ochran Ongeri",
    roles: ["Founder Palaver Africa", "Assistant Bootcamp Coordinator"],
    bio: "Manages overall partnerships and community outreach for the organization.",
    image: ochran,
    socials: {
      portfolio: "palaverafrica.org",
      // twitter: "#"
    }
  },
  {
    name: "Carolyne Wahuu",
    roles: ["Miss Kikuyu 2026-2027"],
    bio: "Model and Youth advocate ",
    image: wahuu,
    socials: {
      instagram: "https://www.instagram.com/w.a.h.u.u.u?igsh=YzBhbGZpamEyZHM3",
    }
  },
  {
    name: "Kym Creates",
    roles: ["Founder Kym_creates"],
    bio: "Graphic Designer and Tech enthusiasist, bringing creative industry expertise to the youth.",
    image: kym,
    socials: {
      instagram: "https://www.instagram.com/kym_creates13?igsh=MTZ5dHV6dG5scmh4MA==",
      linkedin: "https://www.linkedin.com/in/kym-creates-2676603b1?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  // {
  //   name: "Amina K.",
  //   roles: ["Operations Lead", "Safeguarding"],
  //   bio: "Child protection certified leader ensuring a safe and secure environment.",
  //   image: "",
  //   socials: {
  //     linkedin: "#"
  //   }
  // },
  // {
  //   name: "Joel M.",
  //   roles: ["Head of Mentorship"],
  //   bio: "Trains all volunteers and mentors to provide high-quality guidance.",
  //   image: "",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#"
  //   }
  // },
];

export const partners = [
  "Makimei Children's Home",
  "Palaver Africa",
  "Dacxi Technologies",
  "Kym_creates",
];
