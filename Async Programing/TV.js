document.querySelector("button").addEventListener("click",foo);
async function foo(){
    try {
        var res = document.getElementById("Text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${res}`);
        var data1 = await data.json();
        console.log(data1);
    } catch (error) {
        console.log(error);
    }
}
