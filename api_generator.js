// const street_no = Array.from({length: 100}, (_, i) => i+1);

// const postcode = [2000, 2204, 2150, 2170];

// const state = ["NSW", "QLD", "VIC", "TAS", "WA", "SA"];

const input_postcode = document.getElementById('postcode');
const form = document.getElementById('form_postcode');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user_postcode = input_postcode.value;
    console.log(user_postcode);

    fetch(`backend.php/?pcode=${user_postcode}`, {
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

        if(result != null) {
            let city_list = "";
            result.cities.forEach(city => {
                city_list += `<li>${city}</li>`;
            });

            const html = `<h4>Postcode: <span>${result.postcode}</span></h4>
                        <h4>State: <span>${result.state}</span></h4>
                        <h4>Cities: 
                            <ul>
                                ${city_list}
                            </ul>
                        </h4>`;
            
            data_div.insertAdjacentHTML('beforeend', html);
        } else {
            data_div.innerHTML = `<h5>Cannot find result for ${user_postcode}. Try another postcode!`;
        }
    })
});


