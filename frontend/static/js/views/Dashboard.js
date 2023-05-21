import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('ACCEUIL')
    }

    async getHtml() {

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }
      

        return `
        <section class="section-acceuil container">
            <div class="card">
                <a href="/characters" data-link><h1>Personnages</h1></a>
                <img src="./static/img/heros-avengers.jpg" alt="personnages Marvels">
            </div>
            <div class="card">
                <a href="/comics" data-link><h1>Bandes-dessinées</h1></a>              
                <img src="./static/img/comics.jpg" alt="personnages Marvels">
            </div>
        </section>
        `;
    }
    
        
    
}