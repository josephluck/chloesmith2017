import { h } from 'helix-js/dist/html'

import nav from '../components/nav'

export default function (child) {
  return function ({state, prev, actions}) {
    return (
      <div>
        {nav({
          projects: state.projects.projects,
        })}

        {child({state, prev, actions})}
      </div>
    )
  }
}
