const {API_URL_STRING='https://fitnesstrac-kr.herokuapp.com/api/'} = process.env;
//const test="https://protected-earth-18251.herokuapp.com/api/";
const APIFetch = async (
    {
        url:url,
        method:method,
        token:token,
        body:body
    })=>
{
    try
    {
        const response = await fetch(API_URL_STRING+url,
        {
            method:method ? method.toUpperCase():"GET",
            headers:
            {
                    'Content-Type':'application/json',
                    ...(token && {'Authorization':'Bearer '+token}),
            },
            body:JSON.stringify(body)
        });
        return await response.json();
    }
    catch(error)
    {
        throw error;
    }
}

export default APIFetch;