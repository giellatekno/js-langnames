# Developing

Run `pnpm run build` to build a new `dist/` directory, which is the files that will
be published.


## Publishing

Make sure to build first! `just build`

After building, make sure you bump the version in `package.json`. Npm gets difficult
if you are trying to overwrite a version that exists. Follow semver when bumping version
numbers.


### Access token

Publishing needs an access token with access to the organization. Create one on the npm website.
Follow these steps *exactly*:

- go to https://www.npmjs.com/settings/NPM_USERNAME/tokens
  (replace NPM_USERNAME with your username on npm)
- click "generate new token"
- check bypass 2FA
- from the user permssions, "only select packages", scope @giellatekno
- do __NOT__ give any access on organizations (the docs states that such a token cannot
  be used to push packages (at least new packages) to that organization.... yes, go figure, eh...)


### Publishing

When running `just publish`, make sure the env var `NPM_TOKEN` is set to that access
token. For example:

```
env NPM_TOKEN=npm_xxxxxxxxxx just publish
```
