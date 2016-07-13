# emoji

> Get your favorite emoji online!

## Develop

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# push to GitHub pages

git push --delete origin gh-pages; git checkout -b tmp; npm run build; git add dist -f; git commit -m "make dist"; git subtree push --prefix dist origin gh-pages; git checkout master; git branch -D tmp

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
