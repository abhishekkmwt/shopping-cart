const currentUser=JSON.parse(localStorage.getItem('currentUser'));
const cartArray=currentUser.cart;

const users=JSON.parse(localStorage.getItem('users'));


const leftMainCartDiv =document.getElementsByClassName('left-mainCart')[0];
const checkOutItemMainDiv =document.querySelector('.right-mainCart .ci');
const totalAmtDiv=document.querySelector('.totalAmt .amt');
console.log(leftMainCartDiv);

const checkoutBtn=document.getElementById('checkout');

if(cartArray.length===0){
    leftMainCartDiv.innerHTML='Your cart is empty please add products to checkout'; 
}else{
    function updateCartAndCheckout(){
        let totalPrice=0;
        leftMainCartDiv.innerHTML=''; 
        checkOutItemMainDiv.innerHTML='';
        cartArray.forEach((element,index) => {
                let cardDiv=document.createElement('div');
                cardDiv.className='card';
                let itemImageDiv=document.createElement('div');
                itemImageDiv.className='item-image';
                itemImageDiv.innerHTML=`<img src="${element.image}" alt="image1">`
                let itemDetailDiv=document.createElement('div');
                itemDetailDiv.className='item-details';
                itemDetailDiv.innerHTML=`
                    <div class="item-colors">
                        <div class="color-name">
                            <b>Title :</b> ${element.title}
                        </div>
                    </div>
                    <div class="price">
                        <b>Rating :</b> ${element.rating.rate}/5
                    </div>
                `
                let addToCartBtnDiv=document.createElement('div');
                addToCartBtnDiv.className='addToCartBtn1';
                let button=document.createElement('button');
                button.type='submit';
                button.className='removeToCart'
                button.setAttribute("data-index", index);
                button.textContent='Remove From Cart';
                button.addEventListener('click',()=>{
                    currentUser.cart.splice(index,1);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    users.forEach(element=>{
                        if(element.email===currentUser.email){
                            element.cart.splice(index,1);
                        }
                    })
                    localStorage.setItem('users', JSON.stringify(users));
                    totalCartPrice();
                    updateCartAndCheckout();
                });
                addToCartBtnDiv.appendChild(button);
    
                cardDiv.append(itemImageDiv,itemDetailDiv,addToCartBtnDiv);
                leftMainCartDiv.appendChild(cardDiv);
    
    
                 //creating checkout div
                 
                 let checkOutItemDiv=document.createElement('div');
                checkOutItemDiv.className='checkout-items';
                let checkoutItemNameDiv=document.createElement('div');
                checkoutItemNameDiv.className='checkout-item-name';
                checkoutItemNameDiv.innerText=`${index+1}. ${element.title}`
                let checkoutPriceDiv=document.createElement('div');
                checkoutPriceDiv.className='checkout-price';
                checkoutPriceDiv.innerText=`$${element.price}`;
                checkOutItemDiv.append(checkoutItemNameDiv,checkoutPriceDiv);
                checkOutItemMainDiv.appendChild(checkOutItemDiv);
    
                totalPrice+=element.price;
    
            });
    
            totalAmtDiv.innerHTML=`$${totalPrice}`;
    }
    updateCartAndCheckout();
    
    
    
    function totalCartPrice(){
        let price=0;
        cartArray.forEach(element=>{
            price+=element.price;    
        })
        currentUser.price=price;
        localStorage.setItem('currentUser',JSON.stringify(currentUser));
        users.forEach(element=>{
            if(element.email===currentUser.email){
                element.price=price;
            }
        })
        localStorage.setItem('users', JSON.stringify(users));
    }
        
    
    
    
    checkoutBtn.addEventListener('click',()=>{
        currentUser.cart=[];
        localStorage.setItem('currentUser',JSON.stringify(currentUser));
        users.forEach(element=>{
            if(element.email===currentUser.email){
                element.cart=[];
            }
        })
        localStorage.setItem('users', JSON.stringify(users));
        updateCartAndCheckout();
        window.location.href='./razorpay.html'
    })
}


