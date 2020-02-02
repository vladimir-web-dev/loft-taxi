export const apiCall = async (url, body) => {
    let response;
    
    if (body) {
        response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
    } else {
        response = await fetch(url);
    }
   
    return await response.json();
}