import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackageBooking = ({guide, price}) => {

    const [startDate, setStartDate] = useState(new Date());


    console.log(guide, price)


    const handleBooking = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
              const name = form.get("name");
              const email = form.get("email");
              const photo = form.get("photo");
              const price = form.get("price");
              const guide = form.get("guide");
              const date = startDate;
      
              console.log(name, email, photo, price, date, guide)
      
       }

    return (
        <div>
              <section>
      <h1 className="text-5xl my-10 font-Ephesis">Booking Form</h1>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-right">
      <h1 className="text-5xl font-bold">Book Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
      <form onSubmit={handleBooking} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Package Price</span>
          </label>
          <input defaultValue={price} name="price"  readOnly type="text" placeholder="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Guide</span>
          </label>
          <input defaultValue={guide} name="guide"  readOnly type="text" placeholder="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <div className="flex items-center gap-6 my-6">
          <span>Date of Tour </span><DatePicker className="border-2 p-2" selected={startDate} onChange={(date)  => setStartDate(date)} />
          </div>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </section>
        </div>
    );
};

export default PackageBooking;