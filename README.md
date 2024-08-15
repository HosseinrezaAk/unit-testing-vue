# unit-testing-vue

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

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Explanation 📝

1. Create a test suite (a block of tests) :
`describe(...)`

2. Set up your test(s) :
`test(...)`
3. Mount the component with `vue-test-utils`: `mount(...)`
4. Set data, if necessary : `setData(...)`
5. Assert what the result should be :
`expect(...)` , use `async` and `nextTick` to wait for the element load in the **DOM**
