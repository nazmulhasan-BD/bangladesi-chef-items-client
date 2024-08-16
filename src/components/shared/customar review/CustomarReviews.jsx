/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";


const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className="bg-slate-300 py-5 w-full rounded-xl mt-10">
      <h5 className="text-center sm:text-xl p-1 sm:w-48 w-[150px]  mx-auto rounded-lg  bg-green-600 text-white font-bold mb-5">Customar reviews</h5>
      <marquee behavior="" scrollamount="15"  >
        <div className=" flex sm:gap-20 gap-10 ">
          {reviews.map((review, index) => (
            <div className=" border  bg-white md:p-7 p-4  lt:min-w-[341px] min-w-[240px] max-w-[241px] lt:max-w-[342px] rounded-xl" key={index}>
              <img src={review.image} alt={`${review.name}'s picture`} className=" sm:w-20 w-16 sm:h-20 h-16 mx-auto rounded-full" />
              <div className="text-center">
                <h3 className="sm:text-xl text-lg font-semibold text-black">{review.name}</h3>
                <p className="sm:text-lg">{review.date}</p>
                <p className="text-wrap text-justify mt-2"> {review?.review}</p>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default CustomerReviews;
