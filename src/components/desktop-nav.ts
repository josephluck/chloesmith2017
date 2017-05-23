import { html } from 'helix-yo-yo'

export default function ({
  projects,
  currentProject,
  currentPath,
}) {
  function projectClass(uuid) {
    return `
      mid-gray no-underline bb transition
      ${currentProject === uuid ? 'b--silver' : 'b--transparent'}
    `
  }
  function linkClass(name) {
    return `
      mid-gray no-underline bb transition
      ${currentPath.includes(name) ? 'b--silver' : 'b--transparent'}
    `
  }
  return html`
    <div class='pv4 ttu tracked serif'>
      <div class='bt br bb bw2 pv3 b--black ph3 f4 serif dib mb4'>
        <span class='mr2'>Chloe</span>
        <span>Smith</span>
      </div>

      <div class='ph3 mid-gray'>
        <div class='mb2 f5'>Portfolio</div>
        <div class='pl3 mb3'>
          ${projects.filter(project => project.uuid !== 'portfolio').map(project => html`
            <div class=${`mb2 f7`}>
              <a
                class=${projectClass(project.uuid)}
                href=${`/${project.uuid}`}
              >
                ${project.name}
              </a>
            </div>
          `)}
        </div>
        <div class='mb3 f5'>
          <a
            href='/about'
            class=${linkClass('about')}
          >
            About
          </a>
        </div>
        <div class='mb3 f5'>
          <a
            href='/about'
            class=${linkClass('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  `
}