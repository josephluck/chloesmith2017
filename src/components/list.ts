import html from 'helix-yo-yo/lib/html'

export default function ({
  title,
  items,
  className,
}) {
  return html`
    <div className=${className}>
      <strong>${title}</strong>
      <ul className='mt2'>
        ${items.map(item => {
          return html`
            <li>
              <strong>${item.name}</strong> - ${item.description}
            </li>
          `
        })}
      </ul>
    </div>
  `
}
