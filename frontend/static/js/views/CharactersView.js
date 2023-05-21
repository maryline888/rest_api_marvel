import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Les personnages')
    }

    async getHtml() {

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }
        
        const jsonData = await getData('/static/js/views/characters.json');
        //const qui va chercher les personnages, img et nom seulement 
        const data =  jsonData.data.results;

       

        let htmlElements = [];
    
        data.forEach(element => {
            let id = element.id
            // console.log(id);
          
            // console.log(charData[collectionURI])

            let name = element.name;
            let path = element.thumbnail.path;
            let ext = element.thumbnail.extension
            let image = `${path}.${ext}`;
           
            htmlElements.push(`
                <div class="card">
                <h4> <a href="/character/${id}/" data-link>${name}</a></h4>
                    <img src="${image}"/>
                </div>`);
        });

        htmlElements =  htmlElements.join('');

        return `<section class="container">${htmlElements}</section>`;
    }
    
        
    
}