# Langnames

Localized language names for languages in the Giellatekno infrastructure. Uses ISO 639-3 codes.

```
pnpm add @giellatekno/langnames
```

## Usage

```typescript
langname(ofLang: string, inLang: "eng" | "nob" | "sme" | "fin" | "rus", capitalize = true): string
```

```javascript
import { langname } from "@giellatekno/langnames";

langname("fkv", "eng")        // "Kven"
langname("fkv", "rus")        // "Квенский язык"
langname("sme", "eng")        // "North Sámi"
langname("sme", "sme")        // "Davvisámegiella"
langname("nob", "nob")         // "Norsk bokmål"
langname("nob", "nob", false)  // "norsk bokmål" (uncapitalized)
```

Capitalize defaults to `true` because names are stored lowercase but UI labels need capitals. Pass `false` for running text.

For language codes not in our data, falls back to `Intl.DisplayNames`. Returns the code itself if nothing is known.

Multi-word names use non-breaking spaces.
