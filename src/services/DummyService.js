
export function getDummyData() {
    return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => json.products)
}


export function getDummyDataById(id) {
    return fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json())
        .then(json => json)
}