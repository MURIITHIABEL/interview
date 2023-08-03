import React, { useState } from 'react';

const PatientsRegistrationForm = () => {
  // State variables to hold form data
  const [telephone, setTelephone] = useState('');
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [county, setCounty] = useState('');
  const [subCounty, setSubCounty] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');

  // Next of Kin data
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [nextOfKinDOB, setNextOfKinDOB] = useState('');
  const [nextOfKinIdNumber, setNextOfKinIdNumber] = useState('');
  const [nextOfKinGender, setNextOfKinGender] = useState('');
  const [relationship, setRelationship] = useState('');
  const [nextOfKinTelephone, setNextOfKinTelephone] = useState('');

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any further processing or API calls here
    // For this example, we will just log the form data
    console.log({
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
        name: nextOfKinName,
        dob: nextOfKinDOB,
        idNumber: nextOfKinIdNumber,
        gender: nextOfKinGender,
        relationship,
        telephone: nextOfKinTelephone,
      },
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <h2>Patients Registration Form</h2>
      <label>
        Telephone:
        <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </label>
      <br />

      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />

      <label>
        Date of Birth:
        <input type="text" value={dob} onChange={(e) => setDOB(e.target.value)} />
      </label>
      <br />

      <label>
        ID Number:
        <input type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
      </label>
      <br />

      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />

      <label>
        County:
        <input type="text" value={county} onChange={(e) => setCounty(e.target.value)} />
      </label>
      <br />

      <label>
        Sub County:
        <input type="text" value={subCounty} onChange={(e) => setSubCounty(e.target.value)} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />

      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <br />

      <label>
        Marital Status:
        <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} />
      </label>
      <br />

      <h2>Next of Kin</h2>

      <label>
        Name:
        <input type="text" value={nextOfKinName} onChange={(e) => setNextOfKinName(e.target.value)} />
      </label>
      <br />

      <label>
        Date of Birth:
        <input type="text" value={nextOfKinDOB} onChange={(e) => setNextOfKinDOB(e.target.value)} />
      </label>
      <br />

      <label>
        ID Number:
        <input type="text" value={nextOfKinIdNumber} onChange={(e) => setNextOfKinIdNumber(e.target.value)} />
      </label>
      <br />

      <label>
        Gender:
        <input type="text" value={nextOfKinGender} onChange={(e) => setNextOfKinGender(e.target.value)} />
      </label>
      <br />

      <label>
        Relationship:
        <input type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
      </label>
      <br />

      <label>
        Telephone:
        <input type="text" value={nextOfKinTelephone} onChange={(e) => setNextOfKinTelephone(e.target.value)} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientsRegistrationForm;
