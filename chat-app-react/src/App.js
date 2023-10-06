import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import LoginForm from "./LoginForm";
import { PROJECT_ID } from "./env";

import "./App.css";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm />;
    return (
        <ChatEngine
            height='100vh'
            projectID={PROJECT_ID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
