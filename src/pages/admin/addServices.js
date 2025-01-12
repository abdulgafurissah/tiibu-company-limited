// Import necessary libraries
import React, { useState } from 'react';
import '../../assests/styles/adminServices.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');

  const addService = () => {
    if (newService.trim() === '') return;
    setServices([...services, newService]);
    setNewService('');
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="services-container">
      <h1>Manage Services</h1>
      <div className="add-service">
        <input
          type="text"
          placeholder="Enter new service"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
        />
        <button onClick={addService}>Add Service</button>
      </div>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index}>
            <span>{service}</span>
            <button onClick={() => deleteService(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
