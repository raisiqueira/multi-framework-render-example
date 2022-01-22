import { createSignal } from "solid-js";

const Couter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div className="mt-2 p-2 bg-blue-100">
      <div>Count = {count()}</div>
      <button
        className="py-2 px-5 bg-blue-800 text-white"
        onClick={() => setCount(count() + 1)}
      >
        increment+
      </button>
    </div>
  );
};

export default Couter;
