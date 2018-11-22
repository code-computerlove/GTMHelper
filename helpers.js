// Helper.js
// Generic functions we can reuse.

export function closest(el, selector) {
  if (el.tagName === 'BODY') {
    return null;
  }

  if (matches(el.parentNode, selector)) {
    return el.parentNode;
  }

  return closest(el.parentNode, selector);
}
