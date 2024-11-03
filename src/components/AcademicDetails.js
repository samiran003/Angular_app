// src/components/AcademicDetails.js
import React from 'react';

const AcademicDetails = () => {
    return (
        <div className="profile-container">
            <div className="sticky-title">
                <h2>Academic Details</h2>  {/* Updated with your name */}
            </div>
            <div className="scrollable-content">
                <p></p>
            <table className="personal-details-table">
    <tbody>
        <tr className='heading-col'>
            <td>Class/Course</td>
            <td>School/Institude Name</td>
            <td>Passing Year</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>Sankardev Vidya Niketan, Tamulpur</td>
            <td>2021</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>Tamulpur H/S School, Tamulpur</td>
            <td>2023</td>
        </tr>
        <tr>
            <td>Bachelor of Computer Application</td>
            <td>Assam Down Town University</td>
            <td>2026</td>
        </tr>
       
    </tbody>    
    </table>
            </div>
        </div>
    );
};

export default AcademicDetails;
