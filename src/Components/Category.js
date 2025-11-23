import React, { useEffect, useState } from 'react';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
        const response = await fetch('https://liveapi.sattalives.com/api/admin/get-all-category-list', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include token in headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCategories(data?.data || []); // Adjust based on actual data structure
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (id) => {
    // Logic for editing a category
    console.log('Edit category with id:', id);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      const response = await fetch(`https://liveapi.sattalives.com/api/admin/delete-category/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in headers
        },
      });

      if (response.ok) {
        setCategories(categories.filter(category => category.id !== id)); // Adjust based on actual data structure
      } else {
        throw new Error('Failed to delete category');
      }
    } catch (error) {
      setError('Error deleting category: ' + error.message);
    }
  };

  return (
    <div className="container">
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Time</th>
            <th>Open Time</th>
            <th>No Open</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.last_time}</td>
              <td>{category.open_time}</td>
              <td>{category.no_open}</td>
              <td>{category.status}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => handleEdit(category.id)}>Edit</button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
