
async function getJobs() {
    let url = 'http://alpha.beuapi.com/api/v1/talent/jobs/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderJobs() {
    let jobs = await getJobs();
    let html = '';
    jobs.forEach(job => {
        let htmlSegment = `<div class="col-md-6">
                            <div class="product-item">
                                <a href="job-details.html"><img src="assets/images/product-1-370x270.jpg" alt=""></a>
                            <div class="down-content">
                            <input id="job-title" type="submit" name="${job.id}" value="${job.name}"/>
                            <h4><small><i class="fa fa-briefcase"></i> >${job.category} <br> <strong><i class="fa fa-building"></i> beU Delivery </strong></small></h4>

                            <small>
                                <strong title="Posted on"><i class="fa fa-calendar"></i> ${job.deadline} </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                <strong title="Type"><i class="fa fa-file"></i> ${job.type} </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                <strong title="Location"><i class="fa fa-map-marker"></i> ${job.location}</strong>
                            </small>
                            </div>
                            </div>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#jobs');
    container.innerHTML = html;
}

renderJobs();
 