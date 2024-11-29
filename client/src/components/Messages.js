import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [expandedMessageId, setExpandedMessageId] = useState(null); // Track expanded message
  const messagesPerPage = 10;

  useEffect(() => {
    axios.get('/api/messages').then((res) => setMessages(res.data));
  }, []);

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Messages</h2>
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

      {/* Pagination Controls */}
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
    </div>
  );
};

export default Messages;
