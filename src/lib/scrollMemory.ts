let homeScrollY = 0

export function saveHomeScroll() {
  homeScrollY = window.pageYOffset || document.documentElement.scrollTop
}

export function restoreHomeScroll() {
  window.scrollTo(0, homeScrollY)
}

export function resetHomeScroll() {
  homeScrollY = 0
}
