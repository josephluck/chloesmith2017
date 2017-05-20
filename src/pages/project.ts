import { html } from 'helix-yo-yo'

import base from './base'
import nav from '../components/nav'

export default {
  onEnter(state, prev, actions) {
    actions.project.getProject(state.location.params.project)
    actions.project.addScrollListener()
  },
  onUpdate(state, prev, actions) {
    if (state.location.params.project !== prev.location.params.project) {
      actions.project.getProject(state.location.params.project)
    }
  },
  onLeave(state, prev, actions) {
    actions.project.removeScrollListener()
  },
  view: base((state) => {
    let project = state.project

    return html`
      <div class='projects-list'>
        ${project.images.map(image => html`
          <img src=${image.src} class='mr2 shadow' />
        `)}
      </div>
    `
  }),
}
