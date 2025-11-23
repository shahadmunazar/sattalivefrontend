import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserList = () => {
  const [items, setItems] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Fetch data from API with authentication token
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      try {
        const response = await fetch('https://liveapi.sattalives.com/api/admin/all-users-list', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          setItems(data?.data || []); // Ensure items is set correctly
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleDeleteClick = async (id) => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
    try {
      const response = await fetch(`https://liveapi.sattalives.com/api/admin/delete-user/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in headers
        },
      });

      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      setError('Error deleting item: ' + error.message);
    }
  };

  const handleEditSave = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
    try {
      const response = await fetch(`https://liveapi.sattalives.com/api/admin/update-user/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in headers
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedItem),
      });

      if (response.ok) {
        setItems(items.map(item => item.id === selectedItem.id ? selectedItem : item));
        setShowEditModal(false);
      } else {
        throw new Error('Failed to update item');
      }
    } catch (error) {
      setError('Error saving changes: ' + error.message);
    }
  };

  const handleModalClose = () => {
    setShowEditModal(false);
    setSelectedItem(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="containers mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card" style={{width:"100%"}}>
        <div className="card-header">
          <h5>User List</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Balance</th>
                <th>Earnings</th>
                <th>Created At</th>
                <th>Referral Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.balance}</td>
                  <td>{item.earnings}</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td> {/* Formatting date */}
                  <td>{item.referral_code}</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={() => handleEditClick(item)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteClick(item.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Edit Modal */}
      <div className={`modal fade ${showEditModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showEditModal ? 'block' : 'none' }} aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Item</h5>
              <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedItem && (
                <form>
                  <div className="mb-3">
                    <label htmlFor="formName" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formName"
                      name="name"
                      value={selectedItem.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formMobile" className="form-label">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formMobile"
                      name="mobile"
                      value={selectedItem.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formBalance" className="form-label">Balance</label>
                    <input
                      type="number"
                      className="form-control"
                      id="formBalance"
                      name="balance"
                      value={selectedItem.balance}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formEarnings" className="form-label">Earnings</label>
                    <input
                      type="number"
                      className="form-control"
                      id="formEarnings"
                      name="earnings"
                      value={selectedItem.earnings}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formReferralCode" className="form-label">Referral Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formReferralCode"
                      name="referral_code"
                      value={selectedItem.referral_code}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleEditSave}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
