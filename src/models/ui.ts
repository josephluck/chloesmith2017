const scrollListener = (actions) => (e) => {
  const isVertical = e.deltaY !== 0

  if (isVertical) {
    const scrollContainer = document.querySelector('.js-scroll-container')
    const scrollContainerScrollWidth = scrollContainer.scrollWidth
    const windowWidth = window.innerWidth
    if (scrollContainerScrollWidth > windowWidth) {
      const nextScrollPos = scrollContainer.scrollLeft - (e.deltaY * 2)
      scrollContainer.scrollLeft = nextScrollPos
      e.preventDefault()
    }
    const leftScrollPos = scrollContainer.scrollLeft + windowWidth
    const isNearEnd = (leftScrollPos + 100) > scrollContainerScrollWidth
    if (isNearEnd) {
      actions.project.setButtonType('project')
    } else {
      actions.project.setButtonType('image')
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
      addScrollListener(state, actions) {
        window.addEventListener('mousewheel', scrollListener(actions))
      },
      removeScrollListener(state, actions) {
        window.removeEventListener('mousewheel', scrollListener(actions))
      },
    },
  }
}
