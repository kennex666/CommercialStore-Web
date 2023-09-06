const $ = document;
var e1;
var catchEventLearnMore;
var numberInCart = 0;
var productInfo = {};
var cartStorage = window.localStorage.getItem('cart');
if (!cartStorage)
    cartStorage = [];
else {
    cartStorage = JSON.parse(cartStorage);
    cartStorage.forEach(element => {
        if (element && element.quantity > 0)
            numberInCart++;
    });
}

// Bắt sự kiện nút lear more
function fetchAPIProduct(urlAPI, limitNumberProducts, idLoadProduct, isLoadMore) {
    fetch(urlAPI + (limitNumberProducts ? '?limit=' + limitNumberProducts : '') ).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(element => {
            
            element.title = element.title.split(' ');
            // get 5 word and join ' '
            element.title = element.title.slice(0, 6);

            element.title = element.title.join(' ');
            element.description = element.description.substring(0, 65) + '...';
            let product = $.createElement('div');
            product.className = 'product';
            product.innerHTML = '<div class="product-bar__tag"> <div class="tag-saleoff">10% OFF</div> <div class="tag-bestseller">Bestseller</div> </div> <div class="product-bar__img"> <img src="img/img_product.png" alt="Product"> </div> <div class="product-bar__review"> <div class="product-bar__review__star"> <img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"> </div> <div class="product-bar__review__total"> <span>' + element.rating.count + ' </span><span>reviews</span> </div> </div> <a class="no-a-decor font-color-black" href="product.html?id=' + element.id +'"> <div class="product-bar__title">' + element.title + '</div> </a> <div class="product-bar__description">' + element.description + '</div> <div class="product-bar__sales-info"> <span class="font-size-s">Ends in: </span><span class="font-size-s">19:12:03</span> </div> <div class="product-bar__price"> <span>AED $' + element.price + '</span><span class="product-bar__price__discount">AED $203.00</span> </div> <div class="product-bar__btn"> <button name="learn-more" type="button" class="btn font-size-s bold btn-decor-grayborder btn-padding-left-right-15px">Learn more</button> <a href="product.html?id=' + element.id +'" class="no-a-decor"><button type="button" class="btn font-size-s bold btn-decor-ograngeborder btn-padding-left-right-box">Buy</button></a> </div>';
            $.getElementById(idLoadProduct).appendChild(product);
            catchEventLearnMore = product.querySelectorAll('[name="learn-more"]');
            for (let i = 0; i < catchEventLearnMore.length; i++) {
            catchEventLearnMore[i].onclick = (e) => {
                e = e.target;
                e = ((e.parentElement).parentElement);
                e.innerHTML = e.innerHTML +
                    '<div class="product-bar-details-popup postion-absolute"> <a class="no-a-decor font-color-black" href="product.html"> <div class="product-bar__title">' + element.title + '</div> </a> <div class="product-bar__description">' + element.description + '</div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 1:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 2:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 3:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 4:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 5:</span><span class="font-size-s">Details</span> </div> <div class="product-bar__sales-info"> <span class="font-size-s">Ends in: </span><span class="font-size-s">19:12:03</span> </div> <div class="product-bar__price"> <span>AED $' + element.price + '</span><span class="product-bar__price__discount">AED $203.00</span> </div> <div class="product-bar__btn"> <button type="button" class="btn font-size-s bold btn-decor-ograngebg btn-padding-left-right-15px learn-more-clicked">Learn more</button> <a href="product.html?id=' + element.id +'"><button type="button" class="btn font-size-s bold btn-decor-ograngebg btn-padding-left-right-box"><img src="img/ico_buy.svg" alt="Buy"></button></a> </div> </div>';
            }
        }
        });
    }).then(() => {
        if (isLoadMore) {
            loadMoreCard(idLoadProduct);
        }
    }).then(() => {
        
    })
    .catch ((err) => {
    });
}

function loadMoreCard(idLoadProduct) {
    let loadBar = $.createElement('div');
        loadBar.className = 'loadBar-productCard center-flex-row';
        loadBar.innerHTML = '<div class="reload-product"> <img src="img/ico-reload.svg" alt="Product"> <h2>Load more</h2> <h2>product</h2> </div>'

        $.getElementById(idLoadProduct).appendChild(loadBar);

}

