#!/bin/bash

MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

pushd $MY_DIR > /dev/null 2>&1

cd ..; P="`pwd`"; PROJECT_HOME=`basename $P`; cd $MY_DIR

BACKUP_DIR="$HOME/BACKUPS/$PROJECT_HOME/`date +%F`"

mkdir -p "$BACKUP_DIR"

# sudo mount-backup

TMP_DIR="$MY_DIR/../../$RANDOM"

mkdir $TMP_DIR

mv ../amplify $TMP_DIR
mv ../node_modules $TMP_DIR
mv ../.git $TMP_DIR

mkdir -p $BACKUP_DIR

rsync -avb .. $BACKUP_DIR

# restore
mv $TMP_DIR/amplify ..
mv $TMP_DIR/node_modules ..
mv $TMP_DIR/.git ..
rmdir $TMP_DIR

popd > /dev/null 2>&1
