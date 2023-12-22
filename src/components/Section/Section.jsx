import { useState } from "react";
import Article from "./Article";

function Section({
  subtitle,
  setAmount,
  price1,
  description1,
  price2,
  description2,
  amount,
}) {
  return (
    <section className="container">
      <h2>{subtitle}</h2>

      <Article
        description={description1}
        price={price1}
        setAmount={setAmount}
        isSelected={amount === price1}
      />
      <Article
        description={description2}
        price={price2}
        setAmount={setAmount}
        isSelected={amount === price2}
      />
    </section>
  );
}

export default Section;
