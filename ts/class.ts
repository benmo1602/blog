/*
 * @Description: description
 * @Author: benmo(cky9302@163.com)
 * @Date: 2021-02-02 12:40:07
 * @LastEditors: benmo(cky9302@163.com)
 * @LastEditTime: 2021-02-02 12:42:56
 */
class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor( public age: number, name) {
    super(name);
  }
}

const a = new Teacher(18, "benmo");
console.log(a.age);
console.log(a.name);
