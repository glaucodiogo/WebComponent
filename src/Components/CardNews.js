class CardNews extends HTMLElement{
    constructor(){
        super();//chama o construtor pai 


        const shadow = this.attachShadow({
            mode:"open"
        });

        shadow.innerHTML = "<h1>Hello world</h1>";
    }
}

customElements.define('card-news',CardNews)