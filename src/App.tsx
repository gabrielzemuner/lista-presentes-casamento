import { gifts } from "@/data/gifts";

export default function App() {
  return (
    <div className="text-red-500 font-black">
      {gifts.map((gift) => (
        <div key={gift.id}>{gift.nome}</div>
      ))}
    </div>
  );
}
