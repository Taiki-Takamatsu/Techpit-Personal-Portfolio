import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PortfolioBody from "@/components/portfolio/PortfolioBody";

export default function study() {
  return (
    <div>
      <div className="background-pattern" />

      <div>
        <Header />
        <main className="pt-16">
          <PortfolioBody />
        </main>
        <Footer />
      </div >
    </div>

  );
}
