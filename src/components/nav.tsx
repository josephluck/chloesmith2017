import { h } from 'helix-js/dist/html'

export default function ({
  projects,
}) {
  return (
    <div>
      <div class=''>
        Chloe Smith
      </div>

      <div>
        {projects.map(project => (
          <div>
            {project.name}
          </div>
        ))}
      </div>
    </div>
  )
}