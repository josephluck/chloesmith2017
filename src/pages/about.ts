import { html } from 'helix-yo-yo'

import base from './base'

export default {
  view: base(({
    state,
  }) => {
    return html`
      <div class='ml2-ns h-100 shadow-ns bg-white pv4-ns pb4 ph3 lh-copy f6 mid-gray mw6'>
        <p class='ma0 pb3'>Born and raised in the English countryside, Chloe Smith graduated from Ravensbourne in 2015 with a BA Honours in Fashion Design and specialised in womenswear design. </p>
        <p class='ma0 pb3'>A signature style of sharp tailoring, structured and classical design is displayed in Chloe’s work. Her design philosophy is based on creating garments that will stand the test of time. </p>
        <p class='ma0 pb3'>Before studying for her BA, Chloe studied for a Foundation Diploma in Art and Design (where she specialised in Fashion and Textiles) and passed with Distinction. During her studies, Chloe has carried out a wide variety of internships and work placements, which have all provided her with her invaluable insights into the fashion industry.</p>
      </div>
    `
  }),
}
