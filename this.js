console.log(this); // global?
console.log(this === module.exports) // 노드에서 전역스코프 디스는 모듈익스포츠다


function a() {
  console.log(this === global);
}
a();