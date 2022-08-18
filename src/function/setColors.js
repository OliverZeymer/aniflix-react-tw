export function setColors(newPrimaryColor, newTextColor) {
  document.documentElement.style.setProperty(
    "--primary-color",
    newPrimaryColor
  );
  document.documentElement.style.setProperty("--primary-text", newTextColor);
}
