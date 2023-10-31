# Déploiement d'un site sur GitHub Pages

Idéal pour déployer un site qui utilise des frameworks !

[Pour déployer un site qui n'utilise que HTML/CSS et/ou Bootstrap](https://github.com/Ezdev2/fansoaezra/blob/main/README.md#remarque)

---

## 1. Ajoutez ces lignes dans "package.json":

```
"homepage": "https://{username}.github.io/{repository}/",
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

## 2. Configuration :
Créez un dossier et un fichier comme suit :  ``.github/workflos/deploy.yml`` et collez ces lignes de code dans le fichier ``deploy.yml``

```
name: Deploy to GitHub Pages

on:
push:
branches:
- main # changez ceci en la branche que vous souhaitez déployer

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
Envoyez (commit et push) les modifications vers votre dépôt. Cette dernière modification déclenchera le flux de travail de déploiement.

## 4. Visitez votre site
Maintenant, allez dans le dépôt GitHub, sélectionnez la branche indiquée dans le fichier ``deploy.yml``, et puis cliquez sur ``Setting``, ``Code and automation`` et ``Pages``. L'URL de votre site web est maintenant disponible.

## 5. Votre site est déployé
Votre site est déployé sur ``https://{username}.github.io/{repository}``, mais vous pouvez configurer votre propre nom de domaine dans la section ``Custom domain name``. Pour en savoir plus, [consultez la documentation de GitHub sur les domaines personnalisés](https://docs.github.com/fr/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

***En cas de blocage (Affichage de ReadMe ou page 404)***
1.Vérifiez bien la branche à déployer dans ``deploy.yml``
2. Vérifiez vos routes.
Par exemple, si le nom de votre dépôt est ``test-gh``, l'URL de votre application sera  ``https://{username}.github.io/test-gh/``

---
## Remarque

1. Pour déployer un site **HTML/CSS ou Bootstrap**, vous n'avez pas besoin de suivre ces étapes. Il vous suffit simplement de mettre les fichiers dans un dossier ``docs`` et de placer le fichier ``index.html`` à la racine de ce dossier. Vous pourrez ensuite visiter votre site déployé comme indiqué à l'étape 4.**

2. Dans mon exemple, j'ai créé une application React Js, donc vous devriez vous renseigner sur les exigences de votre technologie en ce qui concerne le déploiement sur GitHub Pages. Par exemple, dans la technologie Astro, au lieu d'ajouter ``homepage``, ``predeploy`` et ``deploy`` dans package.json, vous devez ajouter : ``site: {URL}``, ``base: "/{repository}"`` dans ``astro.config.mjs.``
