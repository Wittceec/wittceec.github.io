import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Notes } from "@/components/sections/Notes";
import { Footer } from "@/components/ui/Footer";
import { getNotesTree } from "@/lib/notes";

export default function Page() {
  const notesTree = getNotesTree();

  return (
    <main className="relative bg-black min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Notes tree={notesTree} />
      <Footer />
    </main>
  );
}
