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
            <div class="card-acceuil">
            <h1><a href="/characters" data-link >Personnages</a></h1>
                <img src="./static/img/heros-avengers.jpg" alt="personnages Marvels">
            </div>
            <div class="card-acceuil">
            <a href="/home" data-link ><h1>Bandes-dessinées</h1></a>              
                <img src="./static/img/comics.jpg" alt="personnages Marvels">
            </div>
        </section>
        `;
    }
    

}