

export default function ShoppingList({ dogsList = [] }) {
  
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
      {dogsList.map((dog) => (
        <img style={{
          width: "200px",
          height: "200px",
          margin: "10px",
        }} src={dog} alt="" />
      ))}
      </div>
    </div>
  );
}
