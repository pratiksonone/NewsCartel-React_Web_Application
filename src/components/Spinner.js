import React from 'react'
import loading from './loading.gif'

const Spinner = (Padding) => {
    return (
        <div className={`flex items-center justify-center pb-${Padding}`}>
            <img className="m-4 p-4 sm:m-5 md:m-6 lg:m-8 xl:m-10 2xl:m-12" src={loading} alt="loading" />
        </div>
    )
}

export default Spinner