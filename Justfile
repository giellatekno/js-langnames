default:
    @just --list

build:
    rm -rf dist/
    pnpm run build
    cat package.json | grep -v '"private":' > dist/package.json

publish:
    pnpm publish --access public dist/
