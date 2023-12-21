function Section({ subtitle, description, price }) {
  return (
    <section className="container">
      <h2>{subtitle}</h2>
      <article>
        {description} - {price} €
      </article>
    </section>
  );
}

export default Section;
