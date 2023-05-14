const mobile_navbar = document.querySelector('.mobile-navbar'),
      burger = document.getElementById('burger'),
      close_btn = document.getElementById('close-btn'),
      mobile_nav_list = document.querySelectorAll('.mobile-navbar ul li');

burger.addEventListener('click', () => {
    mobile_navbar.classList.toggle('mobile-nav-toggle');
})

close_btn.addEventListener('click', () => {
    mobile_navbar.classList.toggle('mobile-nav-toggle');
})

mobile_nav_list.forEach(list => {
    list.addEventListener('click', () => {
        mobile_navbar.classList.toggle('mobile-nav-toggle');
    })    
})
