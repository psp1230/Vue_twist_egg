# twist-front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

cors:

proxy: {
"/data": {
target: "http://baby040285.ddns.net",
changeOringin: true,
pathRewrite: {
"^/data": ""
}
}
}
npm install --save portfinder@1.0.21
