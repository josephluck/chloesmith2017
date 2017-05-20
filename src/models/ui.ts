const scrollListener = (e) => {
  const isVertical = e.deltaY !== 0

  if (isVertical) {
    const scrollContainer = document.querySelector('.js-scroll-container')
    const scrollContainerWidth = scrollContainer.scrollWidth
    const windowWidth = window.innerWidth
    if (scrollContainerWidth > windowWidth) {
      const nextScrollPos = scrollContainer.scrollLeft - (e.deltaY * 2)
      scrollContainer.scrollLeft = nextScrollPos
      e.preventDefault()
    }
  }
}

export default function () {
  return {
    state: {},
    reducers: {},
    effects: {
      resetScrollPosition() {
        const scrollContainer = document.querySelector('.js-scroll-container')
        scrollContainer.scrollLeft = 0
        scrollContainer.scrollTop = 0
      },
      addScrollListener() {
        window.addEventListener('mousewheel', scrollListener)
      },
      removeScrollListener() {
        window.removeEventListener('mousewheel', scrollListener)
      },
    },
  }
}
