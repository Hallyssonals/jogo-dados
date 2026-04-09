export default function Dado({ valor }) {
  return (
    <img
      src={`/dado${valor}.png`}
      alt={`Dado ${valor}`}
      width="80"
    />
  );
}