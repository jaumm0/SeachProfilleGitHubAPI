export async function githubprofile (username) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    } 
    return response.json(); 
    
}

export async function githubrepos (username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    } 
    return response.json(); 
}