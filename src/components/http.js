export default async function http(obj){
    let {method,url,params,data} = obj;
    let res;
    
    if(params){
        // 拼接 params
        let str = new URLSearchParams(params).toString();
        url += '?' + str;
    }

    try {
        if (data) {
            res = await fetch(url, {
                method: method.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } else {
            res = await fetch(url, {
                method: method.toUpperCase()
            });
        }

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const responseData = await res.json();
        return {
            data: responseData
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            status: res ? res.status : 500,
            error: error.message
        };
    }
    

    
}