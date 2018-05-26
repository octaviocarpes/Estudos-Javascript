function showLoader() {
  document.querySelector('.pre-loader').classList.remove('hidden');
}

function showQuickView() {
  document.querySelector('.quickview').classList.add('is-active');
}

function hideQuickView() {
  document.querySelector('.quickview').classList.remove('is-active');
}
