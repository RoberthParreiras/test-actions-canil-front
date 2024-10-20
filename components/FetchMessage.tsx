export default async function FetchMessage() {
  try {
    const res = await fetch("http://127.0.0.1:5000", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const message: {
      msg: {
        id: number;
        username: string;
        email: string;
      };
    } = await res.json();
    return (
      <>
        <div className="text-2xl">{message.msg.username}</div>
        <div className="text-2xl">{message.msg.email}</div>
      </>
    );
  } catch (error) {
    console.error("Error fetching message:", error);
    return (
      <div className="text-2xl">
        <p>Deu tudo errado!</p>
      </div>
    );
  }
}
