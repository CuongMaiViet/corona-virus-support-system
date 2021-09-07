
import profile from '../assets/icons/profile.svg'
import profileActive from '../assets/icons/profile-active.svg'
import profileBlue from '../assets/icons/profile-blue.svg'
import patients from '../assets/icons/patients.svg'
import patientsActive from '../assets/icons/patients-active.svg'
import patientsBlue from '../assets/icons/patients-blue.svg'
import chat from '../assets/icons/chat.svg'
import chatActive from '../assets/icons/chat-active.svg'
import chatBlue from '../assets/icons/chat-blue.svg'
import dashboard from '../assets/icons/dashboard.svg'
import dashboardActive from '../assets/icons/dashboard-active.svg'
import dashboardBlue from '../assets/icons/dashboard-blue.svg'

import Dashboard from '../doctor-components/Dashboard/Dashboard'
import Profile from '../doctor-components/Profile/Profile'
import Patients from '../doctor-components/Patients/Patients'
import PatientChat from  '../doctor-components/Patient Chat/PatientsChat'

const SourceUrl = "/doctor"

const PatientSidebarItems = [

        {title: 'Dashboard', 
        component: Dashboard,
        icon: dashboard, 
        icon_active: dashboardActive, icon_blue: dashboardBlue,
        link: '' },

        {title: 'Profile', 
        component: Profile,
        icon: profile , 
        icon_active: profileActive, icon_blue: profileBlue,
        link: '/profile'},

        {title: 'Patients', 
        component: Patients,
        icon: patients , 
        icon_active: patientsActive, icon_blue: patientsBlue,
        link: '/patients'},
        
        {title: 'Patient Chat', 
        component: PatientChat,
        icon: chat , icon_active: chatActive , icon_blue: chatBlue,
        link:  '/chat'}        
    ];

    for (let i = 0; i<PatientSidebarItems.length;i++) {
        PatientSidebarItems[i].link = SourceUrl + PatientSidebarItems[i].link
    }
export default PatientSidebarItems;