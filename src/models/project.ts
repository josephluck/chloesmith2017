import * as utils from '../utils'

export default function () {
  return {
    state: {
      images: [],
      buttonType: 'image',
    },
    reducers: {
      receiveProject(state, project) {
        return project
      },
      setButtonType(state, buttonType) {
        return {
          buttonType,
        }
      }
    },
    effects: {
      getProject(state, actions, uuid) {
        const project = state.projects.projects.find(project => project.uuid === uuid)
        actions.project.receiveProject(project)
      },
      toNext(state, actions) {
        const nextImgScrollPos = utils.getNextImageScrollPos()
        if (nextImgScrollPos) {
          const container = document.querySelector('.js-scroll-container')
          utils.smoothHorizontalScroll({
            container,
            target: nextImgScrollPos,
          })
        } else {
          actions.projects.toNext()
        }
      },
    },
  }
}
