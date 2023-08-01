



const mensDiv=document.getElementsByClassName('mens-items')[0];
const womensDiv=document.getElementsByClassName('womens-items')[0];
const jewelleryDiv=document.getElementsByClassName('j-items')[0];
const electronicsDiv=document.getElementsByClassName('e-items')[0];
const mensDivName=document.getElementsByClassName('men')[0];
const womensDivName=document.getElementsByClassName('women')[0];
const jewelleryDivName=document.getElementsByClassName('jewel')[0];
const electronicsDivName=document.getElementsByClassName('electro')[0];
const itemContainer=document.getElementsByClassName('items-container')[0];




const url='https://fakestoreapi.com/products';
const colours=['Red','Blue','Green','Black','White'];
const sizes=['S','L','M','XL'];
let productsArray=[];
async function fetchProductDetails(){
    let response=await fetch(url);
    let result= await response.json();
    result.forEach(element=>{
       let color=randomColor(colours);
       let size=randomSize(sizes);
        element.colour=color;
        element.size=size;
        productsArray.push(element);
    })
    menClothing(result);
    womenClothing(result);
    jewellery(result);
    electronics(result);
}

console.log(productsArray);
function randomColor(colours){
    let index = Math.floor(Math.random()*colours.length);
    return colours[index];
}

function randomSize(sizes){
    let index = Math.floor(Math.random()*sizes.length);
    return sizes[index];
}

fetchProductDetails();

function menClothing(pArray){
    let menClothingArray= pArray.filter(element=>{
        return element.category==="men's clothing";
    })
    console.log(menClothingArray);
    if(menClothingArray.length===0){
        mensDiv.style.display='none';
        mensDivName.style.display="none";
    }
    else{
        mensDiv.style.display='flex';
        mensDivName.style.display="block";
        for(let i=0;i<menClothingArray.length;i++){
            let item=menClothingArray[i];
            let cardDiv=document.createElement('div');
            cardDiv.className='card';
            let itemImageDiv=document.createElement('div');
            itemImageDiv.className='item-image';
            itemImageDiv.innerHTML=`<img src="${menClothingArray[i].image}" alt="image1">`
            let itemDetailDiv=document.createElement('div');
            itemDetailDiv.className='item-details';
            itemDetailDiv.innerHTML=`
                    <div class="prizeAndSize">
                        <div class="prize">
                            $${menClothingArray[i].price}
                        </div>
                        <div class="size">
                            ${menClothingArray[i].size}
                        </div>
                    </div>
                    <div class="item-colors">
                        <div class="color-name">
                            Colors :
                        </div>
                        <div class="col1"></div>
                    </div>
                    <div class="item-rating">
                         Rating : ${menClothingArray[i].rating.rate}/5
                    </div>`
            let addToCartBtnDiv=document.createElement('div');
            addToCartBtnDiv.className='addToCartBtn1';
            let button=document.createElement('button');
            button.type='submit';
            button.id='addToCart1'
            button.textContent='Add to Cart'
            addToCartBtnDiv.appendChild(button);

            cardDiv.append(itemImageDiv,itemDetailDiv,addToCartBtnDiv);
             mensDiv.appendChild(cardDiv);
        }

        let addToCartButtons = document.querySelectorAll('.addToCartBtn1 button');
        addToCartButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    let users=JSON.parse(localStorage.getItem('users'));
                    users.forEach(element => {
                        if(element.email===currentUser.email){
                            if (element.cart === undefined) {
                                element.cart = [];
                            }
                            element.cart.push(menClothingArray[index]);
                        }
                    });
                    localStorage.setItem('users', JSON.stringify(users));
                    if (currentUser.cart === undefined) {
                    currentUser.cart = [];
                    }
                    currentUser.cart.push(menClothingArray[index]);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                });
         });
    }
    
}

