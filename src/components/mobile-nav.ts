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
    <div class='tc ttu tracked serif mb3'>
      <a
        href='/'
        class='ba bw2 pv2 b--black ph3 f4 serif ma3 db bg-white no-underline black'
      >
        <span class='mr2'>Chloe</span>
        <span>Smith</span>
      </a>

      <div class='mid-gray f6'>
        <a
          href='/about'
          class=${linkClass('about')}
        >
          About / Contact
        </a>
      </div>
    </div>
  `
}