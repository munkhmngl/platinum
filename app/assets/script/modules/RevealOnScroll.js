import throttle from "lodash/throttle";

class RevealOnScroll {
    constructor(){
        this.items = document.querySelectorAll('.feature-item');
        this.hideItems();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    };

    events(){
        window.addEventListener('scroll', this.scrollThrottle);
    };

    calcCaller(){
        this.items.forEach(el => {
            if(el.isRevealed === false){
                this.calculateIfScrolledTo(el);
            }
        });
    };

    calculateIfScrolledTo(el){
        let scrollY = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if(scrollY < 75 ){
            el.classList.add('reveal-item--is-visible');
            el.isRevealed = true;
            if(el.isLastItem){
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }
    }

    hideItems(){
        this.items.forEach(el => {
            el.classList.add('reveal-item')
            el.isRevealed = false;
        });
        this.items[this.items.length - 1].isLastItem = true;
    };
};

export default RevealOnScroll;