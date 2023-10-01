import '../styles/style.css';
import MobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();

if(module.hot){
    module.hot.accept();
}