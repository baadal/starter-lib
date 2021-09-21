#!/bin/bash

rm -rf dist
cross-env NODE_ENV=production webpack &
cross-env NODE_ENV=production webpack --env ESM &
wait
source tasks/fixup.sh

# Note: `npm pack` not executing properly when `prepublishOnly` script is used
# maybe because `npm pack` runs through a complete publish cycle, and it even
# runs the `publish` npm script and the associated pre- and post-scripts
#npm pack && mv *.tgz dist/
