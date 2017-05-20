require('./styles/index.scss')
import helix from 'helix-yo-yo'

import base from './pages/base'
import index from './pages/index'
import project from './pages/project'
import about from './pages/about'
import projectsModel from './models/projects'
import projectModel from './models/project'

const node = document.createElement('div')
node.setAttribute('class', 'vh-100')
document.body.appendChild(node)

const app = helix({
  model: {
    models: {
      projects: projectsModel(),
      project: projectModel(),
    },
  },
  routes: {
    '': index,
    '/about': about,
    '/:project': project,
  },
  mount: node,
})
