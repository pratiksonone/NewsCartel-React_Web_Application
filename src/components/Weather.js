import React, { useEffect, useState } from 'react';
import weatherBg from "./weatherBG.jpg"
import weatherIcon from "./weather.png"

export default function Weather(props) {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("")

    const myStyle = {
        backgroundImage: `url(" ${weatherBg} ")`,
        position: 'relative',
        zindex: '-1',
        opacity: '1',
        height: 'full',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b12e1bdef4f0a278f9f418ae4f1c778c`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setCity(parsedData.main, parsedData.weather);

        }
        fetchWeather();
    }, [search])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <>

            <div className=' px-10 py-20 pb-full sm:px-32 md:px-50 lg:px-80 lg:py-30 m-0 bg-gradient-to-tr from-cyan-200 to-blue-600' >
                <div className=" rounded-3xl py-1 lg:px-1 lg:py-1 lg:flex my-20 bg-slate-300 shadow-2xl shadow-black" style={myStyle}>

                    <div className=" p-3  mx-auto flex items-center justify-center">

                        <div className="flex flex-col items-center justify-center">
                            <input type="search" value={search} placeholder='City' className='rounded-2xl p-2 px-3 outline-none font-bold bg-gradient-to-tr from-cyan-200 to-blue-600 border-2 border-black hover:border-slate-800 text-blue-800 placeholder-slate-900' onChange={(event) => { setSearch(event.target.value) }} />
                            {!search ? (
                                <p className='font-serif font-bold my-28 text-2xl text-center '>Enter Your City Name To Get The Weather</p>
                            ) : (
                                <div>
                                    {!city ? (
                                        <p className='font-serif font-bold my-28 text-2xl '>No Data Found</p>
                                    ) : (

                                        <div className='mt-4'>
                                            <img className='w-40 h-50 mx-auto -mb-14 ' src={weatherIcon} alt="" />
                                            <div className="lg:text-2xl text-gray-900/90 font-bold title-font my-2 text-center text-2xl ">{capitalizeFirstLetter(search)}</div>
                                            <h3 className=" text-red-900 text-3xl font-bold title-font mb-2 mt-6 text-center proportional-nums">{city.temp} °C</h3>

                                            <p className="leading-relaxed text-center text-lg text-black font-bold mb-2 font-sans">Humidity : {city.humidity} %</p>
                                            <div className=" text-indigo-900 text-lg font-medium title-font text-center flex items-center justify-center"><p className='text-green-900 mx-2'>Min : {city.temp_min} °C</p> | <p className='text-rose-900 mx-2'> Max : {city.temp_max} °C</p></div>

                                        </div>

                                    )
                                    }
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};