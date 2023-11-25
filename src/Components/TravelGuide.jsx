import React from "react";

const TravelGuide = ({ tourPackage }) => {
  const { tourGuides } = tourPackage;
  console.log(tourGuides);
  // const [name, experience, guideImage, language] = tourGuides;

  return (
    <tbody>
      {tourGuides.map((guide) => (
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={guide.guideImage}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
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
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TravelGuide;
