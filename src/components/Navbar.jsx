import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ color1, color2 }) => {
    const Bar = [
        {
            text: "Ürünümüz",
            path: "/urun",
        },
        {
            text: "Özellikler",
            path: "/ozellikler"
        },
        {
            text: "Ücretlendirme",
            path: "/ucretlendirme"
        },
        {
            text: "İletişim",
            path: "/iletisim"
        }
    ];

    return (
        <div className='flex pt-[3vh] justify-between h-[12vh]' style={{background:color2}}>
            <div className='items-center ml-[2vw]'>
                <Link to={"/"} className='flex items-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        className={`fill-current w-[4vw]`} 
                        style={{ color: color1 }}  
                    >
                        <path d="m13.5,6h-3.5c-1.378,0-2.5,1.121-2.5,2.5v9.5h2v-4h4c2.206,0,4-1.794,4-4s-1.794-4-4-4Zm0,6h-4v-3.5c0-.275.224-.5.5-.5h3.5c1.103,0,2,.897,2,2s-.897,2-2,2ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z" />
                    </svg>
                    <p className={`text-[2vw] ml-[0.5vw]`} style={{ color: color1 }}>effect.ai</p>
                </Link>
            </div>
            <div className="flex justify-center">
                <ul className='flex space-x-[2vw] items-center'>
                    {Bar.map((data, index) => (
                        <li className='items-center' key={index}>
                            <Link to={data.path} className='text-[1.5vw]' style={{ color: color1 }}>
                                {data.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex mr-[2vw]">
                <div className='flex items-center space-x-[1vw]'>
                    <div className='flex justify-center items-center border-collapse rounded-3xl border-[2px] w-[7vw] h-[3vw]' style={{ backgroundColor: color1 }}>
                        <Link to={"/kayit"} className='flex text-[1.3vw]' style={{ color: color2 }}>
                            Kayıt ol
                        </Link>
                    </div>
                    <div className='flex justify-center items-center border-collapse rounded-3xl border-[2px] w-[7vw] h-[3vw]' style={{ backgroundColor: color2, borderColor: color1 }}>
                        <Link to={"/giris"} className='text-[1.3vw]' style={{ color: color1 }}>
                            Giriş
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
