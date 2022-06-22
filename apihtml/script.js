function disp(){
    document.write("<table>");
    document.write("<tr>");
    document.write("<td> Name</td>");
    document.write("<td> Age</td>");
    document.write("<td> Action</td>");
    document.write("</tr>");

    fetch('http://127.0.0.1:8000/emplist/')
    .then(response => {
        return response.json();
    })
    .then(user =>{
        for(let i=0;i<user.length;i++)
        {
        document.write("<tr><td>"+user[i].name+"</td><td>"+user[i].age+"</td><td><button onclick='onDelete("+user[i].id+")'>Delete</button></td><td><button onclick='onUpdate("+user[i].id+")'>Update</button></td><td><input hidden id='selectedItemId' value="+user[i].id+"></td>");
        document.write("</tr>");
        }
        document.write("</table>");
        document.write("<button onclick='onCreate()'>Create</button>")
    })

} 
function onDelete(id) {
    // document.write(id);
    // var id = document.getElementById("selectedItemId").value;
    const deleted = fetch(`http://127.0.0.1:8000/empdelete/${id}/`, {
       method: "DELETE",
       headers: {"Content-Type":"application/json"}
    });
    window.location.reload();
}
function onUpdate(id) {
    window.location.href="form.html?id="+id;

}
function onCreate() {
    window.location.href="create.html";
}
