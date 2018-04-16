# React + Redux MovieApp with react_webpack_starter

using TMDB API
<https://www.themoviedb.org/documentation/api>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

ReactWebpackStarter: <https://github.com/mileskingston/react_webpack_starter>

### To do's
* merge new react_webpack_starter into branch
* autoprefixer
* fix error: Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    in LazyLoadImage (created by Film)
    in a (created by Link)
    in Link (created by Film)
    in div (created by Film)
    in Film (created by Connect(Film))
    in Connect(Film) (created by Films)

### Stage 2

* Autocomplete searchbox
* creat slider component
* create actor/crew profiles pages
* advanced pagination (first, last, 1, 2, 3)
* animations
* Lazy load component

### Improvements

* Redux multi (mulitple requests)
* improve performance
* improve code coverage - Pagination, FilmSearch, App
* Testing store and other redux components

# React and webpack starterpoint

A starter point for creating a React app using Webpack 4 and Babel.

## How to run

first install node_modules folder.
```sh
npm install
```

to run development build with local server
```sh
npm run start
```

For production build
```sh
npm run build
```

### Versions

| Plugin | Version |
| ------ | ------ |
| React | 16.3.1 |
| Webpack | 4.5.0 |