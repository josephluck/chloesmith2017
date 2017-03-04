import { h } from 'helix-js/dist/html'

export default function ({state, actions}) {
  return (
    <div>
      Homepage {state.title}
      <img src='./assets/architexture/21.jpg' />
    </div>
  )
}
