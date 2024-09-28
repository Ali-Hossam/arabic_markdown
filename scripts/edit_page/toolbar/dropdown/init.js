const fontsAr = ["أميري", "رقعة", "عثماني", "بالو", "زين", "لطيف"];
const fontsEn = [
  "Amiri",
  "rakkas",
  "Noto Naskh Arabic",
  "Baloo Bhaijaan 2",
  "zain",
  "Lateef",
];

// Fonts dropdown menu
fontsAr.forEach((font, index) => {
  let element = document.createElement("li");
  element.style.fontFamily = fontsEn[index];
  element.textContent = font;
  fontFamilyMenu.appendChild(element);
});

// Font Size dropdown menu
let fontSize = 20;
for (let index = 0; index < 6; index++) {
  const element = document.createElement("li");
  element.textContent = `حجم ${index + 1}`;
  element.style.fontSize = `${fontSize}px`;
  element.style.fontFamily = "Amiri";

  fontSize -= 2;
  fontSizeMenu.appendChild(element);
}

// Color Palette dropdown menu
const colors = ["black", "bisque", "whitesmoke"];
colors.forEach((color) => {
  let element = document.createElement("li");
  element.classList.add("rectangle");
  element.style.backgroundColor = color;
  colorsMenu.appendChild(element);
});
