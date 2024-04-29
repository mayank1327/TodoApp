let list = [];
let req = prompt("please enter your req");

while(true) {
    if(req == "quit") {
        console.log("quiiting app");
        break;
    }
    if(req == "list") {
    for(let i=0; i<list.length; i++) {
        console.log(i,list[i]);
    } 
        console.log("list was printed");
    } else if(req == "add") {
       let task = prompt("Please describe the task you'd like assistance with");
       list.push(task);
       console.log('task added');
    } else if(req == "delete") {
      let idx =  prompt("please enter the task index");
         list.splice(idx,1);
         console.log("task deleted");
     }else {
       console.log("please enter correct req");
     }
      req = prompt("please enter your req")
}
