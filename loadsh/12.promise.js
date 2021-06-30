
// 实现 any
Promise.any = function(ps) {
  let r, j;
  const promise = new Promise((resolve, reject) => {
    r = resolve;
    j = reject;
  });
  let errCount = 0;
  let pCount = 0;
  for (const p of ps) {
    pCount += 1;
    Promise.resolve(p).then(
      val => r(val),
      err => {
        errCount += 1;
        if (errCount >= pCount) {
          j(err);
        }
      }
    );
  }
  return promise;
};

// 实现 all
Promise.all = function(promises) {
  return new Promise(function(resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
        Promise.resolve(promises[i]).then(function(value) {
          resolvedCounter++
          resolvedValues[i] = value
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedValues)
          }
        }, function(reason) {
          return reject(reason)
        })
    }
  })
}
