const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Gtx 1650',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Ryzen 5 3550h',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



for (item of productList) {

  const htmlTemplate = `
  <div class="product-card">
        <img src="${item.image}" alt="">
        <div class="product-info">
          <div>
            <p>${item.price}</p>
            <p>${item.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`;

      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const img = document.createElement('img');
      img.setAttribute('src',item.image);

      productCard.appendChild(img);

      const ProductInfo = document.createElement('div');
      ProductInfo.classList.add('product-info');

      productCard.appendChild(ProductInfo);

      const productInfoDiv = document.createElement('div');

      const price = document.createElement('p');
      price.innerText = item.name;
      const name = document.createElement('p');
      name.innerText = item.name;

      productInfoDiv.append(price,name);

      ProductInfo.append(productInfoDiv);

      const figure = document.createElement('figure');
      const svgIcon = document.createElement('img');
      svgIcon.setAttribute('src','./icons/bt_add_to_cart.svg')
      

      ProductInfo.appendChild(figure);
      figure.appendChild(svgIcon);

      cardsContainer.appendChild(productCard);


}