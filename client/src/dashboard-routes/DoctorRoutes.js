import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../Layout'
import DoctorSidebarItems from '../sidebar/DoctorSidebarItems'
import DocChatPatient from '../chat/DocChatPatient'

function PatientRoutes() {
    const AllRoute = []

    if (DoctorSidebarItems && DoctorSidebarItems.length > 0) {
        for (let i = 0; i < DoctorSidebarItems.length; i++) {
            AllRoute.push(<Route key={DoctorSidebarItems[i].icon} path={DoctorSidebarItems[i].link} exact component={DoctorSidebarItems[i].component} />)
        }
    }


    return (

        <Route render={(props) => (
            <Layout {...props}>
                <DocChatPatient />
                <Switch>
                    {AllRoute}
                </Switch>
            </Layout>
        )} />
    )
}

export default PatientRoutes
