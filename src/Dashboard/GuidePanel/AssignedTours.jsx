import React from 'react';

const AssignedTours = () => {
  // Mock data for assigned subjects
  const subjects = [
    {
      id: 1,
      name: 'Data Structures',
      code: 'CSE201',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 2,
      name: 'Operating Systems',
      code: 'CSE301',
      semester: 'Spring 2026',
      credits: 4,
      department: 'CSE'
    },
    {
      id: 3,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 5,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 6,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 7,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 8,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    },
    {
      id: 9,
      name: 'Database Systems',
      code: 'CSE310',
      semester: 'Fall 2025',
      credits: 3,
      department: 'CSE'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-center my-20">Assigned Subjects</h1>

      {subjects.length === 0 ? (
        <div className="text-center text-gray-500">No subjects assigned.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <div key={subject.id} className="border p-4 rounded-xl shadow-md bg-white">
              <h2 className="text-xl font-bold mb-1">{subject.name}</h2>
              <p><strong>Code:</strong> {subject.code}</p>
              <p><strong>Semester:</strong> {subject.semester}</p>
              <p><strong>Credits:</strong> {subject.credits}</p>
              <p><strong>Department:</strong> {subject.department}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedTours;
