import React, { useState } from 'react';

function AddServices() {
    const [services, setServices] = useState([
        { name: "Building Construction", description: "High-quality residential and commercial construction services." }
    ]);

    const [newService, setNewService] = useState({ name: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewService({ ...newService, [name]: value });
    };

    const handleAddService = (e) => {
        e.preventDefault();
        setServices([...services, newService]);
        setNewService({ name: '', description: '' });
    };

    return (
        <>
            <div className="main-content">
                <section id="services">
                    <h1>Manage Services</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index}>
                                    <td>{service.name}</td>
                                    <td>{service.description}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>Add New Service</h2>
                    <form className="form" onSubmit={handleAddService}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Service Name" 
                            value={newService.name} 
                            onChange={handleInputChange} 
                            required 
                        />
                        <textarea 
                            name="description" 
                            rows="5" 
                            placeholder="Description" 
                            value={newService.description} 
                            onChange={handleInputChange} 
                            required
                        ></textarea>
                        <button type="submit">Add Service</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default AddServices;
