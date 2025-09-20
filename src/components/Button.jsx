
const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex cursor-pointer justify-center items-center gap-2 px-7 py-4 border font-family-montserrat text-lg leading-none 
    ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red hover:bg-coral-red/45"
      } rounded-full ${fullWidth && "w-full"}`}
>
       {label} 
       {iconUrl && <img
       src={iconUrl} alt='icon'
       className='ml-2 rounded-full bg-white w-5 h-5'/>}
    </button>
  )
}

export default Button;