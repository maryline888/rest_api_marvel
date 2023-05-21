import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Info')
    }
    
    
    async getHtml(){
        
        let id = this.params.id;
        // on recoit le id avec un / a la fin et en str, ici on enleve le / 
        let cleanId = id.replace('/','');
        // et on change en int
        cleanId = Number(cleanId);

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const jsonData = await getData('/static/js/views/characters.json');

        const data =  jsonData.data.results;
        // console.log('data', data);
        let personnage = data.find(element => element.id === cleanId)
        console.log('personnage', personnage);
        // let description = element.description;
       let nom = personnage.name;
       let description = personnage.description;
       let comics = personnage.comics.items;
       let series = personnage.series.items;
        // console.log(personnage.comics);
        let listComics = "<ul>"
        for (let i in comics) {
            listComics += `<li>${comics[i]['name']}</li>`;
        }
        listComics += "</ul>"

        let listComicsMovies = "<ul>"
        for (let i in series) {
            listComicsMovies += `<li>${series[i]['name']}</li>`;
        }
        listComicsMovies += "</ul>"


        return `<section class="flexBox">
                    <h2>${nom}</h2>
                    <p>${description}</p>
                    <h3>Collection bande dessinées</h3>
                    ${listComics}
                    <h3>Collection bande films et séries</h3>
                    ${listComicsMovies}
                </section>`;
    }
}