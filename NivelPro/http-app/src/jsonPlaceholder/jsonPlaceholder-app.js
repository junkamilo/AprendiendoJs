/**
 * 
 * @param {HTMLDivElement} element 
 */
export const JsonPlacerholder = async () =>{    
    const dataPost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await dataPost.json();
    return data;
}