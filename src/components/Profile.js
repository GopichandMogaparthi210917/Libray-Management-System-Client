import React, { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';
import { Form, Button } from 'react-bootstrap';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [entities, setEntities] = useState([]);
  const [newEntity, setNewEntity] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = await fetchData('/api/user', 'GET', { headers: { Authorization: `Bearer ${token}` } });
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchEntities = async () => {
      try {
        const token = localStorage.getItem('token');
        const entitiesData = await fetchData('/api/entities', 'GET', { headers: { Authorization: `Bearer ${token}` } });
        setEntities(entitiesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
    fetchEntities();
  }, []);

  const handleEntitySubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const createdEntity = await fetchData('/api/entities', 'POST', { name: newEntity }, { headers: { Authorization: `Bearer ${token}` } });
      setEntities([...entities, createdEntity]);
      setNewEntity('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      {user && (
        <div>
          <h2>Welcome, {user.username}</h2>
          <Form onSubmit={handleEntitySubmit}>
            <Form.Group controlId="formNewEntity">
              <Form.Label>New Entity</Form.Label>
              <Form.Control type="text" placeholder="Enter entity" value={newEntity} onChange={(e) => setNewEntity(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Add Entity</Button>
          </Form>
          <ul>
            {entities.map((entity, index) => (
              <li key={index}>{entity.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
