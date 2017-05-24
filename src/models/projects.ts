export default function () {
  return {
    state: {
      projects: [
        {
          uuid: 'asos',
          name: 'ASOS',
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
          uuid: 'topshop',
          name: 'Topshop',
          images: [
            { src: '/assets/topshop/1.jpg' },
            { src: '/assets/topshop/2.jpg' },
            { src: '/assets/topshop/3.jpg' },
            { src: '/assets/topshop/4.jpg' },
            { src: '/assets/topshop/5.jpg' },
            { src: '/assets/topshop/6.jpg' },
          ],
        },
        {
          uuid: 'miss-selfridge',
          name: 'Miss Selfridge',
          images: [
            { src: '/assets/miss-selfridge/1.jpg' },
            { src: '/assets/miss-selfridge/2.jpg' },
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
          : -1

        const nextProjectIndex = currentProjectIndex === state.projects.projects.length - 1
          ? 0
          : currentProjectIndex + 1

        if (nextProjectIndex >= 0) {
          const nextProjectId = state.projects.projects[nextProjectIndex].uuid
          actions.location.set(`/${nextProjectId}`)
        }
      }
    }
  }
}
