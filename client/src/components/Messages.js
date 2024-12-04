import React, { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;


const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [expandedMessageId, setExpandedMessageId] = useState(null); // Track expanded message
  const messagesPerPage = 10;

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/messages`)
      .then((res) => setMessages(Array.isArray(res.data) ? res.data : [])) // Ensure the data is an array
      .catch((err) => {
        console.error(err);
        setMessages([]); // Set to an empty array on error
      });
  }, []);

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Messages</h2>
      
      {messages.length === 0 ? (
        // Display a message when there are no messages
        <div className="text-center text-muted">
          <p>No messages found. Please check back later!</p>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center gap-4">
          {currentMessages.map((msg) => (
            <div
              className="card"
              key={msg._id}
              style={{ width: '60vw', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="card-body">
                <h5 className="card-title">{msg.name}</h5>
                <p className="card-text" style={{ color: 'black' }}>
                  {expandedMessageId === msg._id
                    ? msg.message
                    : `${msg.message.substring(0, 300)}...`}
                </p>
                {msg.message.length > 300 && (
                  <button
                    className="btn btn-link p-0"
                    onClick={() =>
                      setExpandedMessageId(
                        expandedMessageId === msg._id ? null : msg._id
                      )
                    }
                  >
                    {expandedMessageId === msg._id ? 'View Less' : 'View More'}
                  </button>
                )}
                <small className="text-muted">({msg.email})</small>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {messages.length > 0 && (
        <div className="mt-4 d-flex justify-content-between">
          <button
            className="btn btn-outline-primary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-outline-primary"
            disabled={indexOfLastMessage >= messages.length}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;
