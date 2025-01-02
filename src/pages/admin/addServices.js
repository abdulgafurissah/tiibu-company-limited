import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/services/${id}`, { method: 'DELETE' })
      .then(() => setServices(services.filter(service => service.id !== id)))
      .catch(error => console.error(error));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td className="border border-gray-300 p-2">{service.name}</td>
              <td className="border border-gray-300 p-2">{service.description}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(service.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;

