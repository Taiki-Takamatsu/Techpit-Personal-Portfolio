import Header from "@/components/Header";
import Footer from "@/components/Footer";

import StudyBody from "@/components/study/StudyBody";

export default function study() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <StudyBody />

      </main>
      <Footer />
    </div >
  );
}
