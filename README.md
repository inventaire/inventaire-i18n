# inventaire-i18n

This repository bundles together translations (a.k.a. [i18n](https://en.wikipedia.org/wiki/I18n) strings) from the [Inventaire Weblate project](https://weblate.framasoft.org/engage/inventaire/), as well as some [Wikidata](https://wikidata.org) properties, into JSON files that are then consumed by the [server](https://github.com/inventaire/inventaire) and [client](https://github.com/inventaire/inventaire-client).

## Development
### Install
```sh
git clone https://github.com/inventaire/inventaire-i18n
cd inventaire-i18n
npm install
# This will fetch the latest commits from Weblate, as well as strings from Wikidata.
# Those updated Wikidata strings can then be commited.
npm run fetch-translations
npm run build
```

## Production
### Install
```sh
git clone https://github.com/inventaire/inventaire-i18n
cd inventaire-i18n
npm install --production
npm run build
```
### Pull latest translations
```sh
git pull origin master
npm run build
```
