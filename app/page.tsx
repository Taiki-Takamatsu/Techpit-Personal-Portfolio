import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HomeBody from "@/components/home/HomeBody";

export default function Home() {
  return (
    <div>
      <div className="background-pattern" />
      <div>
        <Header />
        <main className="pt-16">
          <HomeBody />

        </main>
        <Footer />
      </div >
    </div>

  );
}
