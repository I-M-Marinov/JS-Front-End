
// GET 

fetch("http://localhost:3030/jsonstore/books")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// CREATE ( it creates a book everytime the browser refreshes )

/* fetch("http://localhost:3030/jsonstore/books", {
    method: "POST",
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        'title': "The Chronicals of Narnia",
        'author': "C.S.Lewis"
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error)); */

// PUT - Edit book 

fetch("http://localhost:3030/jsonstore/books/d45d96f2-5e49-451f-a86f-9aef34003f85", {
    method: "PUT",
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            "author": "C.S.Lewis",
            "_id": "d45d96f2-5e49-451f-a86f-9aef34003f85"
        }
    )
});

// DELETE 

fetch("http://localhost:3030/jsonstore/books/b7959a91-f2ca-4a6b-9298-c2254bf62b95", {
    method: "DELETE",
})
