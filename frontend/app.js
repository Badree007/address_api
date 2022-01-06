const input_postcode = document.getElementById('postcode');
const form = document.getElementById('form_postcode');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user_postcode = input_postcode.value;
    console.log(user_postcode);

    fetch(`../api/${user_postcode}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
        },
    }).then( (response) => {
        return response.json();
    }).then( (result) => {
        console.log(result);
        const data_div = document.getElementById('data_cont');

        data_div.innerHTML = "";

        if(result.status === 'success') {
            let city_list = "";
            result.data.cities.forEach(city => {
                city_list += `<li>${city}</li>`;
            });

            const html = `<h4>Postcode: <span>${result.data.postcode}</span></h4>
                        <h4>State: <span>${result.data.state}</span></h4>
                        <h4>Cities: 
                            <ul>
                                ${city_list}
                            </ul>
                        </h4>`;
            
            data_div.insertAdjacentHTML('beforeend', html);
        } else {
            data_div.innerHTML = `<h5>Cannot find result for ${user_postcode}. Try with valid postcode!`;
        }
    })
});

const exampDataSuccess = {
    status: "success",
    noOfCities: 8,
    data: {
        state: "NSW",
        postcode: 2000,
        cities: ["Darling Harbour", "Dawes Point", "Haymarket", "Millers Point", "Parliament House", "Sydney", "Sydney South", "The Rocks"]
    }
}

const exampDataFail = {
    status: "fail",
    message: "Postcode not found!"
}

document.getElementById("example-success").textContent = JSON.stringify(exampDataSuccess, undefined, 2);
document.getElementById("example-fail").textContent = JSON.stringify(exampDataFail, undefined, 2);