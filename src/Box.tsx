import "./App.css";

interface BoxTp {
  shape?: "x" | "y" | undefined;
  sendId: (id: number) => void;
  id: number;
}

const Box = ({ shape, sendId, id }: BoxTp) => {
  return (
    <div
      onClick={() => {
        if (!shape) sendId(id);
      }}
      className="box">
      {shape}
    </div>
  );
};

export default Box;
