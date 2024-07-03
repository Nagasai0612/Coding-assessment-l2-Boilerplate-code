const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');
const quantity = document.getElementById('quantity');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    document.querySelector('.thumbnail.selected').classList.remove('selected');
    thumbnail.classList.add('selected');
    mainImage.src = thumbnail.src;
  });
});

colors.forEach(color => {
  color.addEventListener('click', () => {
    document.querySelector('.color.selected').classList.remove('selected');
    color.classList.add('selected');
  });
});

sizes.forEach(size => {
  size.addEventListener('click', () => {
    document.querySelector('.size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});

decreaseQty.addEventListener('click', () => {
  let qty = parseInt(quantity.textContent);
  if (qty > 1) {
    quantity.textContent = qty - 1;
  }
});

increaseQty.addEventListener('click', () => {
  let qty = parseInt(quantity.textContent);
  quantity.textContent = qty + 1;
});

$(function () {
  $('#add-to-cart').click(function () {
    $('#para').toggleClass("show");
  });
});

