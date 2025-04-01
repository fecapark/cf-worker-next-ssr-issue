import { handleError } from "@/utils/error";
import ky from "ky";

const getDynamicData = async (id: string) => {
  const res = await ky.get(`${process.env.NEXT_PUBILC_URL}/channel/${id}`);
  return res.json();
};

const IdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  try {
    const item = await getDynamicData(id);
    return (
      <div>
        <h1>Todo Item</h1>
        <p>{JSON.stringify(item)}</p>
      </div>
    );
  } catch (e: unknown) {
    const err = await handleError(e);
    return (
      <div>
        <h1>에러발생</h1>
        <div>{JSON.stringify(err)}</div>
      </div>
    );
  }
};

export default IdPage;
