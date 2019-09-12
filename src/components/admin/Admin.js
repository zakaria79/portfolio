import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Contacts = props => {
  const { contacts } = props;
  return contacts.map(c => (
    <div
      className="Contact"
      key={c._id}
      style={{
        background: '#eee',
        margin: '1rem .5rem',
        borderRadius: '2px',
      }}>
      <div
        className="Email"
        style={{
          paddingLeft: '.5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <div style={{ color: 'blue' }}>{c.email}</div>
        <div
          style={{ color: '#d32323', padding: '.5rem' }}
          onClick={() => props.deleteContact(c._id)}>
          <DeleteForeverIcon />
        </div>
      </div>
      <div
        className="Message"
        style={{
          padding: '.5rem',
        }}>
        {c.message}
      </div>
    </div>
  ));
};

const Admin = props => {
  const { user } = props;

  const [contacts, setContacts] = useState([]);

  const updateContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      if (res.error) {
        return console.log(res.message);
      }
      setContacts(res.data.contacts);
    } catch (e) {
      /* handle error */
      console.log(e);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function fetchContacts() {
      try {
        const res = await axios.get('/api/contacts');
        if (!ignore) setContacts(res.data.contacts);
      } catch (e) {
        /* handle error */
        console.log(e);
      }
    }
    fetchContacts();
    return () => {
      ignore = true;
    };
  }, []);

  const deleteContact = async id => {
    try {
      const res = await axios.get('/api/contacts/delete/' + id);
      if (res.error) {
        return console.log(res.message);
      }
      updateContacts();
    } catch (e) {
      /* handle error */
    }
  };

  if (!user.isLoggedIn || !user.roles.includes('admin')) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="Admin">
      <h1>Admin</h1>
      {/*
       */}
      <Contacts contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  null,
)(Admin);
