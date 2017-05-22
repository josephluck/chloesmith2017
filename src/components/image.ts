import { html } from 'helix-yo-yo'

export default function ({
  src,
  className,
}) {
  return html`
    <div class='dib fl h-100 bg-white relative'>
      <img
        src=${src}
        className='relative z-2 ${className}'
        style='min-width: 250px;'
      />
      <div class="loading">
        <div class="loading-indicator white relative z-1 serif">
          C
        </div>
      </div>
    </div>
  `
}
