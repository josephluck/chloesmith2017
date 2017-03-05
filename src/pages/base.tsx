import { h } from 'helix-js/dist/html'

import nav from '../components/nav'

export default function (child) {
  return function ({state, prev, actions}) {
    return (
      <div class='flex vh-100 vw-100 bg-near-white'>
        <div class='nav bg-white-95 shadow-medium'>
          {nav({
            projects: state.projects.projects,
            currentProject: state.location.params.project,
            currentPath: state.location.pathname,
          })}
        </div>

        <div class='content'>
          {child({state, prev, actions})}
        </div>
      </div>
    )
  }
}
