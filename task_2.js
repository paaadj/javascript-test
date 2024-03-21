function checkSyntax(s) {
    stack = []
    open_brackets = ["{", "[", "<", "("]
    close_brackets = ["}", "]", ">", ")"]
    for (let i = 0; i < s.length; i++) {
        if (open_brackets.includes(s[i])){
            stack.push(s[i])
        }
        else if (close_brackets.includes(s[i])) {
            let ind = close_brackets.indexOf(s[i])
            if (stack.pop() != open_brackets[ind]) {
                return -1
            }
        }
    }
    if (stack.length != 0)
        return -1
    return 0
}

console.log(checkSyntax("---(++++)----") == 0)
console.log(checkSyntax("") == 0)
console.log(checkSyntax("before ( middle []) after ") == 0)
console.log(checkSyntax(") (") == -1)
console.log(checkSyntax("} {") == -1)
console.log(checkSyntax("<(   >)") == -1)
console.log(checkSyntax("(  [  <>  ()  ]  <>  )") == 0)
console.log(checkSyntax("   (      [)") == -1)