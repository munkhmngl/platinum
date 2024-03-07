import '../styles/style.css';
import Menu from './modules/mobileMenu';
import Scroll from './modules/RevealOnScroll';
import Sticky from './modules/stickyHeader';

new Menu();
new Scroll(document.querySelectorAll('.feature-item'), 75);
new Scroll(document.querySelectorAll('.testimonial'), 50);
new Sticky();
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e =>{
        e.preventDefault();
        if(typeof modal === 'undefined'){
            import(/* webpackChunkName: "modal" */ './modules/modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openModal(), 20);
            }).catch((err) => console.log(err));
        } else {
            modal.openModal();
        }
    });
});

if(module.hot){
    module.hot.accept();
};