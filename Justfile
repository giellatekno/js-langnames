default:
    @just --list

build:
    rm -rf dist/
    pnpm run build
    cat package.json | grep -v '"private":' > dist/package.json

publish:
    env NPM_TOKEN="${NPM_TOKEN}" pnpm publish --access public dist/
