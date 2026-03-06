# Developing

Run `pnpm run build` to build a new `dist/` directory, which is the files that will
be published.


## Publishing

Needs an access token with access to the organization. Create one on the npm website.
When running `pnpm publish`, make sure the env var `NPM_TOKEN` is set to that access
token. The `.npmrc` file sets up that this access token will be used.

`--access public` is required, otherwise it tries to publish a private package,
which requires a paid account.

`--no-git-checks` is just to bypass (p)npm whining about untracked files (which for me
was that I had the access token stored in a file called `ACCESS_TOKEN`.)


```
env NPM_TOKEN=$(cat ACCESS_TOKEN) pnpm publish --access public --no-git-checks
```
