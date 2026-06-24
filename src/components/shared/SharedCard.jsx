export default function SharedCard({ data }) {
  const { tittle, body } = data;

  return (
    <div className="bg-green">
      <div>
        <span>{data.tittle}</span>
        <span>{data.body}</span>
      </div>
    </div>
  );
}
