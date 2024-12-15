import logo from './logo.svg';
import './App.css';
import ChatWrapper from "./components/chat/ChatWrapper";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import ChatMessageForm from "./components/chat/ChatMessageForm";
import ChatChangeNameForm from "./components/chat/ChatChangeNameForm";

function App() {
  return (
    <div className="App">

<ChatWrapper/>

        <ChatChangeNameForm/>
        <ToastContainer/>
    </div>

  );
}

export default App;
