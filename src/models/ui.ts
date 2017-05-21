import * as utils from '../utils'

export default function () {
  return {
    state: {},
    reducers: {},
    effects: {
      resetScrollPosition(state, actions) {
        const container = document.querySelector('.js-scroll-container')
        utils.smoothHorizontalScroll({
          container,
          target: 0,
        })
        actions.project.setButtonType('image')
      },
      addScrollListener(state, actions) {
        window.addEventListener('mousewheel', utils.scrollListener)
      },
      removeScrollListener(state, actions) {
        window.removeEventListener('mousewheel', utils.scrollListener)
      },
    },
  }
}
