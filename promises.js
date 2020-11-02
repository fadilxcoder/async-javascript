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
    
    /*
    return new Promise((resolve, reject) => {
        setTimeout( () => {
           posts.push(newPost);
           const err = true;
           
            if (!err) {
                // resolve('ok');
                resolve();
            } else {
                reject(new Error('An error has occured.'));
            }
           
        }, 2000); 
    });
    */
    
    posts.push(newPost);
    const err = false;
       
    if (!err) {
        return Promise.resolve(toReturnOK());
    } else {
        return Promise.reject(new Error('An error has occured.'));
    }
}

function toReturnOK()
{
    console.log('code to return ok....');
    return 'ok';
}

// EXEC

// getPosts();

createPost({title : 'POST THREE', body : 'Body three...'})

/*
.then((resolveResponse) => {
    console.log(resolveResponse);       // ok
    // getPosts();
})
*/

.then(getPosts)

/*
.catch((rejectResolve) => {
   console.log(rejectResolve);
});
*/

.catch(rejectResolve => console.log(rejectResolve));