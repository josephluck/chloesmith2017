import { html } from 'helix-yo-yo'

import base from './base'
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
      <div class='projects-list pa0-ns pa2'>
        ${project.images.map(image => html`
          <div class='h-100 w-auto dib pl2-ns mb0-ns mb1 js-image'>
            <img src=${image.src} class='shadow' />
          </div>
        `)}

        <div class='fixed ma3 db-ns dn' style='right: 0px; bottom: 0px;'>
          ${nextButton({
        label: 'Next',
        onclick: actions.project.toNext,
        className: '',
      })}
        </div>
      </div>
    `
  }),
}
