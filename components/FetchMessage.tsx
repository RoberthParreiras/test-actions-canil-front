export default async function FetchMessage() {
  const res = await fetch("http://127.0.0.1:5000", {
    cache: "no-store",
    next: { revalidate: 1 },
  });
  const message: { msg: string } = await res.json();
  return (
    <div className="text-2xl">
      {message.msg || <p>Deu tudo errado!</p>}
    </div>
  );
}
