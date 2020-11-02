# Notes

- Asynchronous => `Code Exec #1` -> `( Do other stuffs before it finishes)` -> `Code Exec #2`
- Synchronous => `Code Exec #1` -> `Wait for it to complete` -> `Code Exec #2`
- Promise : `new Promise(function(resolve, reject) {.....})` 

`Promise.resolve(any_value)` 

is the same as :

`new Promise(function(resolve) {`
    `resolve(any_value)`
`})`