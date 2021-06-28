function findWords(a_string, a_arr){
    // loop through Y
    for(let i = 0; i < a_arr.length; i++){
        if(a_string.toLowerCase().includes(a_arr[i].toLowerCase()) == true){ 
            console.log(a_arr[i])
        } else {
        console.log('No Matches')
        }
    }
}

findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","purple","dog"])


function replace_new_names(arr){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}

console.log(replace_new_names(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))