import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Messages from '../components/Messages';
import AddProject from '../components/AddProject';

const AdminPage = () => {
  return (
    <>
      <Header />
      <Messages />
      <AddProject />
      <Footer />
    </>
  );
};

export default AdminPage;
