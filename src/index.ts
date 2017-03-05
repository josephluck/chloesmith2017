require('./styles/index.scss')
import helix from 'helix-js'

import base from './pages/base'
import index from './pages/index'
import project from './pages/project'
import about from './pages/about'

const app = helix({
  model: {
    models: {
      projects: {
        state: {
          projects: [
            {
              uuid: 'portfolio',
              name: 'portfolio',
              images: [
                { src: '/assets/photoshoot/1.jpg' },
                { src: '/assets/photoshoot/1.jpg' },
                { src: '/assets/photoshoot/1.jpg' },
                { src: '/assets/photoshoot/1.jpg' },
                { src: '/assets/photoshoot/1.jpg' },
                { src: '/assets/photoshoot/1.jpg' },
                { src: '/assets/photoshoot/1.jpg' },
              ],
            },
            {
              uuid: 'architexture',
              name: 'architexture',
              images: [
                { src: '/assets/architexture/21.jpg' },
                { src: '/assets/architexture/21.jpg' },
                { src: '/assets/architexture/21.jpg' },
                { src: '/assets/architexture/21.jpg' },
                { src: '/assets/architexture/21.jpg' },
                { src: '/assets/architexture/21.jpg' },
              ],
            },
            {
              uuid: 'modernnostalgia',
              name: 'modern nostalgia',
              images: [
                { src: '/assets/modernnostalgia/35.jpg' },
                { src: '/assets/modernnostalgia/35.jpg' },
                { src: '/assets/modernnostalgia/35.jpg' },
                { src: '/assets/modernnostalgia/35.jpg' },
                { src: '/assets/modernnostalgia/35.jpg' },
                { src: '/assets/modernnostalgia/35.jpg' },
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
          getProject (state, actions, uuid) {
            let project = state.projects.projects.find(project => project.uuid === uuid)
            actions.project.receiveProject(project)
          },
        }
      },
    },
  },
  routes: {
    '': index,
    '/about': about,
    '/:project': project,
  },
})

const node = document.createElement('div')
node.setAttribute('class', 'vh-100')
document.body.appendChild(node)
app(node)
