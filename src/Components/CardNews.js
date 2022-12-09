class CardNews extends HTMLElement{
    constructor(){
        super();//chama o construtor pai 


        const shadow = this.attachShadow({mode:"open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card_left");

        const autor = document.createElement("span");
        autor.textContent= "By " + (this.getAttribute("autor") || "Anonimo");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = " "+this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = " "+this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card_right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);

            //add childs to componenRoot father
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    style(){

    }
}

customElements.define('card-news',CardNews)