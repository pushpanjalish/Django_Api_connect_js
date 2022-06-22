var baseUrl = (window.location).href; // You can also use document.URL
var id = baseUrl.substring(baseUrl.lastIndexOf('=') +1);
// document.write(id);
function disp()
{
    fetch(`http://127.0.0.1:8000/emplistid/${id}`)
    .then(response => {
        return response.json();
    })
    .then(user =>{
        document.getElementById('fname').value=user.name;
        document.getElementById('age').value=user.age;

    });
}
function savefn()
{
    let name= document.getElementById('fname').value;
    let age= document.getElementById('age').value;
    // let data=JSON.stringify({"name":name,"age":age});
    let data=({"name":name,"age":age});
    document.write(data);
    console.log(data);
    const up = fetch(`http://127.0.0.1:8000/empupdate/${id}/`,
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    // }).catch(function(error){
    //     console.error(error);
    // }).then(response => {
    // return response.json();
    }) .then((data) => console.log(data));

    ;
    window.location.href="index.html";
}


