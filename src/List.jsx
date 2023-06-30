const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        const { image, name, id, age } = person;
        return (
          <article className="person">
            <img src={image} alt={name} className="img" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
