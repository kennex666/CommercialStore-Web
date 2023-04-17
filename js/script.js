const $ = document;
var e1;
var catchEventLearnMore;

// Bắt sự kiện nút lear more
window.onload = () => {
    catchEventLearnMore = $.getElementsByName('learn-more');
    for (let i = 0; i < catchEventLearnMore.length; i++) {
        catchEventLearnMore[i].onclick = (e) => {
            e = e.target;
            e = ((e.parentElement).parentElement);
            e.innerHTML = e.innerHTML +
                '<div class="product-bar-details-popup postion-absolute"> <a class="no-a-decor font-color-black" href="product.html"> <div class="product-bar__title">Apple MacBook Pro</div> </a> <div class="product-bar__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, molestiae?</div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 1:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 2:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 3:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 4:</span><span class="font-size-s">Details</span> </div> <div class="product-bar-details-popup__info"> <img src="/"> <span class="bold font-color-gray font-size-s">Information 5:</span><span class="font-size-s">Details</span> </div> <div class="product-bar__sales-info"> <span class="font-size-s">Ends in: </span><span class="font-size-s">19:12:03</span> </div> <div class="product-bar__price"> <span>AED $19.00</span><span class="product-bar__price__discount">AED $203.00</span> </div> <div class="product-bar__btn"> <button type="button" class="btn font-size-s bold btn-decor-ograngebg btn-padding-left-right-15px">Learn more</button> <button type="button" class="btn font-size-s bold btn-decor-ograngebg btn-padding-left-right-box"><img src="img/ico_buy.svg" alt="Buy"></button> </div> </div>';
        }
    }
}