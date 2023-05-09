const user = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');

user.addEventListener('click', showhide);
mobileIconMenu.addEventListener('click', showhideMobile);
cart.addEventListener('click', showhideCart);

function showhideCart() {
    if (mobileMenu.classList.contains('showHide')) {    
        asideCart.classList.toggle('showHide');
    } else {
        mobileMenu.classList.toggle('showHide');
        asideCart.classList.toggle('showHide');
    }

    if (!desktopMenu.classList.contains('showHide')) {
        desktopMenu.classList.toggle('showHide');
    }
}

function showhideMobile() {
    if (asideCart.classList.contains('showHide')) {    
        mobileMenu.classList.toggle('showHide');
    }
    else {
        asideCart.classList.toggle('showHide');
        mobileMenu.classList.toggle('showHide');
    }
}

function showhide() {
    if (asideCart.classList.contains('showHide')) {
        desktopMenu.classList.toggle('showHide');
    } else {
        asideCart.classList.toggle('showHide');
        desktopMenu.classList.toggle('showHide');
    }
}

const product = {
    name: 'Bike',
    price: 190,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
};

const cardsContainer = document.querySelector('.cards-container');

for (i = 0; i < 20; i++) {

    let productCard = document.createElement('div');
    productCard.classList.add('product-card');
    let productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.setAttribute('alt', product.name);
    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    let innerDiv = document.createElement('div');
    let price = document.createElement('p');
    price.innerText = `${product.price}`;
    let nameProduct = document.createElement('p');
    nameProduct.innerText = `${product.name}`;
    let figure = document.createElement('figure');
    let addIcon = document.createElement('img');
    addIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    addIcon.setAttribute('alt', 'Add to cart');
    figure.appendChild(addIcon);
    innerDiv.appendChild(price);
    innerDiv.appendChild(nameProduct);
    productInfo.appendChild(innerDiv);
    productInfo.appendChild(figure);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}


