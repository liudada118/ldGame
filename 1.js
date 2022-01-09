let a = [
    {   
        name : 'a',
        state : false
    },
    {   
        name : 'b',
        state : false
    }
]

function changeState(a){
    a = true
}

a.forEach((a,index) => {
    changeState(a.state)
})

console.log(a)