function loadADS(adsType, idLoadProduct, idReplace) {
    let ads = $.createElement('div');
    ads.className = 'product';

    if (adsType == 'chat') {
        ads.innerHTML = '<div class="card-ads-product"> <h1>Get sales advince,</h1> <h2 class="font-color-orange">not by a robot</h2> <button class="btn btn-decor-ograngebg btn-medium-size hover">Live chat</button> <div class="text-center-in-image"> <img src="img/chat-phone.svg" alt="Phone" width="210px"> <div> <button class="btn btn-black mg-top-45px hover">Need help?</button> </div> </div> </div>';
    } else if (adsType == 'microsoft') {
        ads.innerHTML = '<div class="card-ads-product-nocenter"> <h1>Microsoft</h1> <h2>AUTHORISED</h2> <h3>Refurbisher</h3> <div class="text-center-in-image"> <img src="img/img-pc.svg" alt="Phone" width="100%"> </div> </div>';
    }

    $.getElementById(idLoadProduct).replaceChild(getElementById(idLoadProduct)[idReplace], $.getElementById(idReplace));
}


                            


function loadDataProduct(urlAPI) {
    fetch(urlAPI).then((response) => {
        return response.json();
    }).then((data) => {
        data.title = data.title.split(' ');
            // get 5 word and join ' '
        data.title = data.title.slice(0, 6);

        data.title = data.title.join(' ');
        elem = $.getElementsByClassName('productDestitle')
        for ( i = 0; i < elem.length; i++ ) {
            elem[i].innerHTML = data.title;
        }
        $.getElementById('countReview').innerHTML = data.rating.count;
        $.getElementById('priceProduct').innerHTML = "ADE $" + data.price;
        
        productInfo.name = data.title;
        productInfo.price = data.price;
    }).catch((err) => {
        console.log(err);
    });
}

window.onload = () => {
    if (window.location.pathname.indexOf('/allproducts.html') !== -1) {
        fetchAPIProduct('https://fakestoreapi.com/products', 8, "loadProductAll", true);
        fetchAPIProduct('https://fakestoreapi.com/products/category/jewelery', 4, "theBestForYou-product", false);
        fetchAPIProduct('https://fakestoreapi.com/products', 8, "loadBestSeller", false);
    } else if (window.location.pathname.indexOf('/') !== -1) || window.location.pathname.indexOf('/index.html')!== -1)) {
        fetchAPIProduct('https://fakestoreapi.com/products', 8, "recommendLoad", false);
        fetchAPIProduct('https://fakestoreapi.com/products/category/jewelery', 4, "loadBestSeller", false);
    } else if (window.location.pathname.indexOf('/product.html') !== -1) {
        let id = getIdProduct()
        loadDataProduct('https://fakestoreapi.com/products/' + id);
        fetchAPIProduct('https://fakestoreapi.com/products', 4, "recommendLoad", false);
    } else if (window.location.pathname..indexOf('/cart.html') !== -1) {
        fetchAPIProduct('https://fakestoreapi.com/products', 4, "recommendLoad", false);
        cartPageDisplay()
    }

    if (numberInCart > 0) {
        let div = document.getElementById("cart");
        let p = document.getElementById('p-cart ');
        p.textContent = numberInCart;
        div.style.display = "flex";
    }
}

function getIdProduct() {
    let query = window.location.search;
    let id = query.split('=')[1];
    return id;
}

// cart feature 
function addToCart() {
    
    if (!checkIssetInCart()) { 
        let div = document.getElementById("cart");
        let p = document.getElementById('p-cart ');
        let value = parseInt(p.textContent);
        value++;
        p.textContent = value;
        div.style.display = "flex";
        ++numberInCart;
    }
    addToCartStg();

}

function addToCartStg() {

    if (!checkIssetInCart()) {
        cartStorage[getIdProduct()] = {name: productInfo.name, price: productInfo.price, image: "", quantity: 1};
    } else {
        ++cartStorage[getIdProduct()].quantity;
    }
    window.localStorage.setItem('cart', JSON.stringify(cartStorage));
    alert("Add to cart successfully");
}

