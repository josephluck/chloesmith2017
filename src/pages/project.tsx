import { h } from 'helix-js/dist/html'

import base from './base'
import nav from '../components/nav'

export default {
  onMount (state, prev, actions) {
    actions.project.getProject(state.location.params.project)
  },
  onUpdate (state, prev, actions) {
    if (state.location.params.project !== prev.location.params.project) {
      actions.project.getProject(state.location.params.project)
    }
  },
  view: base(({
    state,
  }) => {
    let project = state.project

    return (
      <div class='projects-list'>
        {project.images.map(image => (
          <img src={image.src} class='mr2 shadow' />
        ))}
      </div>
    )
  }),
}
