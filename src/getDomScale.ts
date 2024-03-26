/**
 * get dom transform scale
 * */

export interface DomScale {
  x: number,
  y: number
}
/**
 * @returns DomScale
 * */
export default function getDomScale(dom: HTMLElement): DomScale {
  if (!dom) return { x: 1, y: 1 };
  const realSize = dom.getBoundingClientRect();
  return {
    x: realSize.width / dom.offsetWidth,
    y: realSize.height / dom.offsetHeight,
  }
}
