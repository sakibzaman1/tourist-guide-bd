import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const TravelGuide = ({ tourPackage }) => {

  const {goToTop} = useContext(AuthContext);
  const { tourGuides } = tourPackage;
  console.log(tourGuides);
  // const [name, experience, guideImage, language] = tourGuides;

  return (
    <tbody>
      {tourGuides.map((guide) => (
        <tr key={guide._id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">{guide.name}</div>
              </div>
            </div>
          </td>
          <td>
            {guide.experience}
            <br />
          </td>
          <td>{guide.language}</td>
          <th>
            <Link to={`/guideDetails/${guide.name}`}><button onClick={goToTop} className="btn btn-ghost btn-xs">details</button></Link>
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TravelGuide;
