import html from 'helix-yo-yo/lib/html'

import base from './base'
import list from '../components/list'

export default {
  view: base((
    state,
  ) => {
    return html`
      <div
        class='ml2-ns h-100 shadow-ns bg-white pv4-ns pb4 ph3 lh-copy f6 mid-gray overflow-auto'
        style='max-width: 34rem;'
      >
        <p class='ma0 pb3'>
          I'm a womenswear fashion designer based in London. I enjoy working for fast pace, fashion forward high-street brands.
        </p>
        <p class='ma0 pb3'>
          Get in touch at
          <a
            href='mailto:chloelindsaysmith@gmail.com'
            class='no-underline blue'
          >
            chloelindsaysmith@gmail.com
          </a>
          and
          <a
            href='https://drive.google.com/open?id=0ByV_PN8aNFFOSXU3QkxTc08wVU0'
            target='_blank'
            class='no-underline blue'
          >
            download my CV
          </a>
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
