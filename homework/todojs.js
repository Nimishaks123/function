// var todolist=[]
// function addTodo()
// {
// var result=document.getElementById('input').value
// todolist.push(result)
// document.getElementById('input').value=""
// display_todaylist()
// }
// console.log(todolist)

// function display_todaylist()
// {
//     document.getElementById("ul1").innerHTML="";
//     for(let i=0;i<todolist.length;i++)
//      {
       
//           var list=document.createElement("li");
//           list.innerHTML=todolist[i]
//           document.getElementById("ul1").appendChild(list)
          
//           var btn1=document.createElement("button")
//           list.appendChild(btn1)
//           btn1.innerHTML="Remove"
//           // var remove_item=todolist.indexOf(i)
//           todolist.splice(remove_item,1)
//           remove_item.removeChild(i)
//           display_todaylist()
          

//            var btn2=document.createElement("button")
//            btn2.innerHTML="Move"
//            list.appendChild(btn2)
//           btn2.setAttribute(onclick,move_item(i))
           
         
//      }
//      var tomorrowlist=[]
//      function move_item(i)
//      {
//        tomorrowlist.push(todolist[i])
//        list.removeChild(btn1)
//        display_tomorrowList()
//      }

//      function display_tomorrowList()
//      {
//        document.getElementById("ul2").innerHTML=""
//        for(x of tomorrowlist)
//        {
//          var list2=document.createElement("li")
//          list2.innerHTML=x
//          document.getElementById("ul2").appendChild(list2)
//        }
// }
// }

arr=[]
function addlist()
{
  var result=document.getElementById('txt').value  
 arr.push(result)
 document.getElementById('txt').value=""
display()
}
//console.log(arr)
function display()
{
  document.getElementById('ul1').innerHTML=""
  for(i of arr)
  {
    var list=document.createElement("li")
    list.innerHTML=i
    document.getElementById('ul1').appendChild(list)

    var btn=document.createElement("button")
    btn.innerHTML="REMOVE"
    btn.setAttribute('onclick','removeitem(\''+i+'\')')
    list.appendChild(btn)
    var move_btn=document.createElement("button")
    move_btn.innerHTML="MOVE"
    move_btn.setAttribute('onclick','moveitem(\''+i+'\')')
    list.appendChild(move_btn)
  }
}
function removeitem(index1)
{
  var remove_item=arr.indexOf(index1)
 // console.log(remove_item)
  arr.splice(remove_item,1)
  display()
}
tmwList=[]
function moveitem(index)
{
tmwList.push(index)
//arr.removeitem(index)
removeitem(index)
console.log(tmwList)
display_tmwlist()
}
function display_tmwlist()
{
  document.getElementById('ul2').innerHTML=""
for(x of tmwList)
  {
    var list1=document.createElement("li")
    list1.innerHTML=x
    document.getElementById('ul2').appendChild(list1)

    var btn23=document.createElement("button")
    btn23.innerHTML="REMOVE"
    btn23.setAttribute('onclick','remove_tmrwlist(\''+x+'\')')
    list1.appendChild(btn23)
    //var move_btn=document.createElement("button")
    //move_btn.innerHTML="MOVE"
   // move_btn.setAttribute('onclick','moveitem(\''+i+'\')')
   // list.appendChild(move_btn)
  }
}
function remove_tmrwlist(index1)
{
  var remove_item1=tmwList.indexOf(index1)
 // console.log(remove_item)
  tmwList.splice(remove_item1,1)
  display_tmwlist()
}





     





