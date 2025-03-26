document.addEventListener("DOMContentLoaded", function () {
  const gubibtn = document.querySelector('.lipsbutton');
  const gubi = document.querySelectorAll('.gublast');

  let currentIndex = 0;

  gubibtn.addEventListener("click", function () {
    if (currentIndex < gubi.length) {
      gubi[currentIndex].style.opacity = "0";
      currentIndex++;
    }
  });
});