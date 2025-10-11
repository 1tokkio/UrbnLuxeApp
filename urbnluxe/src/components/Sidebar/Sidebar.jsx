import React from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilEstate } from '@iconscout/react-unicons'

const Sidebar = () => {
    return(
        <div className="Sidebar">
            {/*Logo*/}
            <div className="Logo">
                <img src={Logo} alt="" />
            </div>

            {/*Menu*/}
            <div className="menu">
                <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                 <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                 <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                 <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                 <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                 <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;