const scrollListener = (e) => {
  const isVertical = e.deltaY !== 0

  if (isVertical) {
    const scrollContainer = document.querySelector('.js-scroll-container')
    const scrollContainerWidth = scrollContainer.scrollWidth
    const windowWidth = window.innerWidth
    if (scrollContainerWidth > windowWidth) {
      const nextScrollPos = scrollContainer.scrollLeft - (e.deltaY * 2)
      scrollContainer.scrollLeft = nextScrollPos
      e.preventDefault()
    }
  }
}

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
      addScrollListener() {
        console.log('Called')
        window.addEventListener('mousewheel', scrollListener)
      },
      removeScrollListener() {
        window.removeEventListener('mousewheel', scrollListener)
      },
    },
  }
}

// $(function () {
//   $("body").mousewheel(function (event, delta) {
//     var vertical_direction = event.deltaY !== 0;

//     if (vertical_direction) {
//       var main_content = document.querySelector('.main-content'),
//         main_content_width = main_content.scrollWidth,
//         window_width = window.innerWidth;

//       if (main_content_width > window_width) {
//         var next_scroll_pos = $('.main-content')[0].scrollLeft - (delta * 2);

//         $('.main-content')[0].scrollLeft = next_scroll_pos;

//         event.preventDefault();
//       }
//     }
//   });
// });
