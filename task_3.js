// Сохраняем в словаре dict число: индекс, далее проверяем есть ли у нас уже сохраненное число n-arr[i] в словаре, если есть, то возвращаем индексы

function solution(arr, n) {
    var dict = {}
    for(let i = 0; i < arr.length; i++) {
        if (dict[n-arr[i]] != null) {
            return [i, dict[n-arr[i]]]
        }
        else {
            dict[arr[i]] = i
        }
    }
    return null
}

console.log(solution([1,2,3,4,5], 1))
console.log(solution([1,2,3,4,5], 2))
console.log(solution([1,2,3,4,5], 3))
console.log(solution([1,2,3,4,5], 4))
console.log(solution([1,2,3,4,5], 5))