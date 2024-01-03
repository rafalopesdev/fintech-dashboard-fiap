const insertItems = document.querySelectorAll('.insert-items');
const containerModal = document.querySelector('.container-modal');
const close = document.querySelector('.close');

const containerModalAccount = document.querySelector(
  '.container-modal-account',
);
const btnAccount = document.querySelector('.btn-account');
const closeAccount = document.querySelector('.close-account');

btnAccount.addEventListener('click', function (e) {
  e.preventDefault();
  containerModalAccount.style.display = 'flex';
});

closeAccount.addEventListener('click', function () {
  containerModalAccount.style.display = 'none';
});

insertItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    containerModal.style.display = 'flex';
  });
});

close.addEventListener('click', function () {
  containerModal.style.display = 'none';
});
