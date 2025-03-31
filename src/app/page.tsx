import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <Link href="/todo/1">Todo 1</Link>
      </ul>
      <ul>
        <Link href="/todo/2">Todo 2</Link>
      </ul>
      <ul>
        <Link href="/todo/3">Todo 3</Link>
      </ul>
      <ul>
        <Link href="/todo/4">Todo 4</Link>
      </ul>
    </div>
  );
};

export default Home;
