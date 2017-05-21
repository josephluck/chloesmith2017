import { html } from 'helix-yo-yo'

export default function ({
  label,
  onclick,
  className,
}) {
  return html`
    <button
      class='ttu f6 dib ba b--black pv2 ph3 bg-white-95 serif ${className}'
      style='border-width: 2px;'
      onclick=${onclick}
    >
      ${label}
    </button>
  `
}
