import React from 'react';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import mockup from '../assets/mockup.avif';
import { Link } from 'react-router-dom';
import gplay from '../assets/gplay.svg';
import apple from '../assets/apple.svg';

const texts = [
  'Yapay Zeka Destekli',
  'Sosyal Medya Yönetimi'
];

const buttons = [
  { src: gplay, alt: 'gplay_logo', text: 'Google Play', link: '/gplay' },
  { src: apple, alt: 'apple_logo', text: 'Apple Store', link: '/apple' }
];

export const HomeLayer1 = () => {
  return (
    <div className='bg-gradient-to-b from-primary to-secondary h-screen w-screen grid grid-rows-[auto_1fr_auto] grid-cols-1'>
      <div className='z-10'>
        <Navbar />
      </div>
      <div className='flex flex-col items-center justify-center'>
        {texts.map((text, index) => (
          <motion.div
            key={index}
            initial={{ x: index === 0 ? '-30%' : '50%', y: '0%' }}
            animate={{ x: '0%', y: '0%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='text-white text-[4vw] font-bold'
          >
            {text}
          </motion.div>
        ))}
      </div>
      <div className='relative flex flex-col items-center'>
        <motion.div
          animate={{
            x: 0,
            y: 0,
            scale: 1.3,
            rotate: 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className='relative z-20' // Mockup için yüksek z-index
        >
          <img src={mockup} alt="phone-mockup" className='w-[27vw]' />
        </motion.div>
        <div className='absolute bottom-[10vh] right-[5vw] flex flex-col space-y-4 z-10'>
          {buttons.map((button, index) => (
            <div
              key={index}
              className='flex justify-center items-center border-collapse rounded-3xl border-[2px] w-[7vw] h-[3vw]'
            >
              <Link to={button.link} className='text-white flex text-[0.9vw]'>
                <img src={button.src} alt={button.alt} className='mr-[0.5vw] w-[1vw]' />
                {button.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
