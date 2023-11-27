
import { Link, useLoaderData } from "react-router-dom";
import PackageBooking from "./PackageBooking";
import PackageGallery from "./PackageGallery";
import { IoPersonCircle } from "react-icons/io5";

const PackageDetails = () => {

const loadedPackage = useLoaderData();
console.log(loadedPackage)
  // const { id } = useParams();
  // console.log(id);
  // const idInt = parseInt(id);

  // const filteredPackage = loadedPackages.find((tourPackage) => tourPackage.id === idInt);

  const {_id, image, image1, image2, image3, tourType, tripTitle, tourPlan, price, aboutTour, tourGuides} = loadedPackage;

  const guide = tourGuides[0]?.name;
  


  return (
    <div>
      <div>
        <PackageGallery key={_id} image1={image1} image2={image2} image3={image3}></PackageGallery>
      </div>
      <div>
      <div
            
            className="hero min-h-screen bg-base-200 "
            style={{ backgroundImage: ` url(${image})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content flex-col lg:flex-row text-white">
             
              <div>
                <h1 className="text-5xl font-bold">{tripTitle}</h1>
                <p className="py-6">{aboutTour}<span className="font-Ephesis ml-2">{tourType}</span></p>
                <div>
                  <h1 className="text-3xl my-6 font-Ephesis">Tour Plan</h1>
                  {tourPlan.map((activity, index) => (
                    <p key={index} className="mb-4 text-xl ">
                      {activity}
                    </p>
                  ))}
                </div>
                <div className="divider"></div>
                <hr />
                <div className="mt-10">
                  <h1 className="text-3xl my-10 font-Ephesis">Tour Guide</h1>
                  {tourGuides.map((guide) => (
                    <div>
                      <h1>Name : {guide.name}</h1>
                      <p>Experience : {guide.experience}</p>
                      <p>Languages : {guide.language}</p>
                      <div className="flex items-center gap-2 justify-center mt-6">
                      <IoPersonCircle size={30}></IoPersonCircle>
                      <Link to={`/guideDetails/${guide.name}`}><button className="btn btn-ghost btn-xl font-mono">Guide details</button></Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        <div>
          <PackageBooking
            key={_id}
            price={price}
            guide={guide}
            tripTitle={tripTitle}
          ></PackageBooking>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
