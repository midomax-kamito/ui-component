#!/bin/bash

rm -rf dist

# npx tsc --outDir dist --noEmit false

# for filename in dist/components/*/*.d.ts; do
#     # Cannot import type file in dist dir after build - https://github.com/joe-bell/cva/blob/main/packages/class-variance-authority/package.json
#     sed -i "s@class-variance-authority/dist/types@class-variance-authority/types@g" $filename
# done

# mv dist/export.js dist/index.js
# mv dist/export.d.ts dist/index.d.ts
npm run rollup-dev