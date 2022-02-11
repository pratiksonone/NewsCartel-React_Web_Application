import React from 'react'
import imageNotAvailable from './ImageNotAvailable.png'
export default function Newsitem(props) {

    let { title, description, image, author, date, url } = props;



    return (
        <>
            <section className=" body-font m-0">
                <div className="py-2 px-2 lg:px-3 lg:py-3 mx-auto lg:mx-10 my-4 lg:flex border-2 border-gray-200 bg-slate-100">

                    <img className="h-60 w-full p-1  lg:w-1/3 lg:h-full rounded-md object-cover object-center" src={!image ? imageNotAvailable : image} alt="Not Found" />
                    <div className="flex flex-col m-1 mt-3 lg:m-3 lg:ml-5">
                        <h2 className="text-lg lg:text-xl text-gray-900 font-medium title-font my-2 lg:-mt-3">{title}</h2>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-2">Author - {!author ? "Unknown" : author}</h3>

                        <p className="leading-relaxed text-base mb-2">{description}</p>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Published on {new Date(date).toGMTString()}</h3>
                        <div className="flex align-bottom justify-center md:justify-start">
                            <a rel="noreferrer" href={url} target="_blank" className="border-2 border-gray-500 p-1 mt-4 hover:text-blue-800 hover:border-blue-500 ">Read More</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
