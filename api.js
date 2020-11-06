function callUsers() {
    setInterval( () => {
        apiCall();
    }, 2000);
}

async function apiCall()
{
    var val =  randomNumber();
    const response = await fetch('https://reqres.in/api/users/' + val);
    const data = await response.json();
    
    let output = '<ul>';
    output += `<li>${data.data.id}</li>`;
    output += `<li>${data.data.first_name}</li>`;
    output += `<li>${data.data.last_name}</li>`;
    output += `<li>${data.data.email}</li>`;
    output += `<li>${data.ad.company}</li>`;
    output += `<li>${data.ad.url}</li>`;
    output += '</ul>';
    
    var target = document.getElementById('result');
    target.innerHTML = output;
}


function randomNumber()
{
    return Math.floor(Math.random() * 12) + 1;      // 1 - 12
}

callUsers();
