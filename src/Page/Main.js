import '../Style/App.css';
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Tasks from "./Tasks";

function Main() {
    return (
        <div className="App">
            <Header/>
            <div className="App--todo">
                <Sidebar/>
                <div className="App--todo__tasks">
                    <Tasks/>
                </div>
            </div>
        </div>
    );
}

export default Main;
