// letによる再宣言
var nickname = "taro"
console.log(nickname)
nickname = "ichiro"
console.log(nickname)


var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()