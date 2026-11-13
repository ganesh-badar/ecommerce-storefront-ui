/**
 * ==============================================================================
 * APPLE FLAGSHIP STORE & PRODUCT SHOWCASE — APP LOGIC (app.js)
 * Features:
 *  1. Multi-Palette Theme Switcher (Cupertino, Espresso, Slate, Obsidian)
 *  2. Interactive Shopping Bag System & Live Calculation
 *  3. Slide-out Cart Drawer with LocalStorage Persistence
 *  4. Apple TV+ Horizontal Streaming Carousel Controls
 *  5. Toast Notifications & Accessible Micro-interactions
 * ==============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. STATE MANAGEMENT
     -------------------------------------------------------------------------- */
  const state = {
    cart: JSON.parse(localStorage.getItem('apple_store_cart')) || [],
    palette: localStorage.getItem('apple_store_palette') || 'cupertino'
  };

  /* --------------------------------------------------------------------------
     2. DOM REFERENCES
     -------------------------------------------------------------------------- */
  const DOM = {
    paletteBtns: document.querySelectorAll('.palette-btn'),
    navBagBtn: document.getElementById('navBagBtn'),
    bagBadge: document.getElementById('bagBadge'),
    cartDrawerOverlay: document.getElementById('cartDrawerOverlay'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartEmiNote: document.getElementById('cartEmiNote'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    streamPrevBtn: document.getElementById('streamPrevBtn'),
    streamNextBtn: document.getElementById('streamNextBtn'),
    streamCarouselTrack: document.getElementById('streamCarouselTrack'),
    toastNotice: document.getElementById('toastNotice'),
    tradeInBtn: document.getElementById('tradeInBtn'),
    navSearchBtn: document.getElementById('navSearchBtn')
  };

  /* --------------------------------------------------------------------------
     3. TOAST NOTIFICATIONS
     -------------------------------------------------------------------------- */
  let toastTimer = null;
  function showToast(message) {
    if (!DOM.toastNotice) return;
    DOM.toastNotice.textContent = message;
    DOM.toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toastNotice.classList.remove('show');
    }, 2800);
  }

  /* --------------------------------------------------------------------------
     4. PALETTE THEME SWITCHER
     -------------------------------------------------------------------------- */
  function applyPalette(paletteKey) {
    state.palette = paletteKey;
    document.documentElement.setAttribute('data-palette', paletteKey);
    localStorage.setItem('apple_store_palette', paletteKey);

    DOM.paletteBtns.forEach((btn) => {
      const isTarget = btn.getAttribute('data-palette-target') === paletteKey;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    });
  }

  function initPaletteSwitcher() {
    applyPalette(state.palette);
    DOM.paletteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-palette-target');
        applyPalette(target);
        const nameMap = {
          cupertino: 'Cupertino Dark',
          3: 'Espresso Bronze (#211B1A)',
          1: 'Slate Steel (#111522)',
          2: 'Obsidian Velvet (#17151C)'
        };
        showToast(`Theme switched to ${nameMap[target] || target}`);
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. SHOPPING BAG LOGIC
     -------------------------------------------------------------------------- */
  function saveCart() {
    localStorage.setItem('apple_store_cart', JSON.stringify(state.cart));
  }

  function formatCurrency(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  function calculateCartTotal() {
    return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((count, item) => count + item.quantity, 0);
    if (DOM.bagBadge) {
      DOM.bagBadge.textContent = totalCount;
      DOM.bagBadge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    }

    if (!DOM.cartItemsContainer) return;

    if (state.cart.length === 0) {
      DOM.cartItemsContainer.innerHTML =
        '<p class="cart-empty-message">Your bag is currently empty.</p>';
      if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = '₹0';
      if (DOM.cartEmiNote)
        DOM.cartEmiNote.textContent = 'Or ₹0/mo with 6 months No Cost EMI.‡';
      return;
    }

    const total = calculateCartTotal();
    const emi = Math.round(total / 6);

    if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = formatCurrency(total);
    if (DOM.cartEmiNote) {
      DOM.cartEmiNote.textContent = `Or ${formatCurrency(emi)}/mo with 6 months No Cost EMI.‡`;
    }

    DOM.cartItemsContainer.innerHTML = state.cart
      .map(
        (item) => `
        <div class="cart-item-row" data-id="${item.id}">
          <div class="cart-item-thumb">
            <i class="fa-solid fa-cube" aria-hidden="true"></i>
          </div>
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.title}</h4>
            <div class="cart-item-price tabular-num">${formatCurrency(item.price)}</div>
            <div class="cart-item-actions">
              <button type="button" class="cart-qty-btn btn-qty-minus" aria-label="Decrease quantity">-</button>
              <span class="tabular-num">${item.quantity}</span>
              <button type="button" class="cart-qty-btn btn-qty-plus" aria-label="Increase quantity">+</button>
              <button type="button" class="cart-item-remove" aria-label="Remove item">Remove</button>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    // Attach item listeners
    DOM.cartItemsContainer.querySelectorAll('.cart-item-row').forEach((row) => {
      const id = row.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);

      row.querySelector('.btn-qty-plus').addEventListener('click', () => {
        if (item) {
          item.quantity += 1;
          saveCart();
          updateCartUI();
        }
      });

      row.querySelector('.btn-qty-minus').addEventListener('click', () => {
        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            state.cart = state.cart.filter((i) => i.id !== id);
          }
          saveCart();
          updateCartUI();
        }
      });

      row.querySelector('.cart-item-remove').addEventListener('click', () => {
        state.cart = state.cart.filter((i) => i.id !== id);
        saveCart();
        updateCartUI();
        showToast('Item removed from bag');
      });
    });
  }

  function addToBag(product) {
    const existing = state.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: Number(product.price),
        quantity: 1
      });
    }
    saveCart();
    updateCartUI();
    openCartDrawer();
    showToast(`Added ${product.title} to bag`);
  }

  function openCartDrawer() {
    if (DOM.cartDrawerOverlay) {
      DOM.cartDrawerOverlay.classList.add('active');
      DOM.cartDrawerOverlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closeCartDrawer() {
    if (DOM.cartDrawerOverlay) {
      DOM.cartDrawerOverlay.classList.remove('active');
      DOM.cartDrawerOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  /* --------------------------------------------------------------------------
     6. CAROUSEL & INTERACTIVITY
     -------------------------------------------------------------------------- */
  function initCarousel() {
    if (!DOM.streamCarouselTrack) return;

    if (DOM.streamPrevBtn) {
      DOM.streamPrevBtn.addEventListener('click', () => {
        DOM.streamCarouselTrack.scrollBy({ left: -340, behavior: 'smooth' });
      });
    }

    if (DOM.streamNextBtn) {
      DOM.streamNextBtn.addEventListener('click', () => {
        DOM.streamCarouselTrack.scrollBy({ left: 340, behavior: 'smooth' });
      });
    }

    document.querySelectorAll('.btn-stream').forEach((btn) => {
      btn.addEventListener('click', () => {
        const show = btn.getAttribute('data-show');
        showToast(`Streaming preview: "${show}" in 4K HDR...`);
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. EVENT LISTENERS INITIALIZATION
     -------------------------------------------------------------------------- */
  function initEventListeners() {
    // Buy buttons
    document.querySelectorAll('.btn-add-bag').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        const title = btn.getAttribute('data-title');
        const price = btn.getAttribute('data-price');
        addToBag({ id, title, price });
      });
    });

    // Nav Bag click
    if (DOM.navBagBtn) {
      DOM.navBagBtn.addEventListener('click', openCartDrawer);
    }

    // Close bag drawer
    if (DOM.cartCloseBtn) {
      DOM.cartCloseBtn.addEventListener('click', closeCartDrawer);
    }

    if (DOM.cartDrawerOverlay) {
      DOM.cartDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.cartDrawerOverlay) {
          closeCartDrawer();
        }
      });
    }

    // Search button
    if (DOM.navSearchBtn) {
      DOM.navSearchBtn.addEventListener('click', () => {
        showToast('Spotlight search: Type to explore Mac, iPad, iPhone...');
      });
    }

    // Trade In button
    if (DOM.tradeInBtn) {
      DOM.tradeInBtn.addEventListener('click', () => {
        showToast('Apple Trade In: Select your current smartphone to get up to ₹42,500 credit.');
      });
    }

    // Checkout button
    if (DOM.checkoutBtn) {
      DOM.checkoutBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          showToast('Your bag is empty.');
          return;
        }
        showToast('Proceeding to Express Apple Pay Checkout...');
      });
    }

    // ESC key closes drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. APP BOOTSTRAP
     -------------------------------------------------------------------------- */
  function init() {
    initPaletteSwitcher();
    updateCartUI();
    initCarousel();
    initEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
