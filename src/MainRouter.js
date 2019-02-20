
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Menu from "./components/Menu";
import ContentContainer from "./containers/ContentContainer";

export const MainRouter = (props) => (
    <div>
        <Menu></Menu>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/inbox"></Redirect>}></Route>
            <Route exact path="/inbox" component={ContentContainer}></Route>
            <Route exact path="/important" component={ContentContainer} ></Route>
            <Route exact path="/sent" component={ContentContainer}></Route>
            <Route exact path="/drafts" component={ContentContainer}></Route>
            <Route exact path="/trash" component={ContentContainer}></Route>
        </Switch>
    </div>
)
