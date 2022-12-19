window.addEventListener('DOMContentLoaded', ()=> {
    
    const menuBtn = document.querySelector('.menu-bars'),
          navigation = document.querySelector('.navbar-nav'),
          navItems = document.querySelectorAll('.navbar-nav a');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navigation.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
});