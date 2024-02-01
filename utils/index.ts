export async function fetchCars(){
    const headers = {
            'X-RapidAPI-Key': '6d8bff3902msha11db9ec3ecb607p18f392jsnd8e858cc5546',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    })
const result = await response.json();
return result;
};