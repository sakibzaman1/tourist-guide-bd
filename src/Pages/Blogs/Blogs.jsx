import React from 'react';
import { FaChalkboardTeacher, FaClock, FaBookOpen } from "react-icons/fa";

const courseData = [
  {
    id: 1,
    image: "https://i.ibb.co/SrsYzmz/edu1.jpg",
    title: "Data Structures & Algorithms",
    instructor: "Dr. Mahmud Hasan",
    duration: "3 Months",
    description: "Master the foundations of data structures and algorithms essential for programming and interviews.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/YR0hFDf/edu2.jpg",
    title: "Digital Marketing Basics",
    instructor: "Ms. Sharmeen Aktar",
    duration: "2 Months",
    description: "Explore digital strategies, SEO, and social media marketing in this beginner-friendly course.",
  },
  {
    id: 3,
    image: "https://i.ibb.co/fM9j1Cj/edu3.jpg",
    title: "Electrical Circuit Design",
    instructor: "Engr. Tareq Islam",
    duration: "4 Months",
    description: "Get hands-on with practical knowledge on how circuits work and how to design them.",
  },
  {
    id: 4,
    image: "https://i.ibb.co/fM9j1Cj/edu3.jpg",
    title: "Electrical Circuit Design",
    instructor: "Engr. Tareq Islam",
    duration: "4 Months",
    description: "Get hands-on with practical knowledge on how circuits work and how to design them.",
  },
  {
    id: 5,
    image: "https://i.ibb.co/fM9j1Cj/edu3.jpg",
    title: "Electrical Circuit Design",
    instructor: "Engr. Tareq Islam",
    duration: "4 Months",
    description: "Get hands-on with practical knowledge on how circuits work and how to design them.",
  },
  {
    id: 6,
    image: "https://i.ibb.co/fM9j1Cj/edu3.jpg",
    title: "Electrical Circuit Design",
    instructor: "Engr. Tareq Islam",
    duration: "4 Months",
    description: "Get hands-on with practical knowledge on how circuits work and how to design them.",
  },
  {
    id: 7,
    image: "https://i.ibb.co/fM9j1Cj/edu3.jpg",
    title: "Electrical Circuit Design",
    instructor: "Engr. Tareq Islam",
    duration: "4 Months",
    description: "Get hands-on with practical knowledge on how circuits work and how to design them.",
  },
  {
    id: 8,
    image: "https://i.ibb.co/fM9j1Cj/edu3.jpg",
    title: "Electrical Circuit Design",
    instructor: "Engr. Tareq Islam",
    duration: "4 Months",
    description: "Get hands-on with practical knowledge on how circuits work and how to design them.",
  }
];

const Blogs = () => {
  return (
    <div className='bg-slate-100 py-4 px-10'>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Available Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map(course => (
            <div key={course.id} className="bg-white p-5 rounded-lg shadow-md">
              <img src={course.image} alt={course.title} className="mb-4 rounded-md h-48 w-full object-cover" />
              <h2 className="text-xl font-bold text-green-600 mb-2 flex items-center gap-2">
                <FaBookOpen /> {course.title}
              </h2>
              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaChalkboardTeacher className="text-blue-500" /> Instructor: {course.instructor}
              </p>
              <p className="text-gray-700 mb-4 flex items-center gap-2">
                <FaClock className="text-yellow-500" /> Duration: {course.duration}
              </p>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <a href="#" className="text-green-600 hover:underline font-semibold">Enroll Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
