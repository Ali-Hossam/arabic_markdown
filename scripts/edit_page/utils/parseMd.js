const renderer = new marked.Renderer();
// Add custom class to the quotes
renderer.blockquote = (quote) => {
  console.log(quote);
  return `<div class="md-quotes">${quote.text}</div>`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: renderer
});

function parseMd() {
  let mdText = editor.innerText;
  console.log(mdText.replace(/\n/g, "[NEWLINE]"));

  // // parse empty lines after header
  // mdText = mdText.replace(/^#.*\n\n/gm, match => match + '<br>');

  // replace mutliple \n with multiple $nbsp; <br> the same number of \n
  mdText = mdText.replace(/\n\n/g, "<br>");

  let parsedText = marked.parse(mdText);

  previewer.innerHTML = parsedText;
}

editor.addEventListener("input", () => {
  parseMd();
});
