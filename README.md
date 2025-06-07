# inventaire-i18n

This repository bundles together translations (a.k.a. [i18n](https://en.wikipedia.org/wiki/I18n) strings) from the [Inventaire Weblate project](https://weblate.framasoft.org/engage/inventaire/), as well as some [Wikidata](https://wikidata.org) properties, into JSON files that are then consumed by the [server](https://codeberg.org/inventaire/inventaire) and [client](https://codeberg.org/inventaire/inventaire-client).

## Development
### Install
```sh
git clone https://codeberg.org/inventaire/inventaire-i18n
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
git clone https://codeberg.org/inventaire/inventaire-i18n
cd inventaire-i18n
npm install --production
npm run build
```
### Pull latest translations
```sh
git pull origin main
npm run build
```

## Translated strings format
Inventaire i18n strings are tailored to work with the [Polyglot](http://airbnb.io/polyglot.js/) library

### Interpolation
Some strings will contain variables between brackets: `%{some_variable}`. Those variable names should not be translated:
```json
// in fr.json
{
  "greetings": "Salut %{name} !"
}
```

### Pluralization
A value can have different cases depending on a number, that will be passed in place of `%{smart_count}`. The different cases must be separated by `||||`. The number of cases will then depend on the language:

In languages such as English, there are only two plural forms: singular and not-singular.
```json
// in en.json
{
  "books_count": "%{smart_count} book |||| %{smart_count} books"
}
```
In other languages such as Czech, there might be more cases:
```json
// in cz.json
{
  "books_count": "%{smart_count} kniha |||| %{smart_count} knihy |||| %{smart_count} knih"
}
```

See [Polyglot documentation on pluralization](https://airbnb.io/polyglot.js/#pluralization)
