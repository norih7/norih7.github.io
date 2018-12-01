const FetchApi = {
    mock: args => {
        return fetch("http://localhost:8000/")
            .then(response => {
                return response.text();
            })
            .then(text => {
                return text;
            })
            .catch(function(e) {
                console.log("fetch error", e);
            });
    }
};

export default FetchApi;
