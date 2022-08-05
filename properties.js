var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// To Get Property Name
//when you know the specific property name, use dot notation to get the property value
var mouseCount = shoppingCart.mouse;

// Alternative System Of Previous One
//when you know the specific property name, use this below system to get the property value
var mouseCount2 = shoppingCart['mouse'];

//Another Alternative System Of Previous One 
//when you know the specific property name, use this below system to get the property value
// For Dynamic Use
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyValue);



// To Know All Property Name
var properties = Object.keys(shoppingCart);
console.log(properties);

// To Know All Property Value
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

// console.log(shoppingCart);



// Set Property Values
// First System
shoppingCart.mouse = 15;
console.log(shoppingCart);

// Second System
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

// Third System
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
