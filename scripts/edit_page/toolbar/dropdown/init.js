const fontsAr = ["أميري", "رقعة", "مرحي", "بالوبهيجان", "خط 3"];
const fontsEn = ["Amiri", "rakkas", "Marhey", "Baloo Bhaijaan 2", "Readex Pro"];

// Fonts dropdown menu
fontsAr.forEach((font, index) => {
  let element = document.createElement("li");
  element.style.fontFamily = fontsEn[index];
  element.textContent = font;
  fontFamilyMenu.appendChild(element);
});

// Font Size dropdown menu
const fontSizes = ["حجم1", "حجم1", "حجم1", "حجم1", "حجم1", "حجم1"];
fontSizes.forEach((size) => {
  let element = document.createElement("li");
  element.textContent = size;
  fontSizeMenu.appendChild(element);
});

// Color Palette dropdown menu
const colors = ["black", "bisque", "whitesmoke"];
colors.forEach((color) => {
  let element = document.createElement("li");
  element.classList.add("rectangle");
  element.style.backgroundColor = color;
  colorsMenu.appendChild(element);
});
