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
    <div className="bg-slate-200 py-5 w-[96%] rounded-xl border border-blue-200 mx-auto mt-10">
      <h5 className="text-center text-3xl text-yellow-600 font-bold pb-5">Customar reviews</h5>
      <marquee behavior="scroll" scrollamount="15"  >
        <div className=" flex gap-20 border">
          {reviews.map((review, index) => (
            <div className=" border  bg-white p-7 min-w-[350px] max-w-[352px] rounded-xl" key={index}>
              <img src={review.image} alt={`${review.name}'s picture`} className=" w-[80px] h-[80px] mx-auto rounded-full" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black">{review.name}</h3>
                <p className="text-lg">{review.date}</p>
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
