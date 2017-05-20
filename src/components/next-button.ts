import { html } from 'helix-yo-yo'

export default function ({
  label,
  onclick,
}) {
  return html`
    <div
      class='dib ba bw2 b--black pv2 ph3 bg-white-95 serif'
      onclick=${onclick}
    >
      ${label}
    </div>
  `
}
