/* Opgave 1*/
// din kode her

const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

let myFetch = fetch(userURI) 
    .then (
        (response) => {
            // console.log(`myResponse:`, response)
            return response.json();
        }
    )
    .then((data) => {
        console.log(`myData:`, data);
        buildUsers(data);
    })
    .catch((error) => {
        console.log(error);
    })


function buildUsers(myUserData){
    myUserData.map((myUser)=>{
    let myUserHTML=`<h2>${myUser.name}</h2>
    <p>Adresse: ${myUser.address.street}  ${myUser.address.suite}</br>
    post nummer: ${myUser.address.zipcode}</br>
    by: ${myUser.address.city}</p>`;
    myUserlistElement.innerHTML+=myUserHTML;
    });
}

/* Opgave 2*/

// din kode her

/* Opgave 3 - skriv videre på koden her: */
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");


/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");

//entry point
// getUsers("https://jsonplaceholder.typicode.com/users");
