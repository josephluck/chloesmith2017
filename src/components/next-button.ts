import html from 'helix-yo-yo/lib/html'

export default function ({
  label,
  onclick,
  className,
}) {
  return html`
    <button
      class='f6 dib ba b--black pv2 ph3 bg-white-95 ttu shadow ${className}'
      onclick=${onclick}
    >
      ${label}
    </button>
  `
}
