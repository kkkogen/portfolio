document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow .slide");
  let current = 0;
  const interval = 3000; // 3秒ごとに切り替え

  function showNextSlide() {
    // 現在のスライドを非表示
    slides[current].classList.remove("active");

    // 次のスライドのインデックスを計算
    current = (current + 1) % slides.length;

    // 次のスライドを表示
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, interval);
});

//ページが読み込まれたときにメイン画像を表示
window.addEventListener("load", function() {
  const mainImage = document.querySelector(".main-image");
  mainImage.classList.add("visible");
});
