export default function () {
  return {
    state: {
      projects: [
        {
          uuid: 'asos',
          name: 'Asos',
          images: [
            { src: '/assets/asos/1.jpg' },
            { src: '/assets/asos/2.jpg' },
            { src: '/assets/asos/3.jpg' },
            { src: '/assets/asos/4.jpg' },
            { src: '/assets/asos/5.jpg' },
            { src: '/assets/asos/6.jpg' },
            { src: '/assets/asos/7.jpg' },
            { src: '/assets/asos/8.jpg' },
            { src: '/assets/asos/9.jpg' },
            { src: '/assets/asos/10.jpg' },
            { src: '/assets/asos/11.jpg' },
            { src: '/assets/asos/12.jpg' },
          ],
        },
        {
          uuid: 'pieced-together',
          name: 'Pieced Together',
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
