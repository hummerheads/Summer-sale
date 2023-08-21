window.onload = function(){
    const couponButton = document.getElementById('coupon-button');
    const purchaseButton = document.getElementById('purchase-button');
    var totalPrice = 0;
    var discountedPrice = 0;
    var finalPrice = 0;
    document.getElementById('gohome-btn').addEventListener('click', function(){
        location.reload(true);
    })

    document.getElementById('product1').addEventListener('click', function(){
        totalPrice = totalPrice + 39;
        if(totalPrice >= 200){
            couponButton.removeAttribute('disabled');
        }
        document.getElementById('coupon-button').addEventListener('click', function(){
            var discount = 20;
            discountedPrice = (totalPrice * discount) / 100;
            document.getElementById('price-discount').innerText = discountedPrice.toFixed(2);  
            finalPrice = totalPrice - discountedPrice;    
            document.getElementById('price-final').innerText = finalPrice.toFixed(2);  
        })
        const prod1Element = document.createElement("li");
        const prod1InnerText = document.createTextNode('K. Accessories');
        prod1Element.appendChild(prod1InnerText);
        document.getElementById("ordered-list").appendChild(prod1Element);
        document.getElementById('price-total').innerText = totalPrice.toFixed(2);
        purchaseButton.removeAttribute('disabled');
    })

    document.getElementById('product2').addEventListener('click', function(){
        totalPrice = totalPrice + 25;
        if(totalPrice >= 200){
            couponButton.removeAttribute('disabled');
        }
        document.getElementById('coupon-button').addEventListener('click', function(){
            var discount = 20;
            discountedPrice = (totalPrice * discount) / 100;
            document.getElementById('price-discount').innerText = discountedPrice.toFixed(2);  
            finalPrice = totalPrice - discountedPrice;    
            document.getElementById('price-final').innerText = finalPrice.toFixed(2);  
        })
        const prod1Element = document.createElement("li");
        const prod1InnerText = document.createTextNode('K. Accessories');
        prod1Element.appendChild(prod1InnerText);
        document.getElementById("ordered-list").appendChild(prod1Element);
        document.getElementById('price-total').innerText = totalPrice.toFixed(2);
        purchaseButton.removeAttribute('disabled');
    })

    document.getElementById('product3').addEventListener('click', function(){
        totalPrice = totalPrice + 49;
        if(totalPrice >= 200){
            couponButton.removeAttribute('disabled');
        }
        document.getElementById('coupon-button').addEventListener('click', function(){
            var discount = 20;
            discountedPrice = (totalPrice * discount) / 100;
            document.getElementById('price-discount').innerText = discountedPrice.toFixed(2);  
            finalPrice = totalPrice - discountedPrice;    
            document.getElementById('price-final').innerText = finalPrice.toFixed(2);  
        })
        const prod1Element = document.createElement("li");
        const prod1InnerText = document.createTextNode('Home Cooker');
        prod1Element.appendChild(prod1InnerText);
        document.getElementById("ordered-list").appendChild(prod1Element);
        document.getElementById('price-total').innerText = totalPrice.toFixed(2);
        purchaseButton.removeAttribute('disabled');
    })

    document.getElementById('product4').addEventListener('click', function(){
        totalPrice = totalPrice + 49;
        if(totalPrice >= 200){
            couponButton.removeAttribute('disabled');
        }
        document.getElementById('coupon-button').addEventListener('click', function(){
            var discount = 20;
            discountedPrice = (totalPrice * discount) / 100;
            document.getElementById('price-discount').innerText = discountedPrice.toFixed(2);
            finalPrice = totalPrice - discountedPrice;    
            document.getElementById('price-final').innerText = finalPrice.toFixed(2);
        })
        const prod1Element = document.createElement("li");
        const prod1InnerText = document.createTextNode('Sports Back Cap');
        prod1Element.appendChild(prod1InnerText);
        document.getElementById("ordered-list").appendChild(prod1Element);
        document.getElementById('price-total').innerText = totalPrice.toFixed(2);
        purchaseButton.removeAttribute('disabled');     
    })

    document.getElementById('product5').addEventListener('click', function(){
        totalPrice = totalPrice + 69;
        if(totalPrice >= 200){
            couponButton.removeAttribute('disabled');
        }
        document.getElementById('coupon-button').addEventListener('click', function(){
            var discount = 20;
            discountedPrice = (totalPrice * discount) / 100;
            document.getElementById('price-discount').innerText = discountedPrice.toFixed(2);    
            finalPrice = totalPrice - discountedPrice;    
            document.getElementById('price-final').innerText = finalPrice.toFixed(2);
        })
        const prod1Element = document.createElement("li");
        const prod1InnerText = document.createTextNode('Full Jersey Set');
        prod1Element.appendChild(prod1InnerText);
        document.getElementById("ordered-list").appendChild(prod1Element);
        document.getElementById('price-total').innerText = totalPrice.toFixed(2);
        purchaseButton.removeAttribute('disabled');
    })

    document.getElementById('product6').addEventListener('click', function(){
        totalPrice = totalPrice + 159;
        if(totalPrice >= 200){
            couponButton.removeAttribute('disabled');
        }
        document.getElementById('coupon-button').addEventListener('click', function(){
            var discount = 20;
            discountedPrice = (totalPrice * discount) / 100;
            document.getElementById('price-discount').innerText = discountedPrice.toFixed(2);  
            finalPrice = totalPrice - discountedPrice;    
            document.getElementById('price-final').innerText = finalPrice.toFixed(2);  
        })
        const prod6Element = document.createElement("li");
        const prod6InnerText = document.createTextNode('Sports cates');
        prod6Element.appendChild(prod6InnerText);
        document.getElementById("ordered-list").appendChild(prod6Element);
        document.getElementById('price-total').innerText = totalPrice.toFixed(2);
        purchaseButton.removeAttribute('disabled');
    })
    
    






















         
    




















}