// Write your solution in this file!
const employee = {
    Bob : "72nd",
}

function updateEmployeeWithKeyAndValue(employee, key, value){ // what exacly does this do?
const updatedEmployee = {...employee};
updatedEmployee[key] = value;
return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(name, streetaddress, Broadway){ //what happended to broadway  // point of (obj,key)
name[streetaddress] =  "12 Broadway"
return name

}

function deleteFromEmployeeByKey(object, key) {
const copyObject =  {...object};
delete copyObject[key]                        //how to do with key    , what does only newEmployeeList = employee do
return copyObject
}

const myObject = {
    name : "Sam",       
    favoriteFood : 'Pizza'

}

//console.log(deleteFromEmployeeByKey(myObject, "favoriteFood"))
//console.log(myObject)

function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key]
return employee
}




/*function deleteFromEmployeeByKey(employee, key) {
delete employee.Bob       //how to do with key
return employee
}*/
/*
const updatedEmployee = {...employee}
updatedEmployee[Bob] = "73rd"
return updatedEmployee;
*/