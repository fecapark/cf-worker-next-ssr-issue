import ky from "ky";

type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getDynamicData = async (id: string) => {
  const res = await ky.get<TodoItem>(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.json();
};

const IdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const todoItem = await getDynamicData(id);

  return (
    <div>
      <h1>Todo Item</h1>
      <p>
        <strong>ID:</strong> {todoItem.id}
      </p>
      <p>
        <strong>Title:</strong> {todoItem.title}
      </p>
      <p>
        <strong>Completed:</strong> {String(todoItem.completed)}
      </p>
      <p>
        <strong>User ID:</strong> {todoItem.userId}
      </p>
    </div>
  );
};

export default IdPage;
