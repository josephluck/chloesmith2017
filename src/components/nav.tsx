import { h } from 'helix-js/dist/html'

export default function ({
  projects,
  currentProject,
  currentPath,
}) {
  return (
    <div class='pv4 ttu tracked serif'>
      <div class='bt br bb bw2 pv3 b--black ph3 f5 serif dib mb5'>
        <span class='mr3'>Chloe</span>
        <span>Smith</span>
      </div>

      <div class='ph3 mid-gray'>
        <div class='mb3 f4'>Portfolio</div>
        <div class='pl3 mb3'>
          {projects.filter(project => project.uuid !== 'portfolio').map(project => (
            <div class={`mb3 f6`}>
              <a
                class={`
                  no-underline mid-gray bb 
                  ${currentProject === project.uuid ? 'b--light-silver' : 'b--transparent'}
                `}
                href={`/${project.uuid}`}
              >
                {project.name}
              </a>
            </div>
          ))}
        </div>
        <div class='mb3 f4'>
          <a
            href='/about'
            class={`
              mid-gray no-underline bb
              ${currentPath.includes('about') ? 'b--light-silver' : 'b--transparent'}
            `}
          >
            About
          </a>
        </div>
        <div class='mb3 f4'>
          <a
            href='/contact'
            class={`
              mid-gray no-underline bb
              ${currentPath.includes('contact') ? 'b--light-silver' : 'b--transparent'}
            `}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}