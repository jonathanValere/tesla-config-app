import Article from "./Article";

function Section({ subtitle, calcul }) {
  return (
    <section className="container">
      <h2>{subtitle}</h2>
      <Article description="Grande autonomie" price="90700" calcul={calcul} />
      <Article description="Performance" price="106700" calcul={calcul} />
    </section>
  );
}

export default Section;
