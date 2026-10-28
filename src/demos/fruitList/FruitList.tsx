export default function FruitList() {
  const fruits: string[] = ["사과", "바나나", "포도", "딸기"];

  return (
    <div>
      <ul>
        {fruits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
