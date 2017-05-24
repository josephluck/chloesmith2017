import html from 'helix-yo-yo/lib/html'

export default {
  onEnter(state, prev, send) {
    send.projects.toNext()
  },
  view() {
    return html`<div></div>`
  }
}
