#!/bin/bash

MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

COMMIT_MESSAGE=""
if [ "$1" != "" ]; then
    COMMIT_MESSAGE="$1"
fi

GIT_ROOT="`$MY_DIR/git_root`"

STATUS="`$MY_DIR/git_status`"

if [ "$STATUS" == "" ]; then
    echo "Nothing to save!"
    exit 0
fi

if [ "$STATUS" != "${GIT_ROOT}:changes" ]; then
    echo "Error: repository not up to date or has untracked files. Exiting."
    exit 1
fi

if [ -e "$MY_DIR/lint" ]; then
    LINT_STATUS="`$MY_DIR/lint`"
    if [ "$LINT_STATUS" != "" ]; then
        echo "Lint failed, exiting."
        exit 1
    fi
fi

# now we increment version because we know there were changes and only changes

OLD_VERSION="`cat $MY_DIR/../VERSION`"

$MY_DIR/increment_version

NEW_VERSION="`cat $MY_DIR/../VERSION`"

if [ "$OLD_VERSION" == "$NEW_VERSION" ]; then
    echo "Error incrementing $OLD_VERSION to $NEW_VERSION, exiting..."
    exit 1
fi

VERIFY="`echo $NEW_VERSION | grep '.*[0-9]$'`"
if [ "$VERIFY" != "$NEW_VERSION" ]; then
    echo "$VERIFY"
    echo "$NEW_VERSION"
    echo "Error: new version ($NEW_VERSION) does not end with a digit, exiting."
    exit 1
fi

# echo "New version:  $NEW_VERSION"

git add -A
git commit -m "($NEW_VERSION) $COMMIT_MESSAGE"
git push
