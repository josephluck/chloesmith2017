import html from 'helix-yo-yo/lib/html'

import base from './base'
import list from '../components/list'

export default {
  view: base((
    state,
  ) => {
    return html`
      <div class='ml2-ns h-100 shadow-ns bg-white pv4-ns pb4 ph3 lh-copy f6 mid-gray mw6 overflow-auto'>
        <p class='ma0 pb3'>
          I'm a womenswear fashion designer based in London. I enjoy working for high-pace, fashion forward high-street brands.
        </p>
        ${list({
          title: 'Employment',
          items: state.about.employment,
          className: 'ma0 pb3',
        })}
        ${list({
          title: 'Internships',
          items: state.about.internships,
          className: 'ma0 pb3',
        })}
        ${list({
          title: 'Education',
          items: state.about.education,
          className: 'ma0 pb2',
        })}
        <p class='ma0 pb3 tl-ns tc'>
          <a
            href='/assets/chloe-smith-cv.pdf'
            target='_blank'
            class='no-underline blue'
          >
            Download CV
          </a>
        </p>
        <div class='tc tl-ns mb3'>
          <a
            href='https://instagram.com/chloe_smith_london/'
            target='_blank'
            class='mr2 dib black no-underline ss-instagram'></a>
          <a
            href='http://uk.linkedin.com/pub/chloe-smith/36/820/412/en'
            target='_blank'
            class='mr2 dib black no-underline ss-linkedin'></a>
        </div>
      </div>
    `
  }),
}
