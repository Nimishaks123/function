arr=[]
function add()
{
var result=document.getElementById('txt').value

arr.push(result)
document.getElementById('txt').value=""
display()
}
console.log(arr)
    function display()
        {
            document.getElementById("ul1").innerHTML = '';
    
            for(let i=0;i<arr.length;i++)
            {
                var btn=document.createElement("button")
                btn.innerHTML="REMOVE"
                var btn1=document.createElement("button")
                btn1.innerHTML="MOVE"
                var list = document.createElement("li");
                //list.setAttribute("id","li1")
           
                list.innerText = arr[i]
                document.getElementById("ul1").appendChild(list)
                //document.getElementById("li1").appendChild(btn)
                list.appendChild(btn)
                list.appendChild(btn1)
                btn.onclick=function(){
                removeitem(i)}
                btn1.onclick=function(){
                    moveitem(i)
                }
                
           
       
            
            }

        }
        function removeitem(index)
        {
            arr.splice(index,1)
            display()
        }
        arr2=[]
        function moveitem(index)
        {
            for(let x=0;x<arr.length;x++)
            {
                arr2.push(index)
            }
        }