function checkIssetInCart() {
    let id = getIdProduct();
    if (!!cartStorage[id]) {
        return true;
    } else {
        return false;
    }
}

function cartPageDisplay() {
    let cart = $.getElementById('addCart');

    if (numberInCart == 0) {
        let product = $.createElement('div');
        product.classList = 'cart__body';
        /* Not breaking line */
        product.style.whiteSpace = 'nowrap';
        product.innerHTML = '<p><h2>Cart is empty</h2> </div>';
        cart.appendChild(product);
    } else {
        let i = 0;
        cartStorage.forEach((item) => {
            if (item == null) {
                i++; return;
            }
            let product = $.createElement('div');
            product.classList = 'cart__body';
            product.setAttribute('data-id', i);
            product.setAttribute('name', "product-in-cart");
            product.innerHTML = '<input type="checkbox"> <img src="img/product/mac-1.png" alt="" srcset=""> <div class="cart__body__info"> <h2>' + item.name + '</h2> <h3>Core i5 - 1.6 GHz - SSD 64GB - RAM 2GB</h3> </div> <div class="cart__body__info"> <input type="number" value="'+ item.quantity +'"> </div> <div class="cart__body__info"> <p class="p-price-product" dir="rtl">$'+ item.price * item.quantity +'</p> </div> <div class="cart__body__info"> <button onclick="editCart('+ i +')" class="btn btn-decor-ograngebg">Edit</button> </div>';
            cart.appendChild(product);
            i++;
        })
        let product = $.createElement('div');
            product.classList = 'cart__body';
            product.setAttribute('data-id', i);
            product.setAttribute('name', "product-in-cart");
            let info = caculatorCart();
            product.innerHTML = '<p> </p> <p></p> <p> </p> <p id="quantityTotal">'+info.quantity+'</p> <p id="priceTotal">$'+ info.price + '</p> <button onclick="buyProduct()" class="btn btn-decor-ograngebg">Buy</button>';
            cart.appendChild(product);
            i++;
    }

}

function editCart(idProduct) {
    list = $.getElementsByName('product-in-cart');
    for (i = 0; i < list.length; i++) {
        if (list[i].getAttribute('data-id') == idProduct) {
            numberProduct = list[i].getElementsByTagName('input')[1].value;
            if (numberProduct <= 0) {
                list[i].remove();
                cartStorage[idProduct] = null;
            } else {
                cartStorage[idProduct].quantity = numberProduct;
                list[i].getElementsByClassName('p-price-product')[0].innerHTML = '$' + cartStorage[idProduct].price * numberProduct;
            }
            window.localStorage.setItem('cart', JSON.stringify(cartStorage));
            let info = caculatorCart();

            $.getElementById('quantityTotal').innerHTML = parseInt(info.quantity);
            $.getElementById('priceTotal').innerHTML = '$' + info.price;
            break;
        }
    }
}

function buyProduct() {
    let info = caculatorCart();
    alert("You have to pay $" + info.price + " for " + info.quantity + " products! Thanks for purcharsing!");
    window.localStorage.removeItem('cart');
    location.reload();
}

function caculatorCart() {
    let info = {};
    info.quantity = 0;
    info.price = 0;
    cartStorage.forEach((item) => {
        if (item == null) {
            return;
        }
        info.quantity += parseInt(item.quantity);
        info.price += item.price * parseInt(item.quantity);
    });
    return info;
}

function buyToCart() {
      if (!checkIssetInCart()) {
        cartStorage[getIdProduct()] = {name: productInfo.name, price: productInfo.price, image: "", quantity: 1};
    } else {
        ++cartStorage[getIdProduct()].quantity;
    }
    window.localStorage.setItem('cart', JSON.stringify(cartStorage));
    location.replace("/cart.html");
}

function changeOptionButton(name, id) {
    let list = ($.getElementById(name)).getElementsByTagName('button');
    for (let i = 0; i < list.length; i++) {
        if (i != id)
            list[i].style.borderColor = '#d7d3d3';
        else 
            list[i].style.borderColor = '#fe7b38';
        list[i].style.backgroundColor = '#fff';
    }
}
