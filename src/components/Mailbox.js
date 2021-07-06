import React from "react";

function Mailbox(props) {
  const unReadMessages = props.unreadmessages;

  return (
    <div>
      {unReadMessages.length > 0 && (
        <h2>you have {unReadMessages.length} unread messages</h2>
      )}
    </div>
  );
}

export default Mailbox;
