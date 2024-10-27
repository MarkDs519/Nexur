import React from "react";
import {ChatEngine} from 'react-chat-engine';

const ChitChat = ({login}) => {

    var data = () => login;
    //let data = loginHandler();
    //console.log(data);
    return (
        <ChatEngine
            height="100vh"
            projectID="232fcb38-472d-4fbd-9fe8-b2b6760d50a3"
            userName={data.username}
            userSecret={data.secret}
        ></ChatEngine>
    )
  }

export default ChitChat;