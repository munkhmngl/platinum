import '../styles/style.css';
import MobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 50);

if(module.hot){
    module.hot.accept();
}