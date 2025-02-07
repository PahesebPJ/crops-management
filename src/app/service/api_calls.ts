export async function getApiCall(url: string, method: object = {method: "GET"}) {
    try{
        const response = (await fetch(url, method)).json();
        return response;
    }catch(error){
        console.log(error);
    }   
    
}