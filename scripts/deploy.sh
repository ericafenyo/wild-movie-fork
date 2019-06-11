#!/bin/bash
set -x

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/build/ eric@51.68.231.219:/var/www/ericafenyo.com/html/apps/wild-movie