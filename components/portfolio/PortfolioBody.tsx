"use client";

import PortfolioList from "./format/PortfolioList";
import { portfolioes } from "./data/Portfolio";
import { useState } from "react";
import { Portfolio } from "./data/Portfolio";
import PortfolioModal from "./format/PortfolioModal";
import Image from "next/image";

export default function PortfolioBody() {
  // nullを許可するという書き方
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);


  return (
    <div>
      <h1 className="mt-5 flex justify-center text-3xl font-bold">ポートフォリオ一覧</h1>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {
          portfolioes.map((portfolio) => (
            <PortfolioList
              key={portfolio.title}
              portfolio={portfolio}
              onClick={() =>
                setSelectedPortfolio(portfolio)
              }
            />
          ))
        }
      </div>

      {selectedPortfolio && (
        <PortfolioModal
          portfolio={selectedPortfolio}
          onClose={() =>
            setSelectedPortfolio(null)
          }
        />
      )}

    </div >

  );
}
