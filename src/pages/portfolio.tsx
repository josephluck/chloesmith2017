import { h } from 'helix-js/dist/html'

import nav from '../components/nav'

export default function ({state, actions}) {
  return (
    <div>
      {state.project.images.map(image => (
        <img src={image.src} />
      ))}
    </div>
  )
}
