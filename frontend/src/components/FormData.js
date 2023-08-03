import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Patient = () => {
  const [telephone, setTelephone] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [county, setCounty] = useState('');
  const [subCounty, setSubCounty] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [kinName, setKinName] = useState('');
  const [kinDob, setKinDob] = useState('');
  const [kinIdNumber, setKinIdNumber] = useState('');
  const [kinGender, setKinGender] = useState('');
  const [kinRelationship, setKinRelationship] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      telephone,
      name,
      dob,
      idNumber,
      address,
      county,
      subCounty,
      email,
      gender,
      maritalStatus,
      nextOfKin: {
        name: kinName,
        dob: kinDob,
        idNumber: kinIdNumber,
        gender: kinGender,
        relationship: kinRelationship,
      },
    };
  
  
  fetch('http://localhost:9292/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Form submitted!', data);

    
      alert('Form submitted successfully!');

      const templateParams = {
        to_email: formData.email,
        subject: formData.name,
        message: formData.name,
        telephone: formData.telephone,
        address: formData.address,
      };
// email messaging service, change the service id to your emailjs service id 
      emailjs
        .send('service_wt2d74l', 'template_sn6n67c', templateParams, 'idTLnUqMsdu3F0IAc')
        .then((response) => {
          console.log('Email sent successfully!', response);
          window.location.reload(); // Reload the page after successful email sending
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });
};

  return (
    <form
    onSubmit={handleSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
      margin: "0 auto",
    }}
  >
    <h2>Patients Registration Form</h2>
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="telephone">Telephone:</label>
      <input
        type="text"
        id="telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="idNumber">ID Number:</label>
      <input
        type="number"
        id="idNumber"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="address">Address:</label>
      <textarea
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="county">County:</label>
      <input
        type="text"
        id="county"
        value={county}
        onChange={(e) => setCounty(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="subCounty">Sub County:</label>
      <input
        type="text"
        id="subCounty"
        value={subCounty}
        onChange={(e) => setSubCounty(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="maritalStatus">Marital Status:</label>
      <input
        type="text"
        id="maritalStatus"
        value={maritalStatus}
        onChange={(e) => setMaritalStatus(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <h2>Next of Kin</h2>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="kinName">Name:</label>
      <input
        type="text"
        id="kinName"
        value={kinName}
        onChange={(e) => setKinName(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="kinDob">Date of Birth:</label>
      <input
        type="date"
        id="kinDob"
        value={kinDob}
        onChange={(e) => setKinDob(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="kinIdNumber">ID Number:</label>
      <input
        type="number"
        id="kinIdNumber"
        value={kinIdNumber}
        onChange={(e) => setKinIdNumber(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="kinGender">Gender:</label>
      <input
        type="text"
        id="kinGender"
        value={kinGender}
        onChange={(e) => setKinGender(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="kinRelationship">Relationship:</label>
      <input
        type="text"
        id="kinRelationship"
        value={kinRelationship}
        onChange={(e) => setKinRelationship(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  
    <button type="submit" style={{ width: "100%", padding: "10px" }}>
      Submit
    </button>
  </form>
  );
};

export default Patient;