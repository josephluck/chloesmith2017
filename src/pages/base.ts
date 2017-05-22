import { html } from 'helix-yo-yo'

import desktopNav from '../components/desktop-nav'
import mobileNav from '../components/mobile-nav'

export default function (child) {
  return function (state, prev, actions) {
    return html`
      <div>
        <div class='mobile-nav bg-white'>
          ${mobileNav({
        projects: state.projects.projects,
        currentProject: state.location.params.project,
        currentPath: state.location.pathname,
      })}
        </div>
        <div class='flex vh-100 vw-100 bg-near-white'>
          <div class='js-nav-bar desktop-nav bg-white-95 shadow-medium relative z-2'>
            ${desktopNav({
        projects: state.projects.projects,
        currentProject: state.location.params.project,
        currentPath: state.location.pathname,
      })}
          </div>

          <div class='content js-scroll-container'>
            ${child(state, prev, actions)}
          </div>
        </div>
      </div>
    `
  }
}
