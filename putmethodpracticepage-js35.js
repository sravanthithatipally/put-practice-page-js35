let btnele = document.getElementById("sendPutRequestBtn");
let idele = document.getElementById("userInput");
let requestbodyele = document.getElementById("requestBody");
let requeststatusele = document.getElementById("requestStatus");
let responseele = document.getElementById("httpResponse");
let loadingele = document.getElementById("loading");

function putrequest() {
    let idval = idele.value;
    let url = "https://gorest.co.in/public-api/users/" + idval;


    loadingele.classList.remove("d-none");
    requeststatusele.classList.add("d-none");
    let requestbodyval = requestbodyele.value;

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 49d55cf904b931e61e7f22f159b95c1acece321417e98c47c0d6314f14bafbb2",
        },
        body: requestbodyval
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requeststatusele.classList.remove("d-none");
            loadingele.classList.add("d-none");

            let statusval = jsonData.code;
            let httpresponse = JSON.stringify(jsonData);
            requeststatusele.textContent = statusval;
            responseele.textContent = httpresponse;

        });
}
btnele.addEventListener("click", putrequest);