export function fetchWeather(city) {
    return  (dispatch)=> {
        fetch(`http://api.weatherstack.com/current?access_key=205e4a6f3950982e41c7a440b2a7f827&query=${city}`)
        .then(res=>{
            return res.json();
        })
        .then(JSONres=>{
            //dispatch the action
            dispatch({
                type: " FETCH_WEATHER",
            payload:JSONres});
        }).catch(err=>{
            console.log(err);
        })
    }
    
}