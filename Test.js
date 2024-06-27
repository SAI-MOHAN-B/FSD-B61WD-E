var res = [
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }]
// Object
var obj ={
  name:"guvi",
  age:23
}

// JSON:
var obj1 = {
  "name":"guvi",
  "age":23
}
// . and box method both are appplicable for JSON
console.log(obj1.name);
console.log(obj1["name"]);

// Array of JSON:
var arr = [{
  "name":"guvi",
  "age":23
},{
  "name":"geek",
  "age":24
}]
// Syntax: arrayname[index number].keyname
console.log(arr[0].age);
console.log(arr[1].name);
// Iterate It:
for(var i =0;i<arr.length;i++){
console.log(arr[i].name,arr[i].age);

}
