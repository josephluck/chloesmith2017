require('./styles/index.scss')
import helix from 'helix-yo-yo'

import indexPage from './pages/index'
import projectPage from './pages/project'
import aboutPage from './pages/about'
import projectsModel from './models/projects'
import projectModel from './models/project'
import aboutModel from './models/about'
import uiModel from './models/ui'

const node = document.createElement('div')
node.setAttribute('class', 'vh-100')
document.body.appendChild(node)

const app = helix({
  model: {
    models: {
      about: aboutModel(),
      projects: projectsModel(),
      project: projectModel(),
      ui: uiModel(),
    },
  },
  routes: {
    '': indexPage,
    '/about': aboutPage,
    '/contact': aboutPage,
    '/:project': projectPage,
  },
  mount: node,
})
