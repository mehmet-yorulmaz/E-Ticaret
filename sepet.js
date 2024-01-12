const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-primary");
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");

class Shopping {
    constructor(title, price, image) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI {
    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "list-item";

        listItem.innerHTML =
            `
          <div class="row align-items-center text-white-50">
              <div class="col-md-3">
                  <img src="${shopping.image}">
              </div>
              <div class="col-md-5">
                  <div class="title">${shopping.title}</div>
              </div>
              <div class="col-md-2">
                  <div class="price">${shopping.price}</div>
              </div>
              <div class="col-md-2">
                  <button class="btn btn-delete">
                      <i class="fas fa-trash-alt text-danger"></i>
                  </button>
              </div>
          </div>
          `;
        cartList.appendChild(listItem);
    }

    removeCart() {
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this;
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
            });
        }
    }

    cartCount() {
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }

    cartToggle() {
        cartList.classList.toggle("d-none");
    }
}

// Tek bir UI örneği oluştur
const ui = new UI();

// Sepete ekle butonlarına olay dinleyicilerini ekle
for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click", function (e) {
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "Sepete Eklendi";
        let shopping = new Shopping(title, price, image);

        // Sepete ürünü ekle
        ui.addToCart(shopping);
        ui.removeCart();
        ui.cartCount();

        e.preventDefault();
    });
}

// Sayfa yüklendiğinde cartToggle metodunu çağır
document.addEventListener("DOMContentLoaded", () => {
    ui.cartToggle();
});

document.addEventListener("DOMContentLoaded", () => {
    let ui = new UI();

    // Sepetin açılıp kapanmasını sağlayan olay dinleyicisi
    ui.cartToggle();

    // "Sepete Ekle" butonlarına tıklama olaylarını ekle
    const addToCartButtons = document.querySelectorAll('.btn-primary');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            let title = card[index].getElementsByClassName("card-title")[0].textContent;
            let price = card[index].getElementsByClassName("card-text-price")[0].textContent.replace('Fiyat: ', '');
            let image = card[index].getElementsByClassName("card-img-top")[0].src;

            // Butonu devre dışı bırak ve metni güncelle
            button.classList.add("disabled");
            button.textContent = "Sepete Eklendi";

            let shopping = new Shopping(title, price, image);

            // Sepete ürünü ekle
            ui.addToCart(shopping);
            ui.removeCart();
            ui.cartCount();
        });
    });
});
