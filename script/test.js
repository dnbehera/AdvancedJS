var $ = function(){

    // testing the usefulness of student[attr] object attribute access method
     this.objChecker = function(){
        var student = {
            name: 'dibya',
            'roll no': 12
        }
        for( attr in student){
            console.log( attr + ': ' +student[attr]);
        }
    }

    //maps
     this.mapChecker = function(){
        var x = new Map();
        x.set(1, 'Dibya');
        x.set('friend','ajith');
        x.set({name:'amit'}, 4);
        x.forEach( (value, key, dObj) => {
            console.log(value); // value mapped to that key
            console.log(key); // prints the first element of the map or key
            console.log(dObj); // printing the whole data object
        });

        //directly access a map element 
        document.write(x.get(1)); // prints 'Dibya'
        document.write(x.get('friend'));// prints ajith
        document.write(x.get({name:'amit'}));// This prints undefined
    }


    //Sets
    var setChecker = function(){
        var aSet = new Set();
        aSet.add('why');
        aSet.add(2);
        aSet.add('this');
        console.log(aSet); // prints the set object like Set {'why', 2, 'this'}
        console.log(aSet[1]); // undefined
        console.log(aSet.keys); // it prints native code

        //usage of set
        var checkVal = 'why';
        console.log(aSet.has(checkVal)); // true
        console.log(aSet.size);//3
        aSet.delete('why');
        console.log(aSet);
        aSet.clear(); 
        console.log(aSet);
        aSet.forEach( (value) => console.log(value));//prints all
    }

    //Arrays
    var arrChecker = function() {
        var x = [1, 2, 'Dibya'];
        console.log(x);
    }
};

$.objChecker();
// Is this self invoke as well?
function callInstantly(){
    console.log("I am getting called instantly");
}
callInstantly();