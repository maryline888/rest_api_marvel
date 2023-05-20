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
        
        const jsonData = await getData('/static/js/views/marvel.json');
        
        const data =  jsonData.data.results;
        
        let htmlElements = [];
    
        data.forEach(element => {
            let name = element.name;
            let description = element.description;
            let path = element.thumbnail.path;
            let ext = element.thumbnail.extension
            let image = path + "." + ext;
            
            htmlElements.push(`<div class="card"><h4>${name}</h4><img src="${image}"/><p>${description}</p></div>`);
        });
        htmlElements =  htmlElements.join('');
        return `<section class="container"> ${htmlElements}</section>`;
    }
    
        
    
}