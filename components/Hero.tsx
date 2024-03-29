"use client"
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Anytime you need a car,
        </h1>
        <p className="hero__subtitle">24 hours a day
Even in the middle of the night or on weekends, you can use your smartphone
Regardless of time Move with socar.</p>

      <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} btnType={'button'} />

      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero'
          fill className='object-contain'/>
          </div>
          <div className='hero__image-overlay'>
        </div>
      </div>
    </div>
  )
}

export default Hero;