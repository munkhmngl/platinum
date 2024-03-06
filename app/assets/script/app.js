import '../styles/style.css';
import Menu from './modules/mobileMenu';
import Scroll from './modules/RevealOnScroll';
import Sticky from './modules/stickyHeader';

if(module.hot){
    module.hot.accept();
};

let mobi = new Menu();
new Scroll(document.querySelectorAll('.feature-item'), 75);
new Scroll(document.querySelectorAll('.testimonial'), 50);
let header = new Sticky();