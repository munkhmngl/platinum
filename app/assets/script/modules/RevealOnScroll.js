import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
    constructor(els, revealPoint){
        this.items = els;
        this.revealPoint = revealPoint;
        this.browserHeight = window.innerHeight;
        this.hideItems();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    };

    events(){
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', debounce (() => {
            console.log("Browser-ийг resize хийж байна!!!");
            this.browserHeight = window.innerHeight;
        }, 300));
    };

    calcCaller(){
        this.items.forEach(el => {
            if(el.isRevealed === false){
                this.calculateIfScrolledTo(el);
            }
        });
    };

    calculateIfScrolledTo(el){
        if(window.scrollY + this.browserHeight > el.offsetTop){
            let scrollY = (el.getBoundingClientRect().y / this.browserHeight) * 100;
            if(scrollY < this.revealPoint){
                el.classList.add('reveal-item--is-visible');
                el.isRevealed = true;
                if(el.isLastItem){
                window.removeEventListener('scroll', this.scrollThrottle);
                }
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