import { editor, previewer } from "../shared.js";

const renderer = new marked.Renderer();
// Add custom class to the quotes
renderer.blockquote = (quote) => {
  // console.log(quote);
  return `<div class="md-quotes">${quote.text}</div>`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: renderer
});

export function parseMd() {
  let mdText = editor.innerText;
  // console.log(mdText.replace(/\n/g, "[NEWLINE]"));

  // replace mutliple \n with multiple $nbsp; <br> the same number of \n
  mdText = mdText.replace(/!!/g, "<br>");

  let parsedText = marked.parse(mdText);
  parsedText = DOMPurify.sanitize(parsedText);
  previewer.innerHTML = parsedText;
}

editor.addEventListener("input", () => {
  parseMd();
});
