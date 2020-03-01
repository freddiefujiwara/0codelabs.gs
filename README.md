![Node.js CI](https://github.com/freddiefujiwara/0codelabs.gs/workflows/Node.js%20CI/badge.svg)
# 0codelabs.gs
Google App Scripts
## Setup

```console
$ git clone https://github.com/freddiefujiwara/0codelabs.gs.git
$ cd 0codelabs.gs
$ npm i
```

## Login if you want to start from scratch
```console
$ npm run clasp:login # if you need
$ npm run clasp:create
```

## Create if you want to start from current gas
```console
$ npm run clasp:login # if you need
$ npm run clasp:pull
```

## Lint
Validate your code
```console
$ npm run lint
```
Fix your code
```console
$ npm run lint:fix
```

## Test

```console
$ npm run test
```

## Sample

```javascript
function myFunction() {
  var ss  = new FormData("form response","Form Responses 1");
  var lr  = ss.last();
  var cal = new Calendar("xxx@group.calendar.google.com");
  var start = new Date(lr["お日にち"]);
  start.setHours(lr["開始時刻(時)"]);
  start.setMinutes(lr["開始時刻(分)"]);
  var duration = lr["コース"].match(/\((\d+)/)
  var end = new Date(start.getTime() + duration[1]*60000);
  var nf = new Notification("template config","Sheet1");
  nf.email(lr["Email Address"],"target template",lr);
}
```

## LICENSE

[MIT](./LICENSE)
