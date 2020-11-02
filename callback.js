// VARS

const posts = [
    { title : 'POST ONE', body : 'Body one...' },
    { title : 'POST TWO', body : 'Body two...' }
];

// FUNCTIONS

function getPosts() {
/*
    
    // Shorthand version (ES6) : setTimeout(() => { .......
    
    setTimeout(function() {
        console.log('dev...');
    }, 1000);
    
*/
    
    setTimeout(() => {
        let output = '<ul>';
        posts.forEach( (_posts, index, arr) => {
        /*
            console.log(_posts);        // Loop value
            console.log(index);         // Loop key
            console.log(arr);           // posts array
        */
        
        output += `<li>${_posts.title} :: ${_posts.body}</li>`      // Template literals
            
        });
        
        output += '</ul>';
        
        var target = document.getElementById('result');
        target.innerHTML = output;
    }, 1000);
}

function createPost(newPost, callback) {
    setTimeout( () => {
        posts.push(newPost);
        /*
        console.log(callback);          // render code in `getPosts`
        console.log(typeof callback);   // function
        */
        callback();                     // User variable `callback` and add parenthesis , it will be `getPosts` to `getPosts()`, this function will be called.
    }, 2000);
}


// EXEC

getPosts();

createPost({title : 'POST THREE', body : 'Body three...'}, getPosts)