# muis-ds

Example for a design system monorepo.

Used tools

- [bun](bun.sh): js runtime, toolkit, package installer
- [nx](https://nx.dev): monorepo management
- [tsup](https://tsup.egoist.dev/): Build library (cjs and esm)

## Development

Get an visual overview of the project graph

```sh
bunx nx graph
```

## Bootstrap

```sh
mkdir -p muis-ds
bun init -y
rm -f index.ts

git init 
git add .
git commit -m "init"

# setup workspaces

bunx nx@latest init
bunx nx add @nx/js

# core

mkdir -p libs/core
cd libs/core
bun init -y

bun add --peer react react-dom
bun add @mui/material @emotion/react @emotion/styled

# ...
```
