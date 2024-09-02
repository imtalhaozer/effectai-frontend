import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export const Navbar = () => {
    const Bar=[
        {
            text:"Ürünümüz",
            path:"/urun",
        },
        {
            text:"Özellikler",
            path:"/ozellikler"
        },
        {
            text:"Ücretlendirme",
            path:"/ucretlendirme"
        },
        {
            text:"İletişim",
            path:"/iletisim"
        }
    ]
  return (
    <div className='flex bg-inherit pt-[3vh] justify-between'>
        <div className='items-center ml-[2vw]'>
            <Link to={"/"} className='flex items-center'>
                <img src={logo} alt="logo" className='w-[4vw]' />
                <p className='text-white text-[2vw] ml-[0.5vw]'>effect.ai</p>
            </Link>
        </div>
        <div  className="flex justify-center">
            <ul className='flex space-x-[2vw] items-center'>
                {
                    Bar.map((data,index)=>(
                        <li className='items-center'>
                            <Link to={data.path} key={index} className='text-white text-[1.5vw]'>
                                {data.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="flex mr-[2vw]">
            <div className='flex items-center space-x-[1vw]'>
                <div className='flex justify-center items-center  border-collapse rounded-3xl border-[2px] w-[7vw] h-[3vw]'>
                    <Link to={"/kayit"} className='text-white flex text-[1.3vw] ' >
                        Kayıt ol
                    </Link>
                </div>
                <div className='flex justify-center items-center bg-white border-collapse rounded-3xl border-[2px] w-[7vw] h-[3vw] '>
                    <Link to={"/giris"} className='text-primary text-[1.3vw]' >
                        Giriş
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
