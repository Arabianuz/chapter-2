import "./List.css";

function List({ items }) {
  return (
    <ul className="My-info-list">
      {items.map((item) => (
        <li key={item.field}>
          <span>{item.field}: </span>
          {item.value}
        </li>
      ))}
    </ul>
  );
}
export default List;
