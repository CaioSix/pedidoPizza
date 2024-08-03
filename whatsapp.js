document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('orderList');

    orderList.addEventListener('click', (e) => {
        if (e.target.classList.contains('whatsapp-button')) {
            const phone = e.target.getAttribute('data-phone');
            const message = 'Sua pizza está pronta!';
            window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank');
        }
    });
});
