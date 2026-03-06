# Langnames

A javascript (typescript) library of the localized language names referenced in our
infrastructure. We use three-letter ISO-639-3 codes.

The library exports a single function `langname`, used to find the language name of
a language in a given language.

```javascript
import langname from "@giellatekno/langnames";

console.assert(langname("eng", "eng") == "English");
console.assert(langname("eng", "sme") == "Eŋgelasgiella");

console.assert(langname("sme", "eng") == "Northern Sami");
console.assert(langname("sme", "sme") == "Davvisámegiella");
```
