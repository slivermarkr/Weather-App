export default function createElement(type, className, text = "") {
  const el = document.createElement(type);
  el.setAttribute("class", className);
  el.textContent = text;
  return el;
}
