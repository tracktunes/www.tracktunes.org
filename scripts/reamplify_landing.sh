#!/bin/bash

MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

BACKUP_DIR="$1"

if [ "$BACKUP_DIR" == "" ]; then
    echo "No argument provided: please provide lambda sources backup directory"
    exit 1
fi

$MY_DIR/backup_amplify.sh

$MY_DIR/amplify_delete.exp

echo "Hit enter whenever you are ready to continue!"; read

$MY_DIR/amplify_init.exp

$MY_DIR/amplify_add_auth.exp

$MY_DIR/amplify_auth_update.exp

# $MY_DIR/rebuild_lambdas.sh $BACKUP_DIR

$MY_DIR/amplify_push.exp

amplify status

echo "Amplify CLI version: `amplify --version`"
