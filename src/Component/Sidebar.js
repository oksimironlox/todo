import './Style/Sidebar.css';
import Weekday from "./Weekday";

function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className="sidebar__heading">Weekday</h1>
            <Weekday text="Monday"/>
            <Weekday text="Tuesday"/>
            <Weekday text="Wednesday"/>
            <Weekday text="Thursday"/>
            <Weekday text="Friday"/>
            <Weekday text="Saturday"/>
            <Weekday text="Sunday"/>
        </div>
    );
}

export default Sidebar;