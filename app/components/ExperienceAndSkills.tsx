"use client";

import { useState } from "react";
import { Briefcase, Target, Eye } from "lucide-react";

import { data } from "../data/cvData";

export const ExperienceAndSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const flatSkills = Object.values(data.skills).flat();
  return (
    <section id="resume" className="grid md:grid-cols-2 gap-8">
      <div className="p-8 rounded-3xl border border-[#ffffff]/10 bg-[#111824] space-y-8">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Briefcase size={20} /> Experience
        </h3>
        {data.experience.map((exp, i) => (
          <div key={i} className="space-y-2 border-t border-[#ffffff]/10 pt-4">
            <p className="text-xs text-[#37d5ff]">
              {exp.period} | {exp.location}
            </p>
            <div className="flex items-center justify-between gap-2">
              <p className="font-bold">
                {exp.title} · {exp.company}
              </p>
              <div className="relative">
                <button
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer bg-white/10 hover:bg-white/15 px-2 py-1 rounded-md"
                >
                  <Eye size={16} />
                </button>
                {hoveredIndex === i && (
                  <div className="absolute right-0 top-full mt-2 w-64 md:w-90 lg:w-120 p-3 bg-[#111824] border border-[#ffffff]/20 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in duration-200">
                    {exp.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="text-sm text-white flex items-start gap-2"
                      >
                        <p className="font-bold">·</p>
                        <p>{achievement}.</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8 rounded-3xl border border-[#ffffff]/10 bg-[#ffffff]/5 space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Target size={20} /> Skills
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-[#f4f7fb]/80">
          {flatSkills.map((s) => (
            <div
              key={s}
              className="border-b border-[#ffffff]/10 pb-2 font-semibold"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
