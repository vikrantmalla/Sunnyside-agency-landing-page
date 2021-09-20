  const mobileNav = document.querySelector('.mobile-nav');

  mobileNav.addEventListener('click', mobileMenuToogle);

  function mobileMenuToogle() {
      document.querySelector('.main-menu').classList.toggle('active');
  }