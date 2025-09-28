import React, { useState } from 'react';
import './AdminSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTachometerAlt, faUserMd, faProcedures, faCalendarAlt, faBriefcaseMedical, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const sidebarData = [
  { title: 'Admin Dashboard', icon: faTachometerAlt, link: '#' },
  { title: 'Doctor Dashboard', icon: faUserMd, link: '#' },
  { title: 'Patient Dashboard', icon: faProcedures, link: '#' },
  {
    title: 'Appointments',
    icon: faCalendarAlt,
    submenu: [
      { title: 'Appointments', link: '#' },
      { title: 'New Appointments', link: '#' },
      { title: 'Calendar', link: '#' },
    ],
  },
  {
    title: 'Doctors',
    icon: faUserMd,
    submenu: [
      { title: 'Doctors', link: '#' },
      { title: 'Doctor Details', link: '#' },
      { title: 'Add Doctors', link: '#' },
      { title: 'Doctors Schedule', link: '#' },
    ],
  },
  {
    title: 'Patients',
    icon: faProcedures,
    submenu: [
      { title: 'Patients', link: '#' },
      { title: 'Patient Details', link: '#' },
      { title: 'Add Patient', link: '#' },
    ],
  },
  { title: 'Services', icon: faBriefcaseMedical, link: '#' },
];

const AdminSidebar = (isVisible) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [activeLink, setActiveLink] = useState('Admin Dashboard');

  const handleSubmenuClick = (title) => {
    setExpandedMenu(expandedMenu === title ? null : title);
  };

  const handleLinkClick = (title) => {
    setActiveLink(title);
  };

  return (
<aside className={`sidebar ${!isVisible ? 'hidden' : ''}`}>
     <div className="sidebar-header">
    <FontAwesomeIcon icon={faPlusCircle} className="sidebar-logo" />
    <span className="sidebar-title">TrustCare</span>
   </div>
   <ul className="menu-list">
    {sidebarData.map((item, index) => (
     <li
      key={index}
      className={`menu-item ${item.submenu ? 'has-submenu' : ''} ${expandedMenu === item.title ? 'expanded' : ''}`}
     >
      {/* Use <a> for the main menu item */}
      <a
       href={item.link || '#'}
       className={`menu-link ${activeLink === item.title ? 'active' : ''}`}
       onClick={(e) => {
        // Prevent navigation if it's a submenu parent
        if (item.submenu) {
         e.preventDefault();
         handleSubmenuClick(item.title);
        } else {
         handleLinkClick(item.title);
        }
       }}
      >
       <FontAwesomeIcon  icon={item.icon}  />
       <span className="menu-text">{item.title}</span>
       {item.submenu && <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />}
      </a>
      {item.submenu && (
       <ul className="submenu">
        {item.submenu.map((sub, subIndex) => (
         <li key={subIndex} className="submenu-item">
          {/* Use <a> for the submenu items */}
          <a
           href={sub.link}
           className={`menu-link ${activeLink === sub.title ? 'active' : ''}`}
           onClick={() => handleLinkClick(sub.title)}
          >
           {sub.title}
          </a>
         </li>
        ))}
       </ul>
      )}
     </li>
    ))}
   </ul>
  </aside>
  );
};

export default AdminSidebar;