function womenClothing(pArray){
    let womenClothingArray= pArray.filter(element=>{
        return element.category==="women's clothing";
    })
    console.log(womenClothingArray);
    if(womenClothingArray.length===0){
        womensDiv.style.display='none';
        womensDivName.style.display="none";
    }
    else{
        womensDiv.style.display='flex';
        womensDivName.style.display="block";
        for(let i=0;i<womenClothingArray.length;i++){
            let item=womenClothingArray[i];
            let cardDiv=document.createElement('div');
            cardDiv.className='card';
            let itemImageDiv=document.createElement('div');
            itemImageDiv.className='item-image';
            itemImageDiv.innerHTML=`<img src="${womenClothingArray[i].image}" alt="image1">`
            let itemDetailDiv=document.createElement('div');
            itemDetailDiv.className='item-details';
            itemDetailDiv.innerHTML=`
                    <div class="prizeAndSize">
                        <div class="prize">
                            $${womenClothingArray[i].price}
                        </div>
                        <div class="size">
                            ${womenClothingArray[i].size}
                        </div>
                    </div>
                    <div class="item-colors">
                        <div class="color-name">
                            Colors :
                        </div>
                        <div class="col1"></div>
                    </div>
                    <div class="item-rating">
                         Rating : ${womenClothingArray[i].rating.rate}/5
                    </div>`
            let addToCartBtnDiv=document.createElement('div');
            addToCartBtnDiv.className='addToCartBtn2';
            let button=document.createElement('button');
            button.type='submit';
            button.id='addToCart2'
            button.textContent='Add to Cart'
            addToCartBtnDiv.appendChild(button);

            cardDiv.append(itemImageDiv,itemDetailDiv,addToCartBtnDiv);
             womensDiv.appendChild(cardDiv);
        }

        let addToCartButtons = document.querySelectorAll('.addToCartBtn2 button');
        addToCartButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    let users=JSON.parse(localStorage.getItem('users'));
                    users.forEach(element => {
                        if(element.email===currentUser.email){
                            if (element.cart === undefined) {
                                element.cart = [];
                            }
                            element.cart.push(womenClothingArray[index]);
                        }
                    });
                    localStorage.setItem('users', JSON.stringify(users));
                    if (currentUser.cart === undefined) {
                    currentUser.cart = [];
                    }
                    currentUser.cart.push(womenClothingArray[index]);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                });
         });
    }
    
}

function jewellery(pArray){
    let jewelleryArray= pArray.filter(element=>{
        return element.category==="jewelery";
    })
    console.log(jewelleryArray);
    if(jewelleryArray.length===0){
        jewelleryDiv.style.display='none';
        jewelleryDivName.style.display='none';
    }else{
        jewelleryDiv.style.display='flex';
        jewelleryDivName.style.display='block';
        for(let i=0;i<jewelleryArray.length;i++){
            let cardDiv=document.createElement('div');
            cardDiv.className='card';
            let itemImageDiv=document.createElement('div');
            itemImageDiv.className='item-image';
            itemImageDiv.innerHTML=`<img src="${jewelleryArray[i].image}" alt="image1">`
            let itemDetailDiv=document.createElement('div');
            itemDetailDiv.className='item-details';
            itemDetailDiv.innerHTML=`
                    <div class="prizeAndSize">
                        <div class="prize">
                            $${jewelleryArray[i].price}
                        </div>
                        <div class="size">
                            ${jewelleryArray[i].size}
                        </div>
                    </div>
                    <div class="item-colors">
                        <div class="color-name">
                            Colors :
                        </div>
                        <div class="col1"></div>
                    </div>
                    <div class="item-rating">
                         Rating : ${jewelleryArray[i].rating.rate}/5
                    </div>`
            let addToCartBtnDiv=document.createElement('div');
            addToCartBtnDiv.className='addToCartBtn3';
            let button=document.createElement('button');
            button.type='submit';
            button.id='addToCart3'
            button.textContent='Add to Cart'
            addToCartBtnDiv.appendChild(button);

            cardDiv.append(itemImageDiv,itemDetailDiv,addToCartBtnDiv);
             jewelleryDiv.appendChild(cardDiv);
        }

        let addToCartButtons = document.querySelectorAll('.addToCartBtn3 button');
        addToCartButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    let users=JSON.parse(localStorage.getItem('users'));
                    users.forEach(element => {
                        if(element.email===currentUser.email){
                            if (element.cart === undefined) {
                                element.cart = [];
                            }
                            element.cart.push(jewelleryArray[index]);
                        }
                    });
                    localStorage.setItem('users', JSON.stringify(users));
                    if (currentUser.cart === undefined) {
                    currentUser.cart = [];
                    }
                    currentUser.cart.push(jewelleryArray[index]);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                });
         });
    }
    
}

