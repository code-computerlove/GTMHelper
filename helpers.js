// Helper.js
// Generic functions we can reuse.

function matches(el, selector) {
  // IE support
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }

  return el.matches(selector);
}

export default function closest(el, selector) {
  if (el.tagName === 'BODY') {
    return null;
  }

  if (matches(el.parentNode, selector)) {
    return el.parentNode;
  }

  return closest(el.parentNode, selector);
}
