require('./styles/index.scss')

import helix from 'helix-js'
import { h } from 'helix-js/dist/html'

function index ({state, actions}) {
  return (
    <div>
      Homepage {state.title}
      <img src='./assets/architexture/21.jpg' />
    </div>
  )
}

const app = helix({
  model: {
    state: {
      title: 'hey',
    },
  },
  routes: {
    '': index,
  },
})

const node = document.createElement('div')
document.body.appendChild(node)
app(node)
