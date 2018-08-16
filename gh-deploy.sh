#!/bin/sh
npm run web-bundle;
git add build/* && git commit -m 'MC2 Web JS bundled for GitHub Pages deploy for web - test/demo purposes only';
git subtree push --prefix build origin gh-pages;
