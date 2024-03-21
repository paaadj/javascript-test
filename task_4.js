function parseUrl(s) {
    arr = s.split("/")
    let res = {}
    res.href = s
    res.port = arr[2].split(":")[1]
    res.host = arr[2]
    res.protocol = arr[0]
    res.hostname = arr[2].split(":")[0]
    let pathname = ""
    for (let i = 3; i < arr.length; i++) {
        pathname += "/" + arr[i]
    }
    res.pathname = pathname.split("?")[0]
    res.hash = '#' + pathname.split('#')[1]
    res.origin = arr[0] + "//" + arr[2]

    return res
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )