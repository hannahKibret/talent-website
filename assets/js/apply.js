const form = document.getElementById('apply-form');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const idd = urlParams.get('id');

 

/* Converting the form to a new formData object */

 

form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create payload as new FormData object:
    const payload = new FormData(form);
    // Post the payload using Fetch:
    fetch('http://alpha.beuapi.com/api/v1/talent/applicant/register/' + idd, {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then()
})