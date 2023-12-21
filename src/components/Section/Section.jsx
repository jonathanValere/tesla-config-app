import Article from "./Article";

function Section({
  subtitle,
  setAmount,
  price1,
  description1,
  price2,
  description2,
}) {
  return (
    <section className="container">
      <h2>{subtitle}</h2>
      <Article
        description={description1}
        price={price1}
        setAmount={setAmount}
      />
      <Article
        description={description2}
        price={price2}
        setAmount={setAmount}
      />
    </section>
  );
}

export default Section;
