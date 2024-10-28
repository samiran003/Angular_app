// src/components/Profile.js
import React from 'react';
import './Sidebar.css'; 

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="sticky-title">
                <h2>Profile</h2>  {/* Updated with your name */}
            </div>
            <div className="scrollable-content">
    <h4>Summary</h4>
    <p>
        Hi, I’m Aryan Jamatia, and I’m currently pursuing a Bachelor of Computer Applications (BCA) with a focus on Data Science at Assam Down Town University in Guwahati. As a second-year student, I have developed a solid foundation in web development, including proficiency in technologies like React.js, Java, Django and PHP, as well as experience in MySQL for database management. I’m actively working on a railway reservation system project that features user authentication, real-time ticket availability, and a responsive web interface. Additionally, I’m developing a personal React application to showcase my achievements and academic details. I’m eager to expand my programming skills and explore opportunities in data science and machine learning, all while contributing to innovative projects.
    </p>
    <h4>Personal Details</h4>
    
    <table className="personal-details-table">
        <tbody>
            <tr>
                <td>Name</td>
                <td>Aryan Jamatia</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>01-09-2005</td>
            </tr>
            <tr>
                <td>Father's Name</td>
                <td>Kaithar Jamatia</td>
            </tr>
            <tr>
                <td>Mother's Name</td>
                <td>Chhaya Jamatia</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>Narangi, Guwahati, Assam 781026</td>
            </tr>
        </tbody>
    </table>
    <p></p>
    <h4>Hobbies</h4>
    <table className="personal-details-table">
    <tbody>
        <tr>
            <td>Reading Novels</td>
            <td>Fantasy, Mystery/Thriller, Horror, Adventure</td>
        </tr>
        <tr>
            <td>Playing Video Games</td>
            <td>Mobile Legends, BGMI, COD Mobile</td>
        </tr>
        <tr>
            <td>Outdoor Games</td>
            <td>Badminton, Football, Volleyball</td>
            
        </tr>
        <tr>
    <td>Learning</td>
    <td>Programming, Database Management Systems (DBMS), Web Development, Python</td>
</tr>
       
    </tbody>    
    </table>
</div>

        </div>
    );
};

export default Profile;
