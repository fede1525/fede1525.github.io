const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
        actions: {
            apiFetch: async (url, method='GET', body = null) => {
                try {
                    let params = {
                        method,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    };

                    if (body != null) {
                        params.body = JSON.stringify(body);
                        params.headers["Content-Type"] = "application/json";
                    }

                    let resp = await fetch(url, params);

                    if(!resp.ok){
                        console.error(resp.statusText)
                        return {
                            error: resp.statusText
                        };
                    }

                    return await resp.json()
                } catch (error){
                    console.error("Error:", error)
                }
            }

        }
    }
};

export default getState;