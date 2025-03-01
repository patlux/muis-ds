# muis-ds

Example for a design system monorepo.

Used tools

- [bun](bun.sh): js runtime, toolkit, package installer
- [nx](https://nx.dev): monorepo management
- [tsup](https://tsup.egoist.dev/): Build library (cjs and esm)

## Live Demo

https://patlux.github.io/muis-ds/

The source of the live demo is under [./apps/web](./apps/web)

## How to use

[core](./libs/core): contains the core components

```sh
# create a .npmrc with the following content:
@patlux:registry=https://npm.pkg.github.com

# create a new react project
# then install the package: 
bun add @patlux/muis-core # or with npm, yarn, pnpm

# in index.tsx
import { MUISButton } from '@patlux/muis-core'
```

## Development

Get an visual overview of the project graph

```sh
bunx nx graph
```

### Create Release & Publish

```sh
bunx nx release
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
