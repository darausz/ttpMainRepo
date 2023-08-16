export default function scrollLeft(ref, arr) {
  const maxScroll = (ref.current.scrollWidth + ref.current.clientWidth);
  const oneScroll = maxScroll / arr.length - ref.current.clientWidth / arr.length
  console.log(maxScroll, oneScroll)
  if (ref.current.scrollLeft - .5 * oneScroll < 0) {
    ref.current.scrollLeft = maxScroll - oneScroll;
  }
  else {
    ref.current.scrollLeft -= oneScroll - 0.3;
  }
}