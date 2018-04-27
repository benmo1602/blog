// function tag(literals, ...substitutions) {
//     //literals是数组，第一个位置是""，第二个位置是占位符之间的字符串，在本例中是haha
//     //substitutions是字符串中的模板字面量，可能多个
//     //函数最终返回字符串
//     console.log(literals) // [ '', ' haha' ]
//     console.log(...substitutions) // 4
// }
// let a = 4
// let t = tag`${a} haha`
// console.log(t) //undefianed

let person = ((name) => {
    return {
        getName: function () {
            return name;
        }
    }
})("Nickolas");
console.log(person.getName());