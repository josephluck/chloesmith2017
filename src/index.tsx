require('./styles/index.scss')
import helix from 'helix-js'
import { h } from 'helix-js/dist/html'

import base from './pages/base'
import index from './pages/index'
import project from './pages/project'

const app = helix({
  model: {
    models: {
      projects: {
        state: {
          projects: [
            {
              name: 'portfolio',
              images: [
                {
                  src: '/assets/architexture/21.jpg',
                },
              ],
            },
            {
              name: 'architexture',
              images: [
                {
                  src: '/assets/architexture/21.jpg',
                },
              ],
            },
          ],
        },
      },
      project: {
        state: {
          images: [],
        },
        reducers: {
          receiveProject (state, project) {
            return project
          },
        },
        effects: {
          getProject (state, actions, name) {
            let project = state.projects.projects.find(proj => proj.name === name)
            actions.project.receiveProject(project)
          },
        },
      },
    },
  },
  routes: {
    '': index,
    '/:project': project,
  },
})

const node = document.createElement('div')
document.body.appendChild(node)
app(node)
