import Counter from "../Counter";
import wrapperSolid from "../Wrapper";

export default function counterWrapped(el) {
  wrapperSolid({
    component: Counter,
    element: el,
  });
}
