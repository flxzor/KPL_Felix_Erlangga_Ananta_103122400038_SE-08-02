const ORDER_STATUS = {
    DELIVERED: 'Delivered'
};

async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderDetails(orderId, token);

        renderOrderDetails(order);
        showOrderModal(order, token);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function getOrderDetails(orderId, token) {
    const response = await fetch(
        `https://example.com/api/order/${orderId}`,
        {
            headers: {
                Authorization: token
            }
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

function renderOrderDetails(order) {
    const detailsDiv = document.querySelector('#orderModal #orderDetails');

    detailsDiv.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;
}

function showOrderModal(order, token) {
    const modal = document.getElementById('orderModal');
    const closeBtn = modal.querySelector('.close');
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    modal.style.display = 'block';

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    configureConfirmButton(confirmBtn, order, token);
}

function configureConfirmButton(button, order, token) {
    const isDelivered =
        order.status === ORDER_STATUS.DELIVERED;

    button.style.display = isDelivered
        ? 'none'
        : 'block';

    if (!isDelivered) {
        button.onclick = () => {
            confirmOrder(order.id, token);
        };
    }
}