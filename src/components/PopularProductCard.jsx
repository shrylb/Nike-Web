import {star} from "../assets/icons"
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <div className="hover-grow:hover hover-grow">
          <img
          src={imgURL} alt={name} 
          className="w-[280px] h-[280px]"/>
        </div>
        <div className="mt-8 flex justify-start gap-2.5">
            <img
            src={star} alt="rating"
            width={22} height={22}/>
            <p className="font-family-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
            </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-family-palanquin"
        data-aos="fade-right">{name}</h3>
        <p className="mt-2 font-semibold font-family-montserrat text-coral-red text-2xl leading-normal"
        data-aos="fade-right"
        >{price}</p>
    </div>
  )
}

export default PopularProductCard