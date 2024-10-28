function createElement(elementType, className = "", textContent = "", id = "") {
  const element = document.createElement(elementType);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (id) {
    element.id = id;
  }

  return element;
}

export { createElement };
