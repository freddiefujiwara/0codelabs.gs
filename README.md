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

### Form code

```javascript
function myFunction() {
  var ss  = new FormData("form response","Form Responses 1");
  var nf = new Notification("template config","Sheet1");
  var bk = new Booking("xxx@group.calendar.google.com");
  var lr  = ss.getTarget();
  
  var start = new Date(lr["お日にち"]);
  start.setHours(lr["開始時刻（時）"]);
  start.setMinutes(lr["開始時刻（分）"]);
  var duration = lr["コース"].match(/\((\d+)/)
  var end = new Date(start.getTime() + duration[1]*60000);
  
  if(bk.duplication(start,end)){
    nf.email(lr["Email Address"],"reject",lr);
    ss.reject();
    return;
  }
  bk.book(lr["コース"],start,end);
  nf.email(lr["Email Address"],"suspend",lr);
  ss.suspend();
}
```
### Spread Sheet code

```javascript
function myFunction(e) {
  var ss  = new FormData("form response","Form Responses 1");
  var nf = new Notification("template config","Sheet1");
  
  if(!e || e.changeType !== "FORMAT" || 
     e.source.getActiveRange().getColumn() !== 1 || 
    e.source.getActiveRange().getBackground() !== '#ffffff' ){
      return;
  }
  var lr = ss.getTarget(e.source.getActiveRange().getRow());
  ss.accept();
  nf.email(lr["Email Address"],"accept",lr);
}
```

## LICENSE

[MIT](./LICENSE)
