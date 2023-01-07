//import products from './js/product.js';
const products = [
	{
		id: 1,
		name: 'Louis Vitton',
		price: 29.99,
		instock: 100,
		category: 'Bag',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.',
		imgSrc: './images/bag3.png'
	},
	{
		id: 2,
		name: 'MacBook Pro',
		price: 24.99,
		instock: 43,
		category: 'Technology',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.',
		imgSrc: './images/macbook-air.png'
	},
	{
		id: 3,
		name: 'Nike',
		price: 19.99,
		instock: 10,
		category: 'Shoes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.',
		imgSrc: './images/nike-1.png'
	},
	{
		id: 4,
		name: 'Air Jordan Nike',
		price: 25.99,
		instock: 5,
		category: 'Shoes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.',
		imgSrc: './images/nike-1.png'
	},
	{
		id: 5,
		name: 'Louis Vitton',
		price: 29.99,
		instock: 4,
		category: 'Bag',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.',
		imgSrc: './images/bag-4.png'
	},
	{
		id: 6,
		name: 'Mac',
		price: 39.99,
		instock: 40,
		category: 'Technology',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.',
		imgSrc: './images/apple-mac.png'
	}
];

const allProducts = document.querySelector('.card-container');
//const addToCart = document.querySelector("#addToCart");

// render products
function renderProducts() {
	products.forEach(items => {
		const { id, name, imgSrc, category } = items;
		allProducts.innerHTML += `
  
  <div class="card bag">
  <div class="body-img">
    <img src="${imgSrc}" alt="" class="pic" alt="${name}"/>
    <span class="title">${category}</span>
  </div>
  <div class="content">
    <div class="content-top">
      <span><i class="bx bxs-calendar"></i>May 01 2024</span>
      <span><i class="bx bxs-comment"></i>16</span>
    </div>
    <h2>${name}</h2>
    <label>Size</label>
    <select>
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XXL</option>
    </select>
<i class="bx bx-cart add-cart"></i>

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
