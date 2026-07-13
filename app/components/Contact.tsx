import { Mail } from "lucide-react";

import IcLinkedin from "../assets/shapes/IcLinkedin";

import { data } from "../data/cvData";
import IcGithub from "../assets/shapes/IcGithub";

export const Contact = () => {
  const links = [
    {
      name: data.email,
      icon: Mail,
      href: `mailto:${data.email}`,
    },
    { name: "caffeinjunkie", icon: IcGithub, href: data.github },
    { name: "Satrio Adi Prakoso", icon: IcLinkedin, href: data.linkedin },
  ];

  return (
    <section className="p-8 rounded-[28px] border border-[#ffffff]/10 bg-gradient-to-br from-[#37d5ff]/10 via-[#ffffff]/5 to-transparent flex flex-col md:flex-row gap-8 items-center justify-between">
      {/* Left Text Content */}
      <div className="space-y-2 flex-1">
        <p className="text-[#37d5ff] text-xs font-bold uppercase tracking-widest">
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Let’s build something precise, fast, and easy to maintain.
        </h2>
        <p className="text-[#f4f7fb]/70 text-sm md:text-base">
          Open to Frontend/Full Stack Developer roles
        </p>
      </div>

      {/* Right Action Links */}
      <div className="flex flex-col gap-3 w-full md:w-auto">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-xl hover:bg-[#ffffff]/10 transition-colors duration-200"
          >
            <link.icon width={20} height={20} className="text-[#f4f7fb]" />
            <span className="text-sm font-semibold text-[#f4f7fb]">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
