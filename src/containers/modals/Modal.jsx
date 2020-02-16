import ReactDOM from "react-dom";

export function Modal(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("root")
  );
}
