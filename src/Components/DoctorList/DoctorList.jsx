import React from 'react';
import './DoctorList.css';
import doctors from '../../assets/doctor.json';

const DoctorList = () => {
  return (
    <div className="doctor-list-container">
      <div className="table-container">
      <table className="doctor-table">
      <thead>
          <tr>
            <th>의사 이름</th>
            <th>전공</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DoctorList;
