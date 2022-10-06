async function getApplicants() {
    let url = 'http://alpha.beuapi.com/api/v1/talent/applicants/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderApplicants() {
    let apps = await getApplicants();
    let html = '';
    let i = 1;
    apps.forEach(app => {       
        let htmlSegment = `
                               <div class="app-row">
                                <span class="par">${i}.</span>
                                <a class="alink" href="">${app.f_name} ${app.l_name}</a>
                                <div><p class="par">${app.email}</p></div>
                                <div><p class="par">${app.field_of_study}</p></div>
                                <div><p class="par">${app.created_at}</p></div>
                               </div> 
                        `;

        html += htmlSegment;
        i = i + 1;
    });

    let container = document.querySelector('#list');
    container.innerHTML = html;
}

renderApplicants();
 