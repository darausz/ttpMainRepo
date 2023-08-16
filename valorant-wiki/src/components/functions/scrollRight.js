export default function scrollRight(ref, arr) {
  const maxScroll = (ref.current.scrollWidth + ref.current.clientWidth);
  const oneScroll = Math.ceil(maxScroll / arr.length - (ref.current.clientWidth) / (arr.length))
  if (ref.current.scrollLeft + 2.1 * oneScroll > maxScroll) {
    ref.current.scrollLeft = 0;
  }
  else {
    ref.current.scrollLeft += oneScroll + 0.3;
    console.log(maxScroll, oneScroll, ref.current.scrollLeft)

  }
}
