import { Intro } from "./components/Intro";
import { SelectedWork } from "./components/SelectedWork";
import { ExperienceAndSkills } from "./components/ExperienceAndSkills";
import { Contact } from "./components/Contact";

import { generateMetadata } from "./metadata";

export const metadata = generateMetadata();

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#05070A] via-[#111824] to-[#0C1118] text-[#f4f7fb] p-6 md:p-12 font-sans selection:bg-[#37d5ff]/30">
      <div className="max-w-6xl mx-auto space-y-24">
        <Intro />
        <SelectedWork />
        <ExperienceAndSkills />
        <footer className="py-12 border-t border-[#ffffff]/10">
          <Contact />
        </footer>
      </div>
    </main>
  );
}
