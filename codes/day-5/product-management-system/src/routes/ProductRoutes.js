import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routeList } from './routeList'

export default function ProductRoutes() {
    return (
        <Switch>
            {
                routeList.map(route => {
                    return <Route path={route.routePath} key={route.routeId} component={route.componentName} exact />
                })
            }
        </Switch>
    )
}
