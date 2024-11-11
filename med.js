let searchFrom = document.querySelector('.search-from');

document.querySelector('#search-btn').onclik = () =>
{
    searchFrom.classList.toggle('active')
}
let shoppingCart = document.querySelector('.shopping-Cart');

document.querySelector('#cart-btn').onclik = () =>
{
    shoppingCart.classList.toggle('active')
}
let  uploadForm= document.querySelector('.upload-Form');
const defaultBtn = document.querySelector('.default-btn');
const customtBtn = document.querySelector('.custom-btn');
const fileName = document.querySelector('.file-name');

let RegExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\#\(\)\.\%\+\~\_]

document.querySelector('#search-btn').onclik = () =>
{
    uploadForm.classList.toggle('active')
}