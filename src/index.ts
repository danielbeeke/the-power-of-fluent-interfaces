import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css'
import '../public/style.css'

let deck = new Reveal({
   backgroundTransition: 'slide',
   plugins: [ Markdown, Highlight, Notes ],
   preloadIframes: true,
   hash: true
})
deck.initialize();