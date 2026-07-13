import Link from "next/link";

export const SelectedWork = () => (
  <section id="work" className="space-y-10">
    <div className="space-y-2">
      <p className="text-[#37d5ff] text-xs font-bold uppercase tracking-widest">
        Selected work
      </p>
      <h2 className="text-3xl font-bold">Some of my recent work</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Ajaib Terminal",
          desc: "Built a desktop-based trading platform for Indonesian stock market.",
          tags: ["Tauri", "TypeScript", "Web Sockets"],
          href: "https://ajaib.co.id/terminal",
        },
        {
          title: "Ajaib Landing Page",
          desc: "Built responsive and SEO-optimized landing pages for various Ajaib products.",
          tags: ["Next.js", "SEO", "TypeScript"],
          href: "https://ajaib.co.id/",
        },
        {
          title: "Lodgify Booking System",
          desc: "Delivered a seamless booking experience for Lodgify properties.",
          tags: ["Next.js", "Storybook", "SWR"],
          href: "https://checkout.lodgify.com/livingstone/16400/reservation?currency=IDR&adults=1",
        },
      ].map((proj, i) => (
        <Link
          key={i}
          href={proj.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-3xl border border-[#ffffff]/10 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition space-y-4 text-left"
        >
          <p className="text-[#37d5ff] font-mono">0{i + 1}</p>
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-[#f4f7fb]/70 text-sm">{proj.desc}</p>
          <div className="flex gap-2 pt-2">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#ffffff]/10 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  </section>
);
