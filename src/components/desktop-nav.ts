import html from 'helix-yo-yo/lib/html'

export default function ({
  projects,
  currentProject,
  currentPath,
}) {
  function projectClass(uuid) {
    return `
      mid-gray no-underline bb transition pb1
      ${currentProject === uuid ? 'b--silver' : 'b--transparent'}
    `
  }
  function linkClass(name) {
    return `
      mid-gray no-underline bb bw-small transition pb1
      ${currentPath.includes(name) ? 'b--gray' : 'b--transparent'}
    `
  }
  return html`
    <div class='pv4 tracked'>
      <div class='bt br bb bw2 pv3 b--black ph3 f4 serif dib mb4 serif'>
        <span class='mr2'>Chloe</span>
        <span>Smith</span>
      </div>

      <div class='ph3 mid-gray'>
        <div class='mb2 b'>Portfolio</div>
        <div class='pl3 mb3'>
          ${projects.filter(project => project.uuid !== 'portfolio').map(project => html`
            <div class='mb2 f7'>
              <a
                class=${projectClass(project.uuid)}
                href=${`/${project.uuid}`}
              >
                ${project.name}
              </a>
            </div>
          `)}
        </div>
        <div class='mb3 b'>
          <a
            href='/about'
            class=${linkClass('about')}
          >
            About
          </a>
        </div>
        <div class='mb3 b'>
          <a
            href='/contact'
            class=${linkClass('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  `
}