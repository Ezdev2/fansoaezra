# Déploiement d'un site sur Github pages

Idéal pour déployé un site qui utilise des frameworks !

## 1. Ajouter ces lignes dans "package.json":

```
"homepage": "https://{username}.github.io/{repository}/",
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

## 2. Configuration :
Créer un dossier et fichier comme suit ``.github/workflos/deploy.yml`` et coller ces lignes de code dans le fichier ``deploy.yml``

```
name: Deploy to GitHub Pages

on:
push:
branches:
- main # change this to the branch you want to deploy from

jobs:
build-and-deploy:
runs-on: ubuntu-latest
steps:
- name: Checkout repository
uses: actions/checkout@v2
- name: Setup Node.js environment
uses: actions/setup-node@v2
with:
node-version: "14.x"
- name: Install dependencies
run: npm install
- name: Build and deploy to GitHub Pages
run: npm run deploy
env:
CI: true
```

## 3. Commit / push
Monter (faire commit et push) les modifications vers votre repository, cette dernière modification déclenche le flux de travail de déploiement,

## 4. Visiter votre site
Maintenant, allez dans le repository github, mettez la branche dans la branche indiqué dans le fichier ``deploy.yml``, et puis cliquez sur ``Setting``, ``Code and automation`` et ``Pages``, l'URL de votre site web est maintenant disponible,

## 5. Votre site est deployé"
Votre site est deployé sur ``https://{username}.github.io/{repository}``, mais vous pouvez configurer votre propre nom de domaine sur la partie ``Custom domain name``, pour en savoir plus [Visiter le documents de github sur le nom de domaine personnalisé](https://docs.github.com/fr/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

***En cas de blocage (Affichage de ReadMe ou page 404)***
1. Vérifier bien la branche à déployer dans ``deploy.yml``
2. Vérifier bien vos Routes
Par exemple, si le nom de votre repository est ``test-gh``, l'URL de votre application sera ``https://{username}.github.io/test-gh/``

---
## Remarque

***1. Pour déployer un site HTML/CSS ou Bootstrap, il suffit de mettre les fichiers dans un dossier ``docs`` et mettez le fichier index.html dans la racine de ce dossier.***

***2. Dans mon exemple j'ai créé une application React Js, donc vous devriez se documenter un peu sur les exigences de votre technologie par rapport au déploiement sur Github Pages.
Par exemple, dans la technologie Astro, au lieu d'ajouter "homepage", "predeploy" et "deploy" dans package.json vous ajouter : site:{URL},
base: "/{repository}" dans astro.config.mjs***
