function Article({ description, price, setAmount }) {
  return (
    <article
      onClick={() => {
        setAmount(price);
      }}
    >
      {description} - {price} €
    </article>
  );
}

export default Article;
