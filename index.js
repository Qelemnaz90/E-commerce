const add_btn = document.querySelectorAll('.add')
const del_btn = document.querySelectorAll('.del')
const sum_price = document.querySelector('.price')


let obj = {}
let sum = 0




add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++
        const card_body = b.closest('.card-body');
        const name = card_body.querySelector('.card-text').textContent;

        if(!obj[name]){
            obj[name] = {
                quantity: 1,
                price: parseFloat(b.value)
            }
        }else{
            obj[name].quantity++
        }
        sum_price.innerText = sum

        totalPrice(obj[name].quantity, obj[name].price)
        console.log(obj);
        
        
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        sum--
        sum = sum < 0 ? 0 : sum
        const card_body = b.closest('.card-body')
        const name = card_body.querySelector('.card-text').textContent
        removeItem(name)
        sum_price.innerText = sum
        
    })
})




function removeItem(name){
    if(obj[name]){
        if(obj[name].quantity === 1){
            delete obj[name]
        }else{
            obj[name].quantity--
        }
    }

}



let basket = document.querySelector('.basket')
let h2 = document.querySelector('.m-5')
let cards = document.querySelector('.cards')

basket.addEventListener('click', function(){
    h2.style.display = "block"
    let cards2 = document.querySelector('.cards2')
    cards2.classList.add("d-none")
    next.style.display = 'none'
    cards.classList.add("d-none")


    addToBasket();
})



function addToBasket() {
    h2.innerHTML = ""
    let h3 = document.createElement("h3")
    h3.innerText = "Your Order:"
    h2.appendChild(h3)
    let total = 0
        for (let itemName in obj) {
        const item = obj[itemName];
        const itemInfo = document.createElement('div')


        itemInfo.innerText=
        `${itemName}  
        Quantity: ${item.quantity}  
        Price: $${item.price}`;


        itemInfo.style.color= 'violet'
        itemInfo.style.marginBottom = '20px'
        h2.appendChild(itemInfo)
        
        total += item.quantity * item.price
        

    } const totalElement = document.createElement('div');
    totalElement.innerText = `Total Price: $${total.toFixed(2)}`;
    totalElement.style.fontWeight = 'bold'; 
    h2.appendChild(totalElement);
    console.log("Total Price:", total.toFixed(2))
}




let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
let head = document.querySelector('.head')
let cards2 = document.querySelector('.cards2');
// let cards = document.querySelector('.cards')

next.addEventListener('click', function(){
    cards.classList.add('d-none')
    cards2.classList.remove('d-none')
    previous.style.display = 'block'
    next.style.display = 'none'
    
    

})

previous.addEventListener('click', function(){
    cards2.classList.add('d-none')    
    previous.style.display = 'none'
    head.style.display = 'block'
    cards.classList.remove('d-none')
    next.style.display = 'block'

})



searchInput = document.querySelector('.form-control');
containers = document.querySelectorAll('.container1 .card');

searchInput.addEventListener('keyup', function() {
    next.style.display = 'none'
    previous.style.display = 'none'
    const searchText = this.value.trim().toLowerCase();
    containers.forEach(card => {
        const cardText = card.textContent.trim().toLowerCase();
        if (cardText.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


