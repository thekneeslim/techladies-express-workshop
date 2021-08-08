#!/bin/bash

BASEDIR=$(dirname $0)

printf '\n\360\237\246\204\t Listing Versions...\n'
echo "Npm Version: $(npm -v)"
echo "Node Version: $(node -v)"

printf '\n\360\237\246\204\t Setting up dependencies...\n'
pushd ${BASEDIR}/..
npm i
