import React, { useState } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Leftmost Sidebar component
const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-item"><i className="fa fa-comments"></i></div>
    <div className="sidebar-item"><i className="fa fa-users"></i></div>
    <div className="sidebar-item"><i className="fa fa-cog"></i></div>
  </div>
);

// Chat List Panel component
const ChatItem = ({ name, lastMessage, time }) => (
  <div className="chat-item">
    <div className="chat-details">
      <p className="chat-name">{name}</p>
      <p className="chat-last-message">{lastMessage}</p>
    </div>
    <div className="chat-time">{time}</div>
  </div>
);

// Chat List component
const ChatList = () => (
  <div className="chat-list">
    <ChatItem name="Bee Population Decline" lastMessage="Due to insecticide..." time="2:14 PM"/>
    <ChatItem name="Global Temperatures" lastMessage="Over the last 4 decades..." time="10:25 AM"/>
    <ChatItem name="Cosmic Evolution" lastMessage="Some 15 billion years ago..." time="9:34 PM"/>
  </div>
);

// Chat window component
const ChatWindow = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  // Function to handle sending query to Vectara and getting the response
  const handleSendQuery = async () => {
    // Placeholder for the keyword extraction
    // const keywords = extractKeywords(query); // This function needs to be defined or imported

    // API call to search the library database with keywords
    // const searchResults = await searchLibraryDatabase(keywords); // This function needs to be defined

    // Placeholder for the Vectara query
    // const vectaraResponse = await vectaraQuery('your-api-key', query);
    // setResponse(vectaraResponse);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>EcoMind AI Chatbot</h2>
      </div>
      <div className="chat-messages">
        {/* Display user query and Vectara's response */}
        <div className="message you">
          <p>{query}</p>
        </div>
        <div className="message response">
          <p>{response}</p>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ask a question here" />
        <button className="send-button" onClick={handleSendQuery}><i className="fa fa-paper-plane"></i></button>
      </div>
    </div>
  );
};

// Main landing page component
const LandingPage = () => (
  <div className="dark">
    <Sidebar />
    <div className="chats-panel">
      <div className="header">
        <h2>My Chats</h2>
        <button className="add-chat">+</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <ChatList />
    </div>
    <ChatWindow />
  </div>
);

export default LandingPage;
