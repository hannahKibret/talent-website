const queryString = window.location.search;
const result = queryString.slice(1,2)
console.log(queryString);
console.log(result);

async function getJob() {
    let url = 'http://alpha.beuapi.com/api/v1/talent/jobs/' + result;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderJob() {
    let job = await getJob();
    let html = '';
    var header = document.getElementById('job-title');
    var cat = document.getElementById('job-category');
    var loc = document.getElementById('location');
    var date = document.getElementById('date');
    var type = document.getElementById('type');
    var desc = document.getElementById('desc');
    var req = document.getElementById('req');
    var btn = document.getElementById('apply-btn');

    header.textContent = job[0]["name"];
    cat.textContent = job[0]["category"];
    loc.textContent = job[0]["location"];
    date.textContent = job[0]["deadline"];
    type.textContent = job[0]["type"];
    desc.innerText = job[0]["description"];
    req.innerText = job[0]["requirements"];
    btn.name = "id";
    btn.value = job[0]["id"];

   

}

renderJob()

//const urlParams = new URLSearchParams(queryString);
//const result = urlParams.get();
