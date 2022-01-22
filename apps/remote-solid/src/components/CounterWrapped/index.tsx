import Counter from "../Couter";
import wrapperSolid from "../Wrapper";

export default function counterWrapped(el) {
  wrapperSolid({
    component: Counter,
    element: el,
  });
}
