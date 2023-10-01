import throttle from 'lodash/throttle';
export default class RevealOnScroll {
    constructor(){
        this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.hideInitially();
        this.scrollThroltte = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events(){
        window.addEventListener('scroll', this.scrollThroltte)
    }

    calcCaller(){
        this.itemsToReveal.forEach( e => {
            if(e.isRevealed === false) {
                this.calculateIfScrollTo(e);
            }
        });
    }

    calculateIfScrollTo(e){
        let scrollPercent = (e.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollPercent < 75){
            e.classList.add('reveal-item--is-visible');
            e.isRevealed = true;
            if(e.isLastItem){
                window.removeEventListener('scroll', this.scrollThroltte);
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