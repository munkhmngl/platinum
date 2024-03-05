import '../styles/style.css';
import Menu from './modules/mobileMenu';
import Scroll from './modules/RevealOnScroll';

if(module.hot){
    module.hot.accept();
};

let mobi = new Menu();
let content = new Scroll();