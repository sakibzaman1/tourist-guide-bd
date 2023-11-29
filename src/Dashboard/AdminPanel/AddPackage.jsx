import React from "react";
import swal from "sweetalert";

const AddPackage = () => {
  const handleAddPackage = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const image = form.get("image");
    const image1 = form.get("image1");
    const image2 = form.get("image2");
    const image3 = form.get("image3");
    const tourType = form.get("tourType");
    const tripTitle = form.get("tripTitle");
    const price = form.get("price");
    const aboutTour = form.get("aboutTour");
    const day1 = form.get("day1");
    const day2 = form.get("day2");
    const day3 = form.get("day3");
    const day4 = form.get("day4");
    const name = form.get("name");
    const experience = form.get("experience");
    const language = form.get("language");
    const guideImage = form.get("guideImage");

    console.log(image, image1, image2, image3, tourType, tripTitle, price, aboutTour, day1, day2, day3, day4,name, language, experience, guideImage );

    const newPackage = {
        image, image1, image2, image3, tourType, tripTitle, price, aboutTour, tourPlan : [day1, day2, day3, day4], tourGuides : [{name, experience, language, guideImage}]
    }
    console.log(newPackage);

        // send data to the server

        fetch('https://tourist-guide-server-seven.vercel.app/packages', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Package Added',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
            }
        });
  };

  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content w-full">
          <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <form onSubmit={handleAddPackage} className="card-body">
              <h1>Add a Package</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 1 URL</span>
                </label>
                <input
                  name="image1"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 2 URL</span>
                </label>
                <input
                  name="image2"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image 3 URL</span>
                </label>
                <input
                  name="image3"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tour Type</span>
                </label>
                <input
                  name="tourType"
                  type="text"
                  placeholder="tour type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Trip Title</span>
                </label>
                <input
                  name="tripTitle"
                  type="text"
                  placeholder="trip title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tour Plan Day 1</span>
                </label>
                <input
                  name="day1"
                  type="text"
                  placeholder="day1"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tour Plan Day 2</span>
                </label>
                <input
                  name="day2"
                  type="text"
                  placeholder="day4"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tour Plan Day 3</span>
                </label>
                <input
                  name="day3"
                  type="text"
                  placeholder="day3"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tour Plan Day 4</span>
                </label>
                <input
                  name="day4"
                  type="text"
                  placeholder="day4"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">About Tour</span>
                </label>
                <input
                  name="aboutTour"
                  type="text"
                  placeholder="about tour"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Guide Name ( Unique field )</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="guide name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Guide Experience</span>
                </label>
                <input
                  name="experience"
                  type="text"
                  placeholder="guide experience"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Guide Image</span>
                </label>
                <input
                  name="guideImage"
                  type="text"
                  placeholder="guide image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <input
                  name="language"
                  type="text"
                  placeholder="language"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Package</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
