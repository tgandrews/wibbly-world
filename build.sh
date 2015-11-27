#!/bin/bash
set -e

rm -rf built
mkdir built

mv built.js built/
cp *.png built/
cp manifest.json built/ 
