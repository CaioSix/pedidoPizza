document.addEventListener('DOMContentLoaded', () => {
    const ordersList = document.getElementById('ordersList');
    const backButton = document.getElementById('backButton');

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.forEach((order, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('order-item');
        
        listItem.innerHTML = `
            <div class="order-details">
                <p><strong>Nome:</strong> ${order.name}</p>
                <p><strong>Pizza:</strong> ${order.pizza}</p>
                <p><strong>Telefone:</strong> ${order.phone}</p>
            </div>
            <div class="order-actions">
                <button class="whatsapp-button" onclick="sendWhatsApp('${order.phone}')">Avisar no WhatsApp</button>
                <button class="delete-button" onclick="deleteOrder(${index})">Excluir</button>
            </div>
        `;

        ordersList.appendChild(listItem);
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    window.sendWhatsApp = (phone) => {
        const message = encodeURIComponent('Seu pedido está pronto!');
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(url, '_blank');
    };

    window.deleteOrder = (index) => {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        location.reload(); // Recarrega a página para atualizar a lista
    };
});
