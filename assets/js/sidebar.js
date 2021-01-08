function toogleMenu(){
    let navigation = document.querySelector('.navigation');
    let content = document.querySelector('.content');
    let toggle = document.querySelector('.toggle');
    let toggleMobile = document.querySelector('.toggle-mobile');
    let toggleMobileSidebar = document.querySelector('.toggle-mobile-sidebar');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    toggleMobile.classList.toggle('active');
    toggleMobileSidebar.classList.toggle('active');
    content.classList.toggle('active');
}