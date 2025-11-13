document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsDesktop = document.getElementById('cart-items-desktop');
    const cartTotalPriceDesktop = document.getElementById('cart-total-price-desktop');
    const cartItemsMobile = document.getElementById('cart-items-mobile');
    const cartTotalPriceMobile = document.getElementById('cart-total-price-mobile');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartFab = document.querySelector('.cart-fab');
    const cartItemCount = document.querySelector('.cart-item-count');
    const cartModalOverlay = document.querySelector('.cart-modal-overlay');
    const closeCartModalBtn = document.querySelector('.close-cart-modal');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            addToCart(name, price);
        });
    });

    if (cartFab) {
        cartFab.addEventListener('click', () => {
            cartModalOverlay.classList.add('visible');
        });
    }

    if (closeCartModalBtn) {
        closeCartModalBtn.addEventListener('click', () => {
            cartModalOverlay.classList.remove('visible');
        });
    }
    
    if (cartModalOverlay) {
        cartModalOverlay.addEventListener('click', (e) => {
            if (e.target === cartModalOverlay) {
                cartModalOverlay.classList.remove('visible');
            }
        });
    }

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        const cartHtml = cart.length === 0
            ? '<p>Your cart is empty.</p>'
            : cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <span class="cart-item-qty">${item.quantity}x</span>
                        <span>${item.name}</span>
                    </div>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('');

        if (cartItemsDesktop) {
            cartItemsDesktop.innerHTML = cartHtml;
        }
        if (cartItemsMobile) {
            cartItemsMobile.innerHTML = cartHtml;
        }

        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartItemCount) {
            cartItemCount.textContent = totalItems;
        }

        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const totalPriceFormatted = `$${totalPrice.toFixed(2)}`;

        if (cartTotalPriceDesktop) {
            cartTotalPriceDesktop.textContent = totalPriceFormatted;
        }
        if (cartTotalPriceMobile) {
            cartTotalPriceMobile.textContent = totalPriceFormatted;
        }
    }
});
