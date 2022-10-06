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

async function renderApplicants() {
    //let apps = await getApplicants();
    //let html = '';     
    let htmlSegment = `
    <div class="col-md-9 col-sm-8">
        <div class="section-heading">
            <h2>Leul Yohannes</h2>
        </div>

        <p id="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, delectus totam non est excepturi expedita, illum vitae vel dolore exercitationem nobis quasi dicta illo id  quas. Error commodi, modi minus. <br><br>
        Perferendis, quidem, facilis. Aspernatur alias numquam saepe deleniti dolorem quos repudiandae eaque ad eligendi quam, ratione, error minima culpa suscipit nostrum magni omnis est. Suscipit dolor sint aut maiores eius, id nemo, optio, quos tempora cum est quas. At recusandae obcaecati consequatur ipsa dignissimos, eius commodi qui quae exercitationem fugiat, voluptatem, nesciunt!
        </p>   

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatem vero culpa rerum similique labore, nisi minus voluptatum numquam fugiat. <br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat fugit sint reiciendis quas temporibus quam maxime nulla vitae consectetur perferendis, fugiat assumenda ex dicta molestias soluta est quo totam cum?</p> 

        <br>
    </div> 
                        `;

        //html += htmlSegment;
   

    let container = document.querySelector('#app-info');
    container.innerHTML = htmlSegment;
}

renderApplicants();
 