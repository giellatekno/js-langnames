# Developing

Run `pnpm run build` to build a new `dist/` directory, which is the files that will
be published.


## Publishing

Needs an access token with access to the organization. Create one on the npm website.
When running `pnpm publish`, make sure the env var `NPM_TOKEN` is set to that access
token. The `.npmrc` file sets up that this access token will be used.

`--access public` is required, otherwise it tries to publish a private package,
which requires a paid account.


```
env NPM_TOKEN=$(cat ACCESS_TOKEN) pnpm publish --access public
```
