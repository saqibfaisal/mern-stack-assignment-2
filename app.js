//nested array
let array = [ ["inner_array1"], ["inner_array2"], ["inner_array3"]]
let b = array.splice(1,2)
b=[...array]
console.log(array)



// nested object
let object = {
    iphone: {
        v13: {
            ram: 4,
            rom: 64,
            price: 200000,

        },
        v13pro: {
            ram: 6,
            rom: 128,
            price: 250000,
        },
        v14: {
            ram: 6,
            rom: 128,
            price: 300000,
        }
    },
    infinix: {
        hot9play: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        hot10: {
            ram: 6,
            rom: 128,
            price: 25000,
        },
        smart5: {
            ram: 2,
            rom: 32,
            price: 15000,
        }
    },
    redmi: {
        v9c: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        v9d: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        v9e: {
            ram: 8,
            rom: 64,
            price: 20000,
        }
    },
}
const obj1 ={...object.iphone.v13}
console.log(obj1)
const obj2 ={...object.infinix.hot10}
console.log(obj2)
const obj3 ={...object.redmi.v9c}
console.log(obj3)
