function Article({ description, price, calcul }) {
  return (
    <article onClick={calcul}>
      {description} - {price} €
    </article>
  );
}

export default Article;
