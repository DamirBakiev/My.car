document.getElementById("Black").addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

document.getElementById("btn2").addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});

// Массив для хранения корзины
let cart = [];

function updateCartDisplay() {
    console.log("Корзина:", cart);
}

// Обработка покупки
document.querySelectorAll(".cart button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const carCard = btn.parentElement;
        const name = carCard.querySelector("h3,h4,h5").innerText;
        const price = carCard.querySelector(".price").innerText;

        cart.push({ name, price });
        alert(`${name} добавлен в корзину за ${price}`);
        updateCartDisplay();
    });
});


const menuToggle = document.getElementById("menu-brower");
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
});


function validateLoginForm() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (!username.value || !password.value) {
        alert("Заполните все поля!");
        return false;
    }
    alert("Вход выполнен");
    return true;
}

let cartL = [];

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cartL.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price}`;
        cartList.appendChild(li);
    });
}

// Кнопки "Купить"
document.querySelectorAll(".cart button").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".cart");
        const name = card.querySelector("h3,h4,h5").innerText;
        const price = card.querySelector(".price").innerText;

        cartL.push({ name, price });
        updateCartDisplay();
        openModal();
    });
});

// // Модальное окно
// const modal = document.getElementById("cartModal");
// const closeButton = document.querySelector(".close-button");

// function openModal() {
//     modal.style.display = "block";
// }

// function closeModal() {
//     modal.style.display = "none";
// }

// closeButton.addEventListener("click", closeModal);

// window.addEventListener("click", (event) => {
//     if (event.target === modal) {
//         closeModal();
//     }
// });

const form = document.getElementById("feedback-form");
const statusText = document.getElementById("feedback-status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
        statusText.textContent = "Пожалуйста, заполните все поля.";
        statusText.style.color = "red";
        return;
    }


    console.log("Отправка данных:", { name, phone, message });

    statusText.textContent = "Спасибо! Ваше сообщение отправлено.";
    statusText.style.color = "green";

    form.reset();
});

// const form = document.getElementById("feedback-form");
// const statusText = document.getElementById("feedback-status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
        statusText.textContent = "Пожалуйста, заполните все поля.";
        statusText.style.color = "red";
        return;
    }

   
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    
    feedbacks.push({ name, phone, message, time: new Date().toLocaleString() });

  
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    statusText.textContent = "Спасибо! Ваше сообщение сохранено.";
    statusText.style.color = "green";

    form.reset();
});

   // Модалка корзины
   const modal = document.getElementById("cartModal");
   const closeBtn = document.querySelector(".close-button");

   function openModal() {
       modal.style.display = "block";
   }

   closeBtn.onclick = 'click', function () {
       modal.style.display = "none";
   };

   window.onclick = function (event) {
       if (event.target === modal) {
           modal.style.display = "none";
       }
   };

   // Кнопки "Купить"
   document.querySelectorAll('.cart button').forEach(button => {
       button.addEventListener('click', () => {
           const title = button.parentElement.querySelector('h3,h4,h5').textContent;
           const cartList = document.getElementById("cart-items");
           const li = document.createElement("li");
           li.textContent = `Добавлено в корзину: ${title}`;
           cartList.appendChild(li);
           openModal();
       });
   });

     function openQRModal(carName, price) {
            document.getElementById("qrModal").style.display = "block";
            document.getElementById("carName").innerText = `Вы покупаете: ${carName} за ${price}₸`;
            const qrData = `KaspiPay:${carName}:${price}`;
            const qrUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(qrData)}`;
            document.getElementById("qrImage").src = 'https://f.nodacdn.net/421362';
            sessionStorage.setItem("selectedCar", carName);
        }

        function closeQRModal() {
            document.getElementById("qrModal").style.display = "none";
        }

        function confirmPayment() {
            const car = sessionStorage.getItem("selectedCar");
            alert(`Оплата за ${car} подтверждена!`);
            closeQRModal();
        }
