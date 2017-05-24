import html from 'helix-yo-yo/lib/html'

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
  function linkClass(name, invert: boolean = false) {
    return `
      mid-gray no-underline bb bw-small transition
      ${invert ? !currentPath.includes(name) ? 'b--silver' : 'b--transparent' : ''}
      ${!invert ? currentPath.includes(name) ? 'b--silver' : 'b--transparent' : ''}
    `
  }
  return html`
    <div class='tc ttu tracked mb3'>
      <a
        href='/'
        class='ba bw2 pv2 b--black f4 serif ma3 db bg-white no-underline black'
      >
        <span class='mr2'>Chloe</span>
        <span>Smith</span>
      </a>

      <div class='mid-gray f6'>
        <a
          href='/'
          class='mr1 ${linkClass('about', true)}'
        >Portfolio</a>
        <a
          href='/about'
          class='ml1 ${linkClass('about')}'
        >About</a>
      </div>
    </div>
  `
}