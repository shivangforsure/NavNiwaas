import React, { useState } from "react";

function ChatBot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [chatLogs, setChatLogs] = useState([
    { message: "Hello! How can I assist you today?", isUser: false },
  ]);

  const options = [
    { text: "How can I list my property ?", action: listProperty },
    { text: "How can I edit my listings ?", action: editListings },
    { text: "How can I delete my account ?", action: deleteAccount },
    { text: "How can I buy a new property ?", action: buyProperty },
    { text: "How can I rent a property ?", action: rentProperty },
  ];

  function toggleChatbox() {
    setIsExpanded((prevState) => !prevState);
  }

  function displayOptions() {
    return options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleOptionClick(option)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded-lg my-0.5 text-xs"
      >
        {option.text}
      </button>
    ));
  }

  function addBotResponse(message) {
    setChatLogs((prevLogs) => [...prevLogs, { message, isUser: false }]);
  }

  function addUserResponse(message) {
    setChatLogs((prevLogs) => [...prevLogs, { message, isUser: true }]);
  }

  function handleOptionClick(option) {
    addUserResponse(option.text);
    option.action();
  }

  function listProperty() {
    addBotResponse(
      "To list a property, go to profile -> create listing btn -> fill the required details."
    );
  }

  function editListings() {
    addBotResponse(
      "To edit listings, go to profile -> show listings -> click edit -> fill -> update."
    );
  }

  function deleteAccount() {
    addBotResponse("To delete your account, go to profile -> delete account.");
  }

  function buyProperty() {
    addBotResponse(
      "To buy a property, simply go to the home page, search and filter to buy."
    );
  }

  function rentProperty() {
    addBotResponse(
      "To rent a property, simply go to the home page, search and filter to rent."
    );
  }

  return (
    <div className="fixed bottom-0 right-0 m-4 z-99">
      <div
        id="chat-toggle-button"
        onClick={toggleChatbox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center cursor-pointer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png"
          alt="BOT"
          className="w-6 h-6"
        />
      </div>
      {isExpanded && (
        <div
          id="chatbox"
          className={`chatbox bg-white rounded-lg shadow-lg p-4 fixed bottom-10 right-10 w-80`}
          style={{
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <div
            id="header-box"
            onClick={toggleChatbox}
            className="flex justify-between items-center mb-4 cursor-pointer"
          >
            <div id="chat-header" className="text-black-700 font-semibold">
              Help Bot
            </div>
            <div
              id="toggleButton"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png"
                alt="Robot Icon"
                className="w-4 h-4"
              />
            </div>
          </div>
          <div className="chatlogs h-80 overflow-y-auto">
            {chatLogs.map((log, index) => (
              <div
                key={index}
                className={`chat ${
                  log.isUser ? "self" : "bot"
                } bg-gray-100 rounded-md p-2 mb-2 text-sm ${
                  log.isUser ? "text-right" : "text-left"
                }`}
              >
                {log.message}
              </div>
            ))}
          </div>
          <div id="options" className="flex flex-wrap mt-4">
            {displayOptions()}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
