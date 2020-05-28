# shop4
[shop4 site](https://kind-nobel-530ab0.netlify.app/)
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Solution : ESLint dollar($) is not defined. (no-undef)
```json
// package.json
"eslintConfig": {
    "env": {
      "node": true,
      "jquery":true, // <-- Add!
    },
}
```
### Solution : vue로 번들링된 코드보다 jQuery 코드가 먼저 호출될 때
$.메소드명 = function(){} 으로 커스텀 메소드를 만들어 이 안에 jQuery 코드를 넣고,<br>
Vue mounted() 훅에서 $.메소드명() 를 실행시킨다.