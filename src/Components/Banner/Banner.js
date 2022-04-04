import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row my-5">
            <div className="md:w-3/5 md:my-auto mx-3">
                <h1 className="text-3xl md:text-5xl font-medium text-gray-800"><span className="text-black font-bold">Redmi</span> Buds 3 pro</h1>
                <h2 className="my-2.5 text-2xl md:text-3xl text-gray-500 font-medium">The sound you want</h2>
                <p className="mt-3.5">35dB Smart noise cancellation* | Dual-device connectivity |<br /> Wireless charging | 28h long battery life</p>
            </div>
            <div className="md:w-2/5 m-1.5">
                <img className="p-1.5 h-96 mx-auto rotate-12" src="https://www.panmi.com.au/wp-content/uploads/2021/10/Redmi_Buds_3_Pro_grey-product_pictures_5.png"
                    alt="Redmi Buds 3 Pro" />
            </div>
        </div>
    );
};

export default Banner;