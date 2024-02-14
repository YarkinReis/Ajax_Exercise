console.log("Let's get this party started!");

const $gifs = $("#gifs");
// const $remove = $("#remove");
const container = document.getElementById("#container");
const submit = document.getElementById("#submitinput");
const $form = $("#form");
const $searchInput = $("#search");

function gifAdd (url){
    const $gifElement = $("<img>",{src:url});
   
    $gifs.append($gifElement);
}

function removeGifs(){
$gifs.empty();
}

$("#remove").on("click",function(){
    removeGifs();
})
    $("#form").on("submit", async function(e){
        e.preventDefault();
        let searchTerm= $searchInput.val();
        $searchInput.val("");

        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params : {
                q: searchTerm,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });
        // let x = (Math.random()*50)
        // console.log(x);
        console.log(response.data.data[0].images.original.url);
        if(response.data.data && response.data.data.length > 0){
            const gifUrl = response.data.data[0].images.original.url;
            gifAdd(gifUrl);
        
    }
    })
