export default async function FetchMessage() {
  // const res = await fetch("http://127.0.0.1:5000", {
  //   cache: "no-store",
  // });
  // const message: { msg: string } = await res.json();
  const message: { msg: string } = { msg: "" };
  return (
    <div className="text-2xl">
      {message.msg != "" ? <p>{message.msg}</p> : <p>Deu tudo errado!</p>}
    </div>
  );
}
