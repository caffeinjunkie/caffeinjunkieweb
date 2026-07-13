import { Mail, FileText, Code } from "lucide-react";

import { data } from "../data/cvData";

export const Intro = () => (
  <section className="grid md:grid-cols-2 gap-12 pt-16">
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#37d5ff]/30 bg-[#37d5ff]/10 text-[#37d5ff] text-xs font-medium uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-[#37d5ff]" />
        Available for frontend roles
      </div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
        {data.name}
      </h1>
      <p className="text-lg text-[#f4f7fb]/70 leading-relaxed">
        {data.summary}
      </p>
      <div className="flex gap-4">
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-2 px-6 py-3 bg-[#37d5ff] text-[#05070a] font-bold rounded-full hover:opacity-90 transition"
        >
          <Mail size={16} /> Email me
        </a>
        <a
          href="#resume"
          className="flex items-center gap-2 px-6 py-3 border border-[#ffffff]/10 bg-[#ffffff]/5 rounded-full hover:bg-[#ffffff]/10 transition"
        >
          <FileText size={16} /> View resume
        </a>
      </div>
    </div>

    {/* Snapshot Card */}
    <div className="p-8 rounded-3xl border border-[#ffffff]/10 bg-gradient-to-br from-[#111824] to-[#080c12] shadow-2xl space-y-6">
      <div className="flex justify-between items-center text-[#37d5ff]">
        <span className="text-xs font-bold uppercase tracking-widest">
          Frontend CV
        </span>
        <Code size={20} />
      </div>
      <div className="@container w-full">
        <div className="flex flex-col @md:flex-row w-full gap-4">
          <div className="p-4 rounded-2xl bg-[#ffffff]/5 border border-[#ffffff]/10 w-full @md:w-5/12">
            <p className="text-xs text-[#f4f7fb]/60">Base</p>
            <p className="font-bold text-lg">{data.location}</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#ffffff]/5 border border-[#ffffff]/10 w-full @md:w-7/12">
            <p className="text-xs text-[#f4f7fb]/60">Focus</p>
            <p className="font-bold text-lg">Frontend Development</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.skills.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full border border-[#37d5ff]/20 bg-[#37d5ff]/5 text-xs text-[#37d5ff]"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm text-[#f4f7fb]/80">
        Currently transforming Ajaib’s frontend ecosystem, driving significant
        improvements in SEO performance and organic reach. Optimizing user
        acquisition funnels and engineering high-performance interfaces to
        drastically increase user retention and registration conversions.
      </p>
    </div>
  </section>
);
