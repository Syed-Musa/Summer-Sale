// kitchen Cards calculate
let total = 0;

function kitchenCardOne(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);
    

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[4].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);

}

function kitchenCardTwo(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);

}

function kitchenCardThree(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}

// Sport card calculate
function sportCardOne(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[4].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}

function sportCardTwo(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}

function sportCardThree(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}

// furniture Cards calculate
function furnitureCardOne(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[4].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}

function furnitureCardTwo(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}

function furnitureCardThree(target){
    let selectCardContainer = document.getElementById('selected-items');
    let parantNode = target.childNodes[3];
    let productName = parantNode.childNodes[3].innerText;
    let li = document.createElement('li');
    li.innerText = productName;
    selectCardContainer.appendChild(li);

    const price = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total.toFixed(2);


    const totaldiscount = parantNode.childNodes[5].innerText.split(" ");
    total = parseInt(total) - parseInt(totaldiscount + 0.20);
    document.getElementById('total-discount').innerText = total.toFixed(2);
}


document.getElementById('btn-apply').addEventListener('click', function(){
    if(inputValue >= 200){
        applyButtonClick.removeAttribute('disabled');
    }else{
        applyButtonClick.setAttribute('disabled', true);
    }
})

