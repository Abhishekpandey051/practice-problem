import React, { useState } from 'react';
import './SideBar.css'; // Add CSS for styling
import ChipsInput from './project/chips-input/ChipsInput';
import TabForm from './project/tab-form/TabForm';
import LikeButton from './project/like-button/LikeButton';
import Trafic from './project/trafic-system/Trafic';
import TodoList from './project/to-do list/TodoList';
import Accordion from './project/accordian/Accordian';

const SideBar = () => {
    const [activeComponent, setActiveComponent] = useState(0)
    const sidebarMenu = [
        {
            name: 'Chip Input',
            Component: ChipsInput,
        },
        {
            name: 'Tab Form',
            Component: TabForm,
        },
        {
            name: 'Like Button',
            Component: LikeButton,
        },
        {
            name: 'Trafic System',
            Component: Trafic,
        },
        {
            name: 'To Do List',
            Component: TodoList,
        },
        {
            name: 'Accordian',
            Component: Accordion,
        },
    ]
    const ActiveComponent = sidebarMenu[activeComponent].Component;
    
    return (
        <div>
        <div className="sidebar">
            <h2 className="sidebar-title">Traffic System</h2>
            <ul className="sidebar-menu">
                {
                    sidebarMenu.map((item, index) => 
                        <li key={index} className="menu-item">
                            <div className='cursor' onClick={()=>setActiveComponent(index)}>{item.name}</div>
                        </li>
                    )
                }
            </ul>
        </div>
         <ActiveComponent/>
        </div>
    );
};

export default SideBar;