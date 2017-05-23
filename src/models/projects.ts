export default function () {
  return {
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
            { src: '/assets/architexture/22.jpg' },
            { src: '/assets/architexture/23.jpg' },
            { src: '/assets/architexture/24.jpg' },
            { src: '/assets/architexture/25.jpg' },
            { src: '/assets/architexture/26.jpg' },
            { src: '/assets/architexture/27.jpg' },
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
    effects: {
      toNext(state, actions) {
        const currentProjectIndex = state.location.params.project
          ? state.projects.projects.findIndex(project => {
            return project.uuid === state.location.params.project
          })
          : 0

        const nextProjectIndex = currentProjectIndex === state.projects.projects.length - 1
          ? 0
          : currentProjectIndex + 1

        if (currentProjectIndex >= 0) {
          const nextProjectId = state.projects.projects[nextProjectIndex].uuid
          actions.location.set(`/${nextProjectId}`)
        }
      }
    }
  }
}
