
// let body = document.querySelector("body")
// let divid = document.getElementById("divid")
// let Black = document.getElementById("Black")
// let footer = document.getElementById("main")
// let table = document.getElementById("table")
// let container_2 = document.getElementById("container_2")
// let div = document.getElementById("div")
// Black.addEventListener("click", function() {
//     body.style.color = "white"
//     body.style.backgroundColor = "black"
//     divid.style.borderColor = "white"
//     footer.style.backgroundColor = "white"
//     main.style.borderColor = "white"
//     table.style.borderColor = "white"
// })


// let btn2 = document.getElementById("btn2")
// btn2.addEventListener("click", function() {
//     body.style.backgroundColor = "white"
//     divid.style.borderColor = "black"
//     footer.style.backgroundColor = "black"
//      main.style.borderColor = "black"
//     table.style.borderColor = "black"
      
// })

// Переключение темы
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

// Обработка меню (пример, если планируется меню по кнопке)
const menuToggle = document.getElementById("menu-brower");
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
});

// Валидация входа (если добавите форму login)
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

    // Здесь можно отправить данные на сервер (в будущем)
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

    // Получаем текущие заявки из localStorage
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    // Добавляем новую заявку
    feedbacks.push({ name, phone, message, time: new Date().toLocaleString() });

    // Сохраняем обратно в localStorage
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

   closeBtn.onclick = function () {
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