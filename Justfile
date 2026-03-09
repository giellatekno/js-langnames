default:
    @just --list

build:
    rm -rf dist/
    pnpm run build
    cat package.json | grep -v '"private":' | sed "s/\"\.\/dist\/index\./\"\.\/index\./" > dist/package.json

publish:
    #!/usr/bin/env bash
    if [[ -z "$NPM_TOKEN" ]]; then
        echo "Env var NPM_TOKEN not set. Hint:" 1>&2
        echo "env NPM_TOKEN=... pnpm publish --access public dist/" 1>&2
        exit 1
    fi
    
    pnpm publish --access public dist/
