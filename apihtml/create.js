function createfn()
{
    let name= document.getElementById('fname').value;
    let age= document.getElementById('age').value;
    // let data=JSON.stringify({"name":name,"age":age});
    let data=({"name":name,"age":age});
    document.write(data);
    console.log(data);
    const up = fetch(`http://127.0.0.1:8000/empcreate/`,
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
    // window.location.reload();

}


