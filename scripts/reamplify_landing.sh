#!/bin/bash

MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

$MY_DIR/backup_amplify.sh

$MY_DIR/amplify_delete.exp

echo "Hit enter whenever you are ready to continue!"; read

$MY_DIR/amplify_init.exp

$MY_DIR/amplify_add_auth.exp

$MY_DIR/amplifyd_auth_update.exp

amplify status

echo "Amplify CLI version: `amplify --version`"