function electronics(pArray){
    let electronicsArray= pArray.filter(element=>{
        return element.category==="electronics";
    })
    console.log(electronicsArray);
    if(electronicsArray.length===0){
        electronicsDiv.style.display='none';
    electronicsDivName.style.display='none';
    }else{
        electronicsDiv.style.display='flex';
        electronicsDivName.style.display='block';
        for(let i=0;i<electronicsArray.length;i++){
            let cardDiv=document.createElement('div');
            cardDiv.className='card';
            let itemImageDiv=document.createElement('div');
            itemImageDiv.className='item-image';
            itemImageDiv.innerHTML=`<img src="${electronicsArray[i].image}" alt="image1">`
            let itemDetailDiv=document.createElement('div');
            itemDetailDiv.className='item-details';
            itemDetailDiv.innerHTML=`
                    <div class="prizeAndSize">
                        <div class="prize">
                            $${electronicsArray[i].price}
                        </div>
                        <div class="size">
                            ${electronicsArray[i].size}
                        </div>
                    </div>
                    <div class="item-colors">
                        <div class="color-name">
                            Colors :
                        </div>
                        <div class="col1"></div>
                    </div>
                    <div class="item-rating">
                         Rating : ${electronicsArray[i].rating.rate}/5
                    </div>`
            let addToCartBtnDiv=document.createElement('div');
            addToCartBtnDiv.className='addToCartBtn4';
            let button=document.createElement('button');
            button.type='submit';
            button.id='addToCart4'
            button.textContent='Add to Cart'
            addToCartBtnDiv.appendChild(button);

            cardDiv.append(itemImageDiv,itemDetailDiv,addToCartBtnDiv);
             electronicsDiv.appendChild(cardDiv);
        }

        let addToCartButtons = document.querySelectorAll('.addToCartBtn4 button');
        addToCartButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    let users=JSON.parse(localStorage.getItem('users'));
                    users.forEach(element => {
                        if(element.email===currentUser.email){
                            if (element.cart === undefined) {
                                element.cart = [];
                            }
                            element.cart.push(electronicsArray[index]);
                        }
                    });
                    localStorage.setItem('users', JSON.stringify(users));
                    if (currentUser.cart === undefined) {
                    currentUser.cart = [];
                    }
                    currentUser.cart.push(electronicsArray[index]);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                });
         });
    }
    
}
//All products---------------

const allProductsBtn=document.getElementById('all');
const mensProductsBtn=document.getElementById('mens');
const womensProductsBtn=document.getElementById('womens');
const jeweleryProductsBtn=document.getElementById('jewellery');
const electronicsProductsBtn=document.getElementById('electronics');


allProductsBtn.addEventListener('click',()=>{
    mensDiv.innerHTML='';
    womensDiv.innerHTML='';
    electronicsDiv.innerHTML='';
    jewelleryDiv.innerHTML='';
    mensDiv.style.display='flex';
    mensDivName.style.display="block";
    electronicsDiv.style.display='flex';
    electronicsDivName.style.display='block';
    jewelleryDiv.style.display='flex';
    jewelleryDivName.style.display='block';
    womensDiv.style.display='flex';
    womensDivName.style.display="block";
    menClothing(productsArray);
    womenClothing(productsArray);
    jewellery(productsArray);
    electronics(productsArray);
    allProductsBtn.classList='active'
    mensProductsBtn.classList.remove('active');
    womensProductsBtn.classList.remove('active');
    jeweleryProductsBtn.classList.remove('active');
    electronicsProductsBtn.classList.remove('active');
});

mensProductsBtn.addEventListener('click',()=>{
    mensDiv.style.display='flex';
    mensDivName.style.display="block";
    electronicsDiv.style.display='none';
    electronicsDivName.style.display='none';
    jewelleryDiv.style.display='none';
    jewelleryDivName.style.display='none';
    womensDiv.style.display='none';
    womensDivName.style.display="none";
    menClothing(productsArray);
    mensProductsBtn.classList='active'
    allProductsBtn.classList.remove('active');
    womensProductsBtn.classList.remove('active');
    jeweleryProductsBtn.classList.remove('active');
    electronicsProductsBtn.classList.remove('active');
})

