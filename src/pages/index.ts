import html from 'helix-yo-yo/lib/html'

export default {
  onEnter(state, prev, send) {
    send.project.toNext()
  },
  view() {
    return html`<div></div>`
  }
}
