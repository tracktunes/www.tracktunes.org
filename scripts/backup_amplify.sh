#!/bin/bash

# creates the path of today's backup directory or errors if it already exists
# Precondition: backups are stored in $HOME/BACKUPS/<project-name>,
# where <project-name> is the repository name (repository folder name)

MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd $MY_DIR/..

PROJECT_NAME=`basename $PWD`

BACKUP_PARENT="$HOME/BACKUPS/$PROJECT_NAME"

if [ ! -e "$BACKUP_PARENT" ]; then
    >&2 echo "Error: Parent dir of backup dir not there - is it mounted?"
    echo ""; exit 1
fi

BACKUP_DIR="$BACKUP_PARENT/amplify/`date +%F`"

if [ -e amplify ]; then
    cp amplify/backend/api/tracktunes/schema.graphql .
    if [ -e "$BACKUP_DIR" ]; then
        >&2 echo "Backup directory exists (not backing up): $BACKUP_DIR"
    else 
        >&2 echo "Backing up amplify in: $BACKUP_DIR"
        mkdir $BACKUP_DIR
        cp -fr amplify/* $BACKUP_DIR
    fi
fi
echo $BACKUP_DIR
