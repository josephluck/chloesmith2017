export default function () {
  return {
    state: {
      images: [],
    },
    reducers: {
      receiveProject(state, project) {
        return project
      },
    },
    effects: {
      getProject(state, actions, uuid) {
        let project = state.projects.projects.find(project => project.uuid === uuid)
        actions.project.receiveProject(project)
      },
    },
  }
}
