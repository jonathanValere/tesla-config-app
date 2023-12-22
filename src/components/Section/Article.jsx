function Article({ description, price, setAmount, isSelected }) {
  return (
    <article
      className={isSelected ? "active" : "no-active"}
      onClick={() => {
        setAmount(price);
      }}
    >
      {description} - {price} €
    </article>
  );
}

export default Article;
