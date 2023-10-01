import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
export default class RevealOnScroll {
    constructor(els, revealPoint){
        this.revealPoint = revealPoint;
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThroltte = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events(){
        window.addEventListener('scroll', this.scrollThroltte);
        window.addEventListener('resize', debounce(()=>{
            console.log('browser resize хийж байна');
            this.browserHeight = window.innerHeight;
        }, 300));
    }

    calcCaller(){
        this.itemsToReveal.forEach( e => {
            if(e.isRevealed === false) {
                this.calculateIfScrollTo(e);
            }
        });
    }

    calculateIfScrollTo(e){
        if(window.scrollY + this.browserHeight > e.offsetTop){
            let scrollPercent = (e.getBoundingClientRect().y / this.browserHeight) * 100;
            if (scrollPercent < this.revealPoint){
                e.classList.add('reveal-item--is-visible');
                e.isRevealed = true;
                if(e.isLastItem){
                    window.removeEventListener('scroll', this.scrollThroltte);
                }
        }
        }
    }

    hideInitially(){
        this.itemsToReveal.forEach(e => {
            e.classList.add('reveal-item');
            e.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}