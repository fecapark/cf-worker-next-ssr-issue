import ky from "ky";

const getDynamicData = async (id: string) => {
  const res = await ky.get(`${process.env.NEXT_PUBILC_URL}/channel/${id}`);
  return res.json();
};

const IdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const item = await getDynamicData(id);

  return (
    <div>
      <h1>Todo Item</h1>
      <p>{JSON.stringify(item)}</p>
    </div>
  );
};

export default IdPage;
