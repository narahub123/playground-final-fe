import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement | null;
}

const Portal = (props: PortalProps) => {
  const { container = globalThis?.document?.body, children } = props;
  return container ? createPortal(children, container) : null;
};

export default Portal;
