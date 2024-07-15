import React from "react";
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
      {/* chat metadata stored for each conversation */}

  </div>
);

// Chat List component
const ChatList = () => (
  <div className="chat-list">
    <ChatItem name="Bee Population Decline" lastMessage="Due to insecticide..." time="2:14 PM"/>
    <ChatItem name="Global Temperatures" lastMessage="Over the last 4 decades..." time="10:25 AM"/>
    <ChatItem name="Cosmic Evolution" lastMessage="Some 15 billion years ago..." time="9:34 PM"/>
      {/* placeholder chats, all pprevious chats should be stored in this panel */}

  </div>
);

// Chat window component
const ChatWindow = () => (
  <div className="chat-window">
    <div className="chat-header">
      <h2>EcoMind AI Chatbot</h2>
    </div>
    <div className="chat-messages">
      <div className="message you">
        <p>***This Is The User Query***</p>
      </div>
      <div className="message response">
        <p>***Vectara Response***</p>
      </div>
      {/* placeholder messages; api integration to db & vectara here */}
    </div>
    <div className="chat-input">
      <input type="text" placeholder="Ask a question here" />
      <button className="send-button"><i className="fa fa-paper-plane"></i></button>
      {/* store input and call api after button click */}

    </div>
  </div>
);

// Main landing page component
const LandingPage = () => (
  <div className="dark">
    <Sidebar />
    <div className="chats-panel">
      <div className="header">
        <h2>My Chats</h2>
        <button className="add-chat">+</button>
        {/* need to implement logic for new chat */}
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

