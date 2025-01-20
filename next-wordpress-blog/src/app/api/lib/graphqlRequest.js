export default async function graphqlRequest(query) {
    const url = "http://localhost/wordpress/wordpress/graphql";
    const headers = {'content-type': 'application/json'};

    const res = await fetch(url,{
        headers,
        method:"POST",
        body:JSON.stringify(query)
    });

    const  resJson = await res.json();
    return resJson;
    
}