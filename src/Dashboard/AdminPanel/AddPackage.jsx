import React from "react";
import swal from "sweetalert";

const AddCourse = () => {
  const handleAddCourse = (e) => {
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

    const newCourse = {
      image,
      image1,
      image2,
      image3,
      tourType,
      tripTitle,
      price,
      aboutTour,
      tourPlan: [day1, day2, day3, day4],
      tourGuides: [{ name, experience, language, guideImage }],
    };

    fetch('https://tourist-guide-server-seven.vercel.app/packages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        swal({
          icon: 'success',
          title: 'Course Added',
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content w-full">
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-slate-200">
          <form onSubmit={handleAddCourse} className="card-body">
            <h1 className="font-Ephesis text-4xl">Add a Course</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Thumbnail URL</span>
              </label>
              <input name="image" type="text" className="input input-bordered" required />
            </div>

            <div className="divider">Gallery Images</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gallery Image 1 URL</span>
              </label>
              <input name="image1" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gallery Image 2 URL</span>
              </label>
              <input name="image2" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gallery Image 3 URL</span>
              </label>
              <input name="image3" type="text" className="input input-bordered" required />
            </div>

            <div className="divider">Course Details</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Category</span>
              </label>
              <input name="tourType" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Title</span>
              </label>
              <input name="tripTitle" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Fee</span>
              </label>
              <input name="price" type="text" className="input input-bordered" required />
            </div>

            <div className="divider">Syllabus Breakdown</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Module 1</span>
              </label>
              <input name="day1" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Module 2</span>
              </label>
              <input name="day2" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Module 3</span>
              </label>
              <input name="day3" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Module 4</span>
              </label>
              <input name="day4" type="text" className="input input-bordered" required />
            </div>

            <div className="divider">Course Overview</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Description</span>
              </label>
              <input name="aboutTour" type="text" className="input input-bordered" required />
            </div>

            <div className="divider">Instructor Information</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name (Unique)</span>
              </label>
              <input name="name" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Teaching Experience</span>
              </label>
              <input name="experience" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Photo URL</span>
              </label>
              <input name="guideImage" type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Language of Instruction</span>
              </label>
              <input name="language" type="text" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Course</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
