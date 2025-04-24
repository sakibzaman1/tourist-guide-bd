import React from 'react';
import { FaUserGraduate, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import './Community.css';

const students = [
  { id: 1, name: "Ayesha Rahman", email: "ayesha@email.com", phone: "01711-000001", department: "CSE", year: "3rd" },
  { id: 2, name: "Tanvir Hossain", email: "tanvir@email.com", phone: "01711-000002", department: "EEE", year: "2nd" },
  { id: 3, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 4, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 5, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 6, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 7, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 8, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 9, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
  { id: 10, name: "Nusrat Jahan", email: "nusrat@email.com", phone: "01711-000003", department: "BBA", year: "1st" },
];

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 p-10 bg-white shadow-2xl rounded-2xl">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700 flex justify-center items-center gap-4">
        <FaUserGraduate className="text-5xl" /> Student Management Panel
      </h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg text-lg">
          <thead>
            <tr className="bg-blue-200 text-blue-900 text-xl">
              <th className="border px-6 py-4 text-left">#</th>
              <th className="border px-6 py-4 text-left">Name</th>
              <th className="border px-6 py-4 text-left">Email</th>
              <th className="border px-6 py-4 text-left">Phone</th>
              <th className="border px-6 py-4 text-left">Department</th>
              <th className="border px-6 py-4 text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {students.map((student, index) => (
              <tr key={student.id} className="hover:bg-gray-100 transition-all duration-200">
                <td className="border px-6 py-4 font-medium">{index + 1}</td>
                <td className="border px-6 py-4">{student.name}</td>
                <td className="border px-6 py-4 flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" /> {student.email}
                </td>
                <td className="border px-6 py-4 flex items-center gap-2">
                  <FaPhoneAlt className="text-green-500" /> {student.phone}
                </td>
                <td className="border px-6 py-4">{student.department}</td>
                <td className="border px-6 py-4">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Community;
