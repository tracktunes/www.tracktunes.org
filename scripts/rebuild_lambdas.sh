#!/bin/bash

# rebuilds and checks source code for trigger lambda functions
# based on code in backup directory

MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

BACKUP_DIR="$1"

TRIGGER_SRC="backend/function/landing*PreSignup/src"

cd $MY_DIR/..

# copy the .eslintrc.json
cp $BACKUP_DIR/backend/function/.eslintrc.json amplify/backend/function/

# copy source files
cp $BACKUP_DIR/$TRIGGER_SRC/*.js amplify/$TRIGGER_SRC

# copy package.json files
cp $BACKUP_DIR/$TRIGGER_SRC/package.json amplify/$TRIGGER_SRC

# link
ln src/user-defaults.json amplify/$TRIGGER_SRC

# check and build
pushd amplify/$TRIGGER_SRC; eslint; yarn; popd
