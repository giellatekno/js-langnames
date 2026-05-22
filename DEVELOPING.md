# Developing
You need an npm account with membership in the `@giellatekno` org. Login once with `pnpm login` and you're set.

## Setup

```bash
pnpm install
```

## Building

```bash
pnpm build
```

## Publishing

Commit all changes first, then bump the version (npm rejects overwriting an existing version):

```bash
pnpm version patch   # or minor / major
git push && git push --tags
pnpm publish
```
