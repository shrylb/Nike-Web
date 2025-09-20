import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-family-palanquin text-center text-4xl font-bold'>
        What Our 
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max=w-lg text-center'>
        Hear geniune stories from our satisfied customers about their exceptional experiences with us
      </p>

      <div className='mt-24 flex felx-1 justify-evenly itmes-center max-lg:flex-col gap-14'>
      {reviews.map((review)=>(
        <ReviewCard
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
        />
      ))}
      </div>
    </section>
  )
}

export default CustomerReviews