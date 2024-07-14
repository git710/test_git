export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}

export function add(a: number, b: number): number {
  return a + b;
}

export function substract(a: number, b: number): number {
  return a - b;
}
