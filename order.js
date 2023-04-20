function save(){
    const new_data1=document.getElementById("name").value.trim();
    const new_data2=document.getElementById("email").value.trim();
    const new_data3=document.getElementById("num").value.trim();
    const new_data4=document.getElementById("how").value.trim();
    const new_data5=document.getElementById("order").value.trim();
    const new_data6=document.getElementById("add").value.trim();
    if(localStorage.getItem("data")==null)
    {
localStorage.setItem("data","[]");
    }
const out_data=JSON.parse(localStorage.getItem("data"))
out_data.push(new_data1)
out_data.push(new_data2)
out_data.push(new_data3)
out_data.push(new_data4)
out_data.push(new_data5)
out_data.push(new_data6);
localStorage.setItem("data",JSON.stringify(out_data));
}