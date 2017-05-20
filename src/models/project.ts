export default function () {
  return {
    state: {
      images: [],
      buttonType: 'image',
    },
    reducers: {
      receiveProject(state, project) {
        return project
      },
      setButtonType(state, buttonType) {
        return {
          buttonType,
        }
      }
    },
    effects: {
      getProject(state, actions, uuid) {
        let project = state.projects.projects.find(project => project.uuid === uuid)
        actions.project.receiveProject(project)
      },
      goToNextImage(state) {

      },
      toToNextProject(state) {

      },
    },
  }
}
