/**
 * get dom transform scale
 * */

export type DomScale = {
  x: number,
  y: number
}
export default function getDomScale(dom: HTMLElement): DomScale {
  if (!dom) return { x: 1, y: 1 };
  const realSize = dom.getBoundingClientRect();
  console.log(realSize, '=========');
  return {
    x: realSize.width / dom.offsetWidth,
    y: realSize.height / dom.offsetHeight,
  }
}