womensProductsBtn.addEventListener('click',()=>{
    mensDiv.style.display='none';
    mensDivName.style.display="none";
    electronicsDiv.style.display='none';
    electronicsDivName.style.display='none';
    jewelleryDiv.style.display='none';
    jewelleryDivName.style.display='none';
    womensDiv.style.display='flex';
    womensDivName.style.display="block";
    womenClothing(productsArray);
    womensProductsBtn.classList='active'
    allProductsBtn.classList.remove('active');
    mensProductsBtn.classList.remove('active');
    jeweleryProductsBtn.classList.remove('active');
    electronicsProductsBtn.classList.remove('active');
})

jeweleryProductsBtn.addEventListener('click',()=>{
    mensDiv.style.display='none';
    mensDivName.style.display="none";
    electronicsDiv.style.display='none';
    electronicsDivName.style.display='none';
    jewelleryDiv.style.display='flex';
    jewelleryDivName.style.display='block';
    womensDiv.style.display='none';
    womensDivName.style.display="none";
    jewellery(productsArray);
    jeweleryProductsBtn.classList='active'
    allProductsBtn.classList.remove('active');
    mensProductsBtn.classList.remove('active');
    womensProductsBtn.classList.remove('active');
    electronicsProductsBtn.classList.remove('active');
})

electronicsProductsBtn.addEventListener('click',()=>{
    mensDiv.style.display='none';
    mensDivName.style.display="none";
    electronicsDiv.style.display='flex';
    electronicsDivName.style.display='block';
    jewelleryDiv.style.display='none';
    jewelleryDivName.style.display='none';
    womensDiv.style.display='none';
    womensDivName.style.display="none";
    electronics(productsArray);
    electronicsProductsBtn.classList='active'
    allProductsBtn.classList.remove('active');
    mensProductsBtn.classList.remove('active');
    jeweleryProductsBtn.classList.remove('active');
    womensProductsBtn.classList.remove('active');

})

const serachBar= document.getElementById('search');
console.log(serachBar);
serachBar.addEventListener('keyup',()=>{
    mensDiv.innerHTML='';
    womensDiv.innerHTML='';
    electronicsDiv.innerHTML='';
    jewelleryDiv.innerHTML='';
    let value=serachBar.value.toLowerCase().trim();
    let array=productsArray.filter(element=>{
        return element.title.toLowerCase().includes(value);
    });
    console.log(array);
    menClothing(array);
    womenClothing(array);
    jewellery(array);
    electronics(array);
});





const applyFilterBtn=document.getElementById('applyFilter');

const colorSelectorArray=document.querySelectorAll('.color-filter');
const sizeSelectorArray=document.querySelectorAll('.size-filter');
const priceSelectorArray=document.querySelectorAll('.price-filter');
const slider=document.getElementById('slider');


console.log(colorSelectorArray);
applyFilterBtn.addEventListener('click',()=>{
    mensDiv.innerHTML='';
    womensDiv.innerHTML='';
    electronicsDiv.innerHTML='';
    jewelleryDiv.innerHTML='';

    let colorFilteredArray=Array.from(colorSelectorArray).filter(element=>{
        return element.checked;
    }).map(element=>{
        return element.value;
    });

    let sizeFilteredArray=Array.from(sizeSelectorArray).filter(element=>{
        return element.checked;
    }).map(element=>{
        return element.value;
    });

    let priceFilteredArray=Array.from(priceSelectorArray).filter(element=>{
        return element.checked;
    }).map(element=>{
        return element.value;
    });

    let sliderFilterValue=slider.value;


    let allFilterArray = productsArray.filter(element=>{
        const colors= colorFilteredArray.length===0 || colorFilteredArray.includes(element.colour);
        const size= sizeFilteredArray.length===0 || sizeFilteredArray.includes(element.size);
        const rating=element.rating.rate >= sliderFilterValue;
        const price=priceFilteredArray.length===0 || (element.price > 50);

        return colors&& size&& rating&& price;
    })

    console.log(allFilterArray);
    menClothing(allFilterArray);
    womenClothing(allFilterArray);
    jewellery(allFilterArray);
    electronics(allFilterArray);
});

