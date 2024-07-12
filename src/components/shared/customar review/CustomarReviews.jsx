/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";


const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  console.log(reviews);
  return (
    <div className="bg-slate-200 w-[98%] rounded-xl border border-blue-200 mx-auto mt-10">
      <h5 className="text-center text-3xl text-yellow-600 font-bold p-3">Customar reviews</h5>

      <marquee scrollamount="10" behavior="scroll" >
        <div className=" flex gap-20  border">
          {reviews.map((review, index) => (
            <div className=" border  bg-white p-7 rounded-xl " key={index}>
              <img src={review.image} alt={`${review.name}'s picture`} className=" w-[80px] h-[80px] mx-auto rounded-full" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black">{review.name}</h3>
                <p className="text-lg">{review.date}</p>
                <p>{review?.review}</p>
              </div>
            </div>
          ))}
        </div>
      </marquee>

    </div>
  );
};

export default CustomerReviews;
