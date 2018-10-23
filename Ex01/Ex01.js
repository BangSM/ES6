{
    let a = 10
    {
        let a = 20
        console.log(a)
    }
    console.log(a)
}
console.log(a) 

function hasValue (p) {
    console.log(v)
    if (p) {
        var v = 'blue'
        console.log(v)
    } else {
        let v = 'red'
        console.log(v)
    }
    console.log(v)
}
hasValue(10)

function hasValue2 (p) {
    console.log(v)  
    if (p) {
        let v = 'blue'
        console.log(v)
    } else {
        let v = 'red'
        console.log(v)
    }
    console.log(v) 
}
hasValue2(10)

(function(){
    var a = 10;
    (function(){
        console.log(a); 
        var a = 20;
    })();
    console.log(a); 
})();
console.log(a); 

if(true){
    let a = 10
    if(true){
        console.log(a) 
        const a = 20
    }
    console.log(a) 
}
console.log(a) 

var value = 0;
var obj = {
    value : 1, 
    setValue : function (){
        this.value = 2;     
        (function (){
            this.value = 3; 
        })();
    }
}
obj.setValue();
console.log(value);    
console.log(obj.value);