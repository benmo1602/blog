const header = `Accept-Ranges: bytes
Cache-Control: max-age=6000, public
Connection: keep-alive
Connection-1: keep-alive
Content-Type: application/javascript`

const solution = (s) => {
  let res = {};
  let arr = s.split("\n");
  arr.forEach((e) => {
      let tmp = e.split(": ");
      res[tmp[0]] = tmp[1];
  })
  return res;
}
console.log(solution(header))


/*
{
  'Accept-Ranges': 'bytes',
  'Cache-Control': 'max-age=6000, public',
  Connection: 'keep-alive',
  'Connection-1': 'keep-alive',
  'Content-Type': 'application/javascript'
}
*/

// 为什么 Connection 没有引号  标识符
