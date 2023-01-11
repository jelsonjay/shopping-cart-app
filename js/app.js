const allProducts = document.querySelector('.card-container');
//const addToCart = document.querySelector("#addToCart");

// ======RENDER HTML COMPONENTS======
function renderProducts() {
	products.forEach(items => {
		const { price, date, comment, name, imgSrc, category } = items;
		allProducts.innerHTML += `
  
  <div class="card bag">
  <div class="body-img">
    <img src="${imgSrc}" class="pic" alt="${name}"/>
    <span class="category-title">${category}</span>
  </div>
  <div class="content">
    <div class="content-top">
      <span><i class="bx bxs-calendar"></i>${date}</span>
      <span><i class="bx bxs-comment"></i>${comment}</span>
    </div>
    <h2 class="product-title">${name}</h2>
    <p class="product-price">£ ${price}</p>
    <label>Size:</label>
    <div>
      <select>
      <option>Select</option>
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XXL</option>
    </select>
    <i class="bx bx-cart add-cart"></i>
    </div>
 

  </div>
</div>
  
  `;
	});
}

renderProducts();

function addCart(id) {
	console.log(id);
}
addCart();

// open and close cart
const cartIcon = document.querySelector('.cart-icon');
const openCloseCart = document.querySelector('.cart-close');
const cart = document.querySelector('.cart');

cartIcon.addEventListener('click', () => {
	cart.classList.add('active');
});
openCloseCart.addEventListener('click', () => {
	cart.classList.remove('active');
});

// start when the document is ready
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', start);
} else {
	start();
}

// ======== START =========
function start() {
	addEvents();
}
// ======== UPDATE & RENDER =========
function update() {
	addEvents();
	updateTotal();
}
// ======== ADD EVENTS =========
function addEvents() {
	const removeItem = [...document.querySelectorAll('.cart-delete')];
	//console.log(removeItem);
	removeItem.forEach(elem => {
		elem.addEventListener('click', handleRemoveCart);
	});

	// ----change item quantity
	let cartQuantityInput = [...document.querySelectorAll('.cart-quantity')];
	cartQuantityInput.forEach(input => {
		input.addEventListener('change', handleChangeQty);
	});

	//-----Add item to cart-------
	let addToCart = [...document.querySelectorAll('.add-cart')];
	addToCart.forEach(addCart => {
		addCart.addEventListener('click', handleAddToCart);
	});
	//console.log(addToCart, 'ADD TO CART');

	// BUY ORDER
	const buyBtn = document.querySelector('.btn-buy');
	buyBtn.addEventListener('click', handleBuyOrder);
}

// ======== HANDLE EVENTS FUNCTIONS =========
let = repeatedItem = [];

function handleAddToCart() {
	let product = this.parentNode.parentNode.parentNode;
	let title = product.querySelector('.product-title').innerHTML;
	let price = product.querySelector('.product-price').innerHTML;
	let productImg = product.querySelector('.pic').src;

	console.log(title, price, productImg);
	// NEW ADD TO
	let newAddTo = {
		title,
		price,
		productImg
	};

	// ITEM REPETED
	if (repeatedItem.find(elem => elem.title === newAddTo.title)) {
		alert('This item is already existe, try add new item please!');
		return;
	} else {
		repeatedItem.push(newAddTo);
	}

	// ------ADD PRODUCT TO CART-----
	let addNewToCart = AddNewToCart(title, price, productImg);
	let newNode = document.createElement('div');
	newNode.innerHTML = addNewToCart;
	const newCartContent = cart.querySelector('.cart-content');
	newCartContent.appendChild(newNode);

	update();
}

function handleRemoveCart() {
	this.parentElement.remove();
	repeatedItem = repeatedItem.filter(
		elem =>
			elem.title !=
			this.parentElement.querySelector('.cart-product-title').innerHTML
	);
	update();
}
// ======== CHANGE QUANTITY =========
function handleChangeQty() {
	if (isNaN(this.value) || this.value < 1) {
		this.value = 1;
	}
	this.value = Math.floor(this.value); // keep integer

	update();
}

function handleBuyOrder() {
	if (repeatedItem.length <= 0) {
		alert('There is no order \nPlease make an order!');
		return;
	}
	const cartContent = cart.querySelector('.cart-content');
	cartContent.innerHTML = '';
	alert('Your order is in placed successfull. \n Thank You!');

	repeatedItem = [];
	update();
}

// ======== UPDATE & RERENDER FUNCTIONS =========
function updateTotal() {
	let cartCards = [...document.querySelectorAll('.cart-box')];
	const totalItem = cart.querySelector('.total-price');
	let total = 0;
	cartCards.forEach(cartBox => {
		let priceItem = cartBox.querySelector('.cart-price');
		let price = parseFloat(priceItem.innerHTML.replace('£', ''));
		let quantity = cartBox.querySelector('.cart-quantity').value;
		total += price * quantity;
	});

	// -- keep only 2 digits after the decimal point
	total = total.toFixed(2);
	//total = Math.round(total * 100) / 100;

	totalItem.innerHTML = '£' + total;
}

// ======RENDER HTML COMPONENTS======
function AddNewToCart(title, price, productImg) {
	return `			
						<div class="cart-box">
							<img src="${productImg}" class="cart-img" alt="cart-img" />
							<div class="info">
								<div class="cart-product-title">${title}</div>
								<div class="cart-price">${price}</div>
								<input type="number" value="1" class="cart-quantity" />
							</div>
							<i class="bx bxs-trash-alt cart-delete"></i>
						</div>
  `;
}
