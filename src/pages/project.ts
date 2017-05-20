import { html } from 'helix-yo-yo'

import base from './base'
import nav from '../components/nav'
import nextButton from '../components/next-button'

export default {
  onEnter(state, prev, actions) {
    actions.project.getProject(state.location.params.project)
    actions.ui.resetScrollPosition()
    actions.ui.addScrollListener()
  },
  onUpdate(state, prev, actions) {
    if (state.location.params.project !== prev.location.params.project) {
      actions.project.getProject(state.location.params.project)
      actions.ui.resetScrollPosition()
    }
  },
  onLeave(state, prev, actions) {
    actions.ui.removeScrollListener()
  },
  view: base((state, prev, actions) => {
    let project = state.project

    return html`
      <div class='projects-list'>
        ${project.images.map(image => html`
          <img src=${image.src} class='mr2 shadow' />
        `)}

        <div class='fixed ma3' style='right: 0px; bottom: 0px;'>
          ${state.project.buttonType === 'image'
        ? nextButton({
          label: 'Next Image',
          onclick: actions.project.goToNextImage,
        })
        : nextButton({
          label: 'Next Project',
          onclick: actions.project.toToNextProject,
        })
      }
        </div>
      </div>
    `
  }),
}
