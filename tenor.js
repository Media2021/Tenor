const button = document.getElementById('btn1');
const subject = document.getElementById('subject');
const num = document.getElementById('number');
const loadpic = document.getElementById('showcase');






button.addEventListener('click', ourRequest);
function ourRequest(){

    let xhr = new XMLHttpRequest();
    let my_subject = subject.value;
    let my_number = num.value;

    xhr.open('GET',`https://api.tenor.com/v1/search?q=${my_subject}&key=RDQOUQH2A8KO&limit=${my_number}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let myRes = JSON.parse(xhr.responseText);
            let apiResponse = myRes.results;
            loadpic.innerHTML = '';
            apiResponse.forEach((image) => {
                loadpic.innerHTML += `<img src= ${image.media[0].gif.url} class='gif' >`;
            });
        } else if(xhr.status === 404){
            console.log( 'Not Found');
            
            
}
};
xhr.send();

}
