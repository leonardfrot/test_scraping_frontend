# test_scraping_frontend
## Allumer le serveur
`npm install`<br/>
`npm start`<br/>
<br/>
Dans le cas ou il y a un problème avec Eslint<br/>
Supprimer `"type": "module"` du package.json d'Eslint dans les modules.

## Fonctions
Il permet de tester le scraping sur un site moderne <br/>
Il permet également de tester l'exécution d'un script, en allant chercher les données derrière les boutons.

## Script
`document.getElementById('toggle').click();var button = document.getElementById('toggle2');var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('dblclick', true, true);button.dispatchEvent(clickEvent);`
