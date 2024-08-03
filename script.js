document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const alertBox = document.getElementById('alert');
    const ordersButton = document.getElementById('ordersButton');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const pizza = orderForm.querySelector('input[name="pizza"]:checked').value;
        const name = orderForm.querySelector('#name').value;
        const phone = orderForm.querySelector('#phone').value;

        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push({ pizza, name, phone });
        localStorage.setItem('orders', JSON.stringify(orders));

        alertBox.style.display = 'block';
        setTimeout(() => alertBox.style.display = 'none', 3000);

        orderForm.reset();
    });

    ordersButton.addEventListener('click', () => {
        window.location.href = 'pedidos.html';
    });
});
