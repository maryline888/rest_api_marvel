import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Info Personnages')
    }


    async getHtml() {

        let id = this.params.id;
        // on recoit le id avec un / a la fin et en str, ici on enleve le / 
        let cleanId = id.replace('/', '');
        // et on change en int
        cleanId = Number(cleanId);

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }

        const jsonData = await getData('/static/js/views/characters.json');

        const data = jsonData.data.results;
        // console.log('data', data);
        let personnage = data.find(element => element.id === cleanId)

        let nom = personnage.name;
        let description = personnage.description;
        let comics = personnage.comics.items;
        let series = personnage.series.items;

        let listComics = `<div><ul>`
        for (let i in comics) {
            listComics += `<li>${comics[i]['name']}</li>`;
        }
        listComics += `</ul></div>`

        let listComicsMovies = `<div><ul>`
        for (let i in series) {
            listComicsMovies += `<li>${series[i]['name']}</li>`;
        }
        listComicsMovies += `</ul></div>`


        return `<section class="flexBox">
                    <div>
                        <h2>${nom}</h2>
                        <p>${description}</p>
                    </div>
                    <div class="flex">
                        <h3>Collection bande dessinées</h3>
                        ${listComics}
                        <h3>Collection films et séries</h3>
                        ${listComicsMovies}
                    </div>
                </section>`;
    }
}