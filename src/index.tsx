require('./styles/index.scss')
import helix from 'helix-js'
import { h } from 'helix-js/dist/html'

import base from './pages/base'
import index from './pages/index'
import portfolio from './pages/portfolio'

const app = helix({
  model: {
    models: {
      projects: {
        state: {
          projects: [
            {
              name: 'Architexture',
            },
          ],
        },
      },
      project: {
        state: {
          images: [
            {
              src: '/assets/architexture/21.jpg',
            },
          ],
        },
      },
    },
  },
  routes: {
    '': index,
    'portfolio': base(portfolio),
  },
})

const node = document.createElement('div')
document.body.appendChild(node)
app(node)
