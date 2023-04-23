const $ = document;
var e1;
var catchEventLearnMore;

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
            product.innerHTML = '<div class="product-bar__tag"> <div class="tag-saleoff">10% OFF</div> <div class="tag-bestseller">Bestseller</div> </div> <div class="product-bar__img"> <img src="img/img_product.png" alt="Product"> </div> <div class="product-bar__review"> <div class="product-bar__review__star"> <img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"><img src="img/star-yellow.svg" alt="Star"> </div> <div class="product-bar__review__total"> <span>' + element.rating.count + ' </span><span>reviews</span> </div> </div> <a class="no-a-decor font-color-black" href="product.html?id=' + element.id +'"> <div class="product-bar__title">' + element.title + '</div> </a> <div class="product-bar__description">' + element.description + '</div> <div class="product-bar__sales-info"> <span class="font-size-s">Ends in: </span><span class="font-size-s">19:12:03</span> </div> <div class="product-bar__price"> <span>AED ' + element.price + '</span><span class="product-bar__price__discount">AED $203.00</span> </div> <div class="product-bar__btn"> <button type="button" class="btn font-size-s bold btn-decor-grayborder btn-padding-left-right-15px">Learn more</button> <a href="product.html?id=' + element.id +'" class="no-a-decor"><button type="button" class="btn font-size-s bold btn-decor-ograngeborder btn-padding-left-right-box">Buy</button></a> </div>';
            $.getElementById(idLoadProduct).appendChild(product);
        });
    }).then(() => {
        if (isLoadMore) {
            loadMoreCard(idLoadProduct);
        }
        catchEventLearnMore = $.getElementsByName('learn-more');
        for (let i = 0; i < catchEventLearnMore.length; i++) {
            catchEventLearnMore[i].onclick = (e) => {
                e = e.target;
                e = ((e.parentElement).parentElement);
                e.innerHTML = e.innerHTML +
                    '<div class="product-bar-details-popup postion-absolute"> <a class="no-a-decor font-color-black" href="product.html"> <div class="product-bar__title">Apple MacBook Pro</div> </a> <div class="product-bar__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, molestiae?</div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 1:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 2:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 3:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 4:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 5:</span><span class="font-size-s">Details</span> </div> <div class="product-bar__sales-info"> <span class="font-size-s">Ends in: </span><span class="font-size-s">19:12:03</span> </div> <div class="product-bar__price"> <span>AED $19.00</span><span class="product-bar__price__discount">AED $203.00</span> </div> <div class="product-bar__btn"> <button type="button" class="btn font-size-s bold btn-decor-ograngebg btn-padding-left-right-15px learn-more-clicked">Learn more</button> <button type="button" class="btn font-size-s bold btn-decor-ograngebg btn-padding-left-right-box"><img src="img/ico_buy.svg" alt="Buy"></button> </div> </div>';
            }
        }})
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
        $.getElementById('priceProduct').innerHTML = "ADE $" +  data.price;
    }).catch((err) => {
        console.log(err);
    });
}

window.onload = () => {
    if (window.location.pathname === '/allproducts.html') {
        fetchAPIProduct('https://fakestoreapi.com/products', 8, "loadProductAll", true);
        fetchAPIProduct('https://fakestoreapi.com/products/category/jewelery', 4, "theBestForYou-product", false);
        fetchAPIProduct('https://fakestoreapi.com/products', 8, "loadBestSeller", false);
    } else if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        fetchAPIProduct('https://fakestoreapi.com/products', 8, "recommendLoad", false);
        fetchAPIProduct('https://fakestoreapi.com/products/category/jewelery', 4, "loadBestSeller", false);
    } else if (window.location.pathname === '/product.html') {
        let query = window.location.search;
        let id = query.split('=')[1];
        loadDataProduct('https://fakestoreapi.com/products/' + id); {
            fetchAPIProduct('https://fakestoreapi.com/products', 4, "recommendLoad", false);
        }
    }
}

// cart feature
function showDiv() {
    // Chọn thẻ div bằng phương thức getElementById
    var div = document.getElementById("cart");
    var p = document.getElementById('p-cart ');
    let value = parseInt(p.textContent);
    value++;
    p.textContent = value;
    // Đặt giá trị hiển thị của thẻ div là "block" để hiển thị nó
    div.style.display = "flex";
  }