// VARS

const posts = [
    { title : 'POST ONE', body : 'Body one...' },
    { title : 'POST TWO', body : 'Body two...' }
];

// FUNCTIONS

function getPosts() {

    
    setTimeout(() => {
        let output = '<ul>';
        
        posts.forEach( (_posts, index, arr) => {
            output += `<li>${_posts.title} :: ${_posts.body}</li>`;
        });
        
        output += '</ul>';
        var target = document.getElementById('result');
        target.innerHTML = output;
        
    }, 1000);
}

// Promises

function createPost(newPost) {
    
    return new Promise((resolve, reject) => {
        setTimeout( () => {
           posts.push(newPost);
           const err = false;
           
            if (!err) {
                // resolve('ok');
                resolve();
            } else {
                reject(new Error('An error has occured.'));
            }
           
        }, 2000); 
    });
}

/*  Async / Await */

async function init() {
    await createPost({title : 'POST THREE', body : 'Body three...'});   // Prefix by `await` so that it wait for this function to run then run getPosts()
    
    getPosts();
}

/*  Async / Await / Fetch */

async function initFetch() {
    const response = await fetch('https://reqres.in/api/users/2');      // Wait for response API
    const data = await response.json();                                 // Wait for data conversion
    // console.log(data);
    
    await createPost({title : data.ad.company, body : data.ad.text});
    getPosts();
}

// EXEC

init();
initFetch();

// TEMPLATE LITERALS

const firstName = 'fadilxcoder...';

console.log(`Hello ${firstName}! 
How are you 
today?`);