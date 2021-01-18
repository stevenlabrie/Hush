import React from 'react';
import styled from 'styled-components';
import SendMessage from './SendMessage.jsx';
import Messages from './Messages.jsx';


/**
 * Renders chat box to dashboard
 * Consists of messages and input to send messages
 */

const Message_Display = ({ activeChat, sendMessage, activeConversations }) => {
  return (
    <Container>
      <Messages activeChat={activeChat} />
      <SendMessage dispatch={sendMessage} />
    </Container>
  );
};

export default Message_Display;

/**
 * Styled Components
 */

const Container = styled.div`
  position: fixed;
  right: 20%;
  bottom: 1rem;
  height: 90%;
  width: 70%;
  
`;