import { render } from "solid-js/web";
import type { MountableElement } from "solid-js/web";

type Props = {
  component: any;
  element: MountableElement;
};

const wrapperSolid = ({ component, element }: Props) => {
  const Component = component;
  render(Component, element);
};

export default wrapperSolid;
