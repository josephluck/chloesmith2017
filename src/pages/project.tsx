import { h } from 'helix-js/dist/html'

import base from './base'
import nav from '../components/nav'

export default {
  onMount (state, prev, actions) {
    actions.project.getProject(state.location.params.project)
  },
  view: base(({
    state,
  }) => {
    return (
      <div>
        {state.project.images.map(image => (
          <img src={image.src} />
        ))}
      </div>
    )
  }),
}
