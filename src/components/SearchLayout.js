import React, { useState } from 'react'
import './Searchlayout.css'
import axios from "axios";
export default function SearchLayout(props) {

    const [delhi_cloud, setDelhi_cloud] = useState('')
    const [delhi_temp, setDelhi_temp] = useState('')
    const [delhi_feelslike, setDelhi_feelslike] = useState('')
    const [delhi_humidity, setDelhi_humidity] = useState('')
    const [delhi_mint, setDelhi_mint] = useState('')
    const [delhi_maxt, setDelhi_maxt] = useState('')
    const [delhi_sunr, setDelhi_sunr] = useState('')
    const [delhi_suns, setDelhi_suns] = useState('')
    const [delhi_windd, setDelhi_windd] = useState('')
    const [delhi_winds, setDelhi_winds] = useState('')

    const [lucknow_cloud, setLucknow_cloud] = useState('')
    const [lucknow_temp, setLucknow_temp] = useState('')
    const [lucknow_feelslike, setLucknow_feelslike] = useState('')
    const [lucknow_humidity, setLucknow_humidity] = useState('')
    const [lucknow_mint, setLucknow_mint] = useState('')
    const [lucknow_maxt, setLucknow_maxt] = useState('')
    const [lucknow_sunr, setLucknow_sunr] = useState('')
    const [lucknow_suns, setLucknow_suns] = useState('')
    const [lucknow_windd, setLucknow_windd] = useState('')
    const [lucknow_winds, setLucknow_winds] = useState('')

    const [varanasi_cloud, setVaranasi_cloud] = useState('')
    const [varanasi_temp, setVaranasi_temp] = useState('')
    const [varanasi_feelslike, setVaranasi_feelslike] = useState('')
    const [varanasi_humidity, setVaranasi_humidity] = useState('')
    const [varanasi_mint, setVaranasi_mint] = useState('')
    const [varanasi_maxt, setVaranasi_maxt] = useState('')
    const [varanasi_sunr, setVaranasi_sunr] = useState('')
    const [varanasi_suns, setVaranasi_suns] = useState('')
    const [varanasi_windd, setVaranasi_windd] = useState('')
    const [varanasi_winds, setVaranasi_winds] = useState('')

    const [bangalore_cloud, setBangalore_cloud] = useState('')
    const [bangalore_temp, setBangalore_temp] = useState('')
    const [bangalore_feelslike, setBangalore_feelslike] = useState('')
    const [bangalore_humidity, setBangalore_humidity] = useState('')
    const [bangalore_mint, setBangalore_mint] = useState('')
    const [bangalore_maxt, setBangalore_maxt] = useState('')
    const [bangalore_sunr, setBangalore_sunr] = useState('')
    const [bangalore_suns, setBangalore_suns] = useState('')
    const [bangalore_windd, setBangalore_windd] = useState('')
    const [bangalore_winds, setBangalore_winds] = useState('')

    const [indore_cloud, setIndore_cloud] = useState('')
    const [indore_temp, setIndore_temp] = useState('')
    const [indore_feelslike, setIndore_feelslike] = useState('')
    const [indore_humidity, setIndore_humidity] = useState('')
    const [indore_mint, setIndore_mint] = useState('')
    const [indore_maxt, setIndore_maxt] = useState('')
    const [indore_sunr, setIndore_sunr] = useState('')
    const [indore_suns, setIndore_suns] = useState('')
    const [indore_windd, setIndore_windd] = useState('')
    const [indore_winds, setIndore_winds] = useState('')

    const [bareilly_cloud, setBareilly_cloud] = useState('')
    const [bareilly_temp, setBareilly_temp] = useState('')
    const [bareilly_feelslike, setBareilly_feelslike] = useState('')
    const [bareilly_humidity, setBareilly_humidity] = useState('')
    const [bareilly_mint, setBareilly_mint] = useState('')
    const [bareilly_maxt, setBareilly_maxt] = useState('')
    const [bareilly_sunr, setBareilly_sunr] = useState('')
    const [bareilly_suns, setBareilly_suns] = useState('')
    const [bareilly_windd, setBareilly_windd] = useState('')
    const [bareilly_winds, setBareilly_winds] = useState('')

    const [city_cloud, setCity_cloud] = useState('')
    const [city_temp, setCity_temp] = useState('')
    const [city_feelslike, setCity_feelslike] = useState('')
    const [city_humidity, setCity_humidity] = useState('')
    const [city_mint, setCity_mint] = useState('')
    const [city_maxt, setCity_maxt] = useState('')
    const [city_sunr, setCity_sunr] = useState('')
    const [city_suns, setCity_suns] = useState('')
    const [city_windd, setCity_windd] = useState('')
    const [city_winds, setCity_winds] = useState('')

    const [city, setCity] = useState('')
    const cityChange = (event) => {
        setCity(event.target.value);
    }
    // New Delhi
    const q = async () => {
        const option1 = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: "New+Delhi" },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(option1).then(function (response) {
            console.log(response.data);
            setDelhi_cloud(response.data.cloud_pct)
            setDelhi_temp(response.data.temp)
            setDelhi_feelslike(response.data.feels_like)
            setDelhi_humidity(response.data.humidity)
            setDelhi_mint(response.data.min_temp)
            setDelhi_maxt(response.data.max_temp)
            setDelhi_sunr(response.data.sunrise)
            setDelhi_suns(response.data.sunset)
            setDelhi_windd(response.data.wind_degrees)
            setDelhi_winds(response.data.wind_speed)

        }).catch(function (error) {
            console.error(error);
        });

        //Lucknow

        const option11 = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: "New+Delhi" },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(option11).then(function (response) {
            console.log(response.data);
            setLucknow_cloud(response.data.cloud_pct)
            setLucknow_temp(response.data.temp)
            setLucknow_feelslike(response.data.feels_like)
            setLucknow_humidity(response.data.humidity)
            setLucknow_mint(response.data.min_temp)
            setLucknow_maxt(response.data.max_temp)
            setLucknow_sunr(response.data.sunrise)
            setLucknow_suns(response.data.sunset)
            setLucknow_windd(response.data.wind_degrees)
            setLucknow_winds(response.data.wind_speed)

        }).catch(function (error) {
            console.error(error);
        });

        //Varanasi

        const option2 = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: "Varanasi" },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(option2).then(function (response) {
            console.log(response.data);
            setVaranasi_cloud(response.data.cloud_pct)
            setVaranasi_temp(response.data.temp)
            setVaranasi_feelslike(response.data.feels_like)
            setVaranasi_humidity(response.data.humidity)
            setVaranasi_mint(response.data.min_temp)
            setVaranasi_maxt(response.data.max_temp)
            setVaranasi_sunr(response.data.sunrise)
            setVaranasi_suns(response.data.sunset)
            setVaranasi_windd(response.data.wind_degrees)
            setVaranasi_winds(response.data.wind_speed)
        }).catch(function (error) {
            console.error(error);
        });

        //Bangalore

        const option3 = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: "Bangalore" },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(option3).then(function (response) {
            console.log(response.data);
            setBangalore_cloud(response.data.cloud_pct)
            setBangalore_temp(response.data.temp)
            setBangalore_feelslike(response.data.feels_like)
            setBangalore_humidity(response.data.humidity)
            setBangalore_mint(response.data.min_temp)
            setBangalore_maxt(response.data.max_temp)
            setBangalore_sunr(response.data.sunrise)
            setBangalore_suns(response.data.sunset)
            setBangalore_windd(response.data.wind_degrees)
            setBangalore_winds(response.data.wind_speed)
        }).catch(function (error) {
            console.error(error);
        });

        //Indore

        const option4 = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: "Indore" },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(option4).then(function (response) {
            console.log(response.data);
            setIndore_cloud(response.data.cloud_pct)
            setIndore_temp(response.data.temp)
            setIndore_feelslike(response.data.feels_like)
            setIndore_humidity(response.data.humidity)
            setIndore_mint(response.data.min_temp)
            setIndore_maxt(response.data.max_temp)
            setIndore_sunr(response.data.sunrise)
            setIndore_suns(response.data.sunset)
            setIndore_windd(response.data.wind_degrees)
            setIndore_winds(response.data.wind_speed)
        }).catch(function (error) {
            console.error(error);
        });

        //Bareilly

        const option5 = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: "Bareilly" },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(option5).then(function (response) {
            console.log(response.data);
            setBareilly_cloud(response.data.cloud_pct)
            setBareilly_temp(response.data.temp)
            setBareilly_feelslike(response.data.feels_like)
            setBareilly_humidity(response.data.humidity)
            setBareilly_mint(response.data.min_temp)
            setBareilly_maxt(response.data.max_temp)
            setBareilly_sunr(response.data.sunrise)
            setBareilly_suns(response.data.sunset)
            setBareilly_windd(response.data.wind_degrees)
            setBareilly_winds(response.data.wind_speed)
        }).catch(function (error) {
            console.error(error);
        });
    }
    q();
    const submit = async (event) => {
        event.preventDefault();
        var citydata = city;
        //const q = await axios.get(`http://api.weatherstack.com/current?access_key=ca78a641409546bb9824b1c8af7b6591&query=${citydata}`)
        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: `${city}` },
            headers: {
                'X-RapidAPI-Key': '33117cbacemsh3d83ef3e3312033p141470jsn718339808033',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setCity_cloud(response.data.cloud_pct)
            setCity_temp(response.data.temp)
            setCity_feelslike(response.data.feels_like)
            setCity_humidity(response.data.humidity)
            setCity_mint(response.data.min_temp)
            setCity_maxt(response.data.max_temp)
            setCity_sunr(response.data.sunrise)
            setCity_suns(response.data.sunset)
            setCity_windd(response.data.wind_degrees)
            setCity_winds(response.data.wind_speed)
        }).catch(function (error) {
            console.error(error);
        });
        // console.log(q.data)
        // const data = {
        //     temperature:q.data.current.temperature,
        //     feelslike:q.data.current.feelslike,
        //     weather_description : q.data.current.weather_descriptions[0],
        //     wind_speed : q.data.current.wind_speed,
        //     weaimg : q.data.current.weather_icons[0],
        //     city: q.data.request.query
        // }
        //console.log(q.data)
        //props.callback(data);
    }

    return (
        <div>
     
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Weather App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Phone</a></li>
                                    <li><a className="dropdown-item" href="#">Email</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Contact</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={submit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={cityChange} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <form onSubmit={submit}>
        <ul id='list1'>
            <li><input type="text" value={city} onChange={cityChange}/></li>
            <li><button type="submit" className="btn btn-dark">Search</button></li>
        </ul>
        </form> 
            <div className="container">
                <h1>Weather for {city}</h1>
            </div> */}
    <div className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-cen text-white">
                {/* Page heading*/}
                <h1 className="mb-5">Search Weather for City</h1>
                {/* Signup form*/}
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                <form className="form-subscribe" id="contactForm" onSubmit={submit}>
                  {/* Email address input*/}
                  <div className="row">
                    <div className="col">
                      <input className="form-control form-control-lg" id="weatherbut" placeholder="Enter City here"  value={city} onChange={cityChange} />

                    </div>
                    <div className="col-auto"><button className="btn btn-primary" id="submitButton" type="submit">Submit</button></div>
                  </div>
                  {/* Submit success message*/}
                  {/**/}
                  {/* This is what your users will see when the form*/}
                  {/* has successfully submitted*/}
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-cen mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      <p>To activate this form, sign up at</p>
                      <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>
                  {/* Submit error message*/}
                  {/**/}
                  {/* This is what your users will see when there is*/}
                  {/* an error submitting the form*/}
                  <div className="d-none" id="submitErrorMessage"><div className="text-cen text-danger mb-3">Error sending message!</div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-cen">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Temperatures</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{city_temp} <small className="text-muted fw-light"><sup>°</sup>C</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Temperature is {city_temp}</li>
                                    <li>Min Temperature is {city_mint}</li>
                                    <li>Max Temperature is {city_maxt}</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary"></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Wind Info</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{city_winds}<small className="text-muted fw-light"> km/hr</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Windspeed is {city_winds}</li>
                                    <li>Sunrise {city_sunr}</li>
                                    <li>Sunset {city_suns}</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary"></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Humidity</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{city_humidity}<small className="text-muted fw-light"> %</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Humidity is {city_humidity}</li>
                                    <li>Feels Like {city_feelslike}</li>
                                    <li>Wind Degrees {city_winds}</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="display-6 text-cen mb-4">Some common cities</h2>
            <div className="container">
                <div className="table-responsive">
                    <table className="table text-cen">
                        <thead>
                            <tr>
                                <th style={{ width: '34%' }} />
                                <th style={{ width: '22%' }}>Cloud_pct</th>
                                <th style={{ width: '22%' }}>Feels_like</th>
                                <th style={{ width: '22%' }}>Humidity</th>
                                <th style={{ width: '22%' }}>Max_temp</th>
                                <th style={{ width: '22%' }}>Min_temp</th>
                                <th style={{ width: '22%' }}>Sunrise</th>
                                <th style={{ width: '22%' }}>Sunset</th>
                                <th style={{ width: '22%' }}>Temp</th>
                                <th style={{ width: '22%' }}>Wind_degree</th>
                                <th style={{ width: '22%' }}>Wind_speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">New Delhi</th>
                                <td>{delhi_cloud}</td>
                                <td>{delhi_feelslike}</td>
                                <td>{delhi_humidity}</td>
                                <td>{delhi_maxt}</td>
                                <td>{delhi_mint}</td>
                                <td>{delhi_sunr}</td>
                                <td>{delhi_suns}</td>
                                <td>{delhi_temp}</td>
                                <td>{delhi_windd}</td>
                                <td>{delhi_winds}</td>

                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Lucknow</th>
                                <td>{lucknow_cloud}</td>
                                <td>{lucknow_feelslike}</td>
                                <td>{lucknow_humidity}</td>
                                <td>{lucknow_maxt}</td>
                                <td>{lucknow_mint}</td>
                                <td>{lucknow_sunr}</td>
                                <td>{lucknow_suns}</td>
                                <td>{lucknow_temp}</td>
                                <td>{lucknow_windd}</td>
                                <td>{lucknow_winds}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Varanasi</th>
                                <td>{varanasi_cloud}</td>
                                <td>{varanasi_feelslike}</td>
                                <td>{varanasi_humidity}</td>
                                <td>{varanasi_maxt}</td>
                                <td>{varanasi_mint}</td>
                                <td>{varanasi_sunr}</td>
                                <td>{varanasi_suns}</td>
                                <td>{varanasi_temp}</td>
                                <td>{varanasi_windd}</td>
                                <td>{varanasi_winds}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Bangalore</th>
                                <td>{bangalore_cloud}</td>
                                <td>{bangalore_feelslike}</td>
                                <td>{bangalore_humidity}</td>
                                <td>{bangalore_maxt}</td>
                                <td>{bangalore_mint}</td>
                                <td>{bangalore_sunr}</td>
                                <td>{bangalore_suns}</td>
                                <td>{bangalore_temp}</td>
                                <td>{bangalore_windd}</td>
                                <td>{bangalore_winds}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Indore</th>
                                <td>{indore_cloud}</td>
                                <td>{indore_feelslike}</td>
                                <td>{indore_humidity}</td>
                                <td>{indore_maxt}</td>
                                <td>{indore_mint}</td>
                                <td>{indore_sunr}</td>
                                <td>{indore_suns}</td>
                                <td>{indore_temp}</td>
                                <td>{indore_windd}</td>
                                <td>{indore_winds}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Bareilly</th>
                                <td>{bareilly_cloud}</td>
                                <td>{bareilly_feelslike}</td>
                                <td>{bareilly_humidity}</td>
                                <td>{bareilly_maxt}</td>
                                <td>{bareilly_mint}</td>
                                <td>{bareilly_sunr}</td>
                                <td>{bareilly_suns}</td>
                                <td>{bareilly_temp}</td>
                                <td>{bareilly_windd}</td>
                                <td>{bareilly_winds}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container copy">
                2023 &#169; Kartikay
            </div>
        </div>
    )
}
