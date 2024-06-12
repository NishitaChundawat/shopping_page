document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 20.00 },
        { id: 3, name: 'Product 3', price: 30.00 }
    ];

    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.product').dataset.id);
            const product = products.find(p => p.id === productId);
            addToCart(product);
        });
    });

    function addToCart(product) {
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });
        totalElement.textContent = total.toFixed(2);
    }
});
