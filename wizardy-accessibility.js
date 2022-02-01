// Original code by T.RICKS

function setFontSize() {
  let maxWidth = 1920;
  let windowWidth = $(window).width();
  if (windowWidth >= maxWidth || windowWidth < 992) {
    $("body").removeAttr("style");
  } else {
    let fontSize = windowWidth / 100 / 16;
    $("body").css("font-size", fontSize + "rem");
  }
}
setFontSize();
window.addEventListener("resize", function () {
  setFontSize();
});
