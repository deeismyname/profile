import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Messages from '../components/Messages';
import AddProject from '../components/AddProject';

const AdminPage = () => {
  return (
    <>
      <Header />

      <main className="d-flex flex-column">
        {/* Messages Section */}
        <section style={{ height: '100vh', overflow: 'auto' }}>
          <Messages />
        </section>

        {/* Add New Project Section */}
        <section style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
          <AddProject />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AdminPage;
