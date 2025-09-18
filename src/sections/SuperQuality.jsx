import Button  from '../components/Button'
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" 
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-family-palanquin text-4xl capitalize font-bold lg:max-w-lg'>  
            We Provide You <span className='text-coral-red'>  
            Super  </span> <br/>
            <span className='text-coral-red'>
            Quality </span> Shoes

        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
            Our shoes are made from high-quality materials and crafted with care to ensure durability and comfort. We take pride in our attention to detail and commitment to excellence, so you can trust that you're getting the best when you choose our brand.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our shoes are designed to provide both style and functionality, so you can look and feel your best no matter where your day takes you.
        </p>
        <div className='mt-11'>
        <Button label="View details"/>
        </div>
      </div>
      <div>
        <img src={shoe8}
        alt="shoe8"
        width={570} height={522}
        className='object-contain'/>
      </div>
      

    </section>
  )
}

export default SuperQuality