## TP1 - SPA Monopage avec REST

## Maryline Carrier #2296092

#### GitHub: [https://github.com/maryline888/rest_api_marvel](https://github.com/maryline888/rest_api_marvel)

#### Infos sur l'API choisi

- J'ai choisi une API de Marvel. La réponse ne retourne que les 20 premiers personnages, ce qui est suffisant pour le travail.
- Lors de la première connexion, nous allons chercher le fichier .json et l'enregistrer dans les vues.
- La page d'accueil nous offre la possibilité de voir les personnages ou les bandes-dessinées. Pour cet exercice, seuls les personnages sont accessibles.
- La page des personnages présente l'image et le nom de chaque personnage.
- En cliquant sur le nom, une page d'informations supplémentaires s'affiche.

- L'API est disponible sur [https://developer.marvel.com/](https://developer.marvel.com/)
- La documentation est disponible ici: [Documentation](https://developer.marvel.com/documentation/getting_started)

#### Lignes de commandes pour l'installation des bibliothèques

- npm init
- npm i express dotenv request
- npm start
  (Pour démarrer le serveur, j'ai ajouté "start": "node server.js" dans le fichier package.json)
