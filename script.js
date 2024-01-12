document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');

        // Tüm kartları göster
        if (category === 'all') {
          cards.forEach(card => {
            card.style.display = 'block';
          });
        } else {
          // Seçilen kategoriye göre kartları filtrele
          cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            card.style.display = cardCategory === category ? 'block' : 'none';
          });
        }
      });
    });
  });


  // Ana sayfa Öne çıkanlar Widget
  document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const productList = document.getElementById("productList");
    const productContainer = document.querySelector(".product-list");
    const productWidth = document.querySelector(".product").offsetWidth;

    let currentIndex = 0;
    const totalProducts = document.querySelectorAll(".product").length;
    const productsToShow = 3;

    nextBtn.addEventListener("click", function () {
      if (currentIndex < totalProducts - productsToShow) {
        currentIndex++;
        updateWidget();
      }
      checkButtons();
    });

    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateWidget();
      }
      checkButtons();
    });

    function updateWidget() {
      const translateXValue = -currentIndex * productWidth;
      productList.style.transform = `translateX(${translateXValue}px)`;
    }

    function checkButtons() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= totalProducts - productsToShow;
    }
    checkButtons();
  });