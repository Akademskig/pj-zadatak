
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Menu from "./components/Menu";
import ContentContainer from "./containers/ContentContainer";
import windowSize from "react-window-size"


class MainRouter extends React.Component {
    state = {
        menuOpen: true,
        mobile: false,
        toggle: false,
        opened: true
    }

    toggleMenu = () => {
        this.setState({
            opened: !this.state.opened
        })
    }
    componentWillReceiveProps(newProps) {
        if (newProps.windowWidth <= 895 && this.props.windowWidth > 895) {
            this.setState({
                mobile: true,
                opened: false
            })
        }
        if (newProps.windowWidth > 895 && this.props.windowWidth <= 895) {
            this.setState({
                mobile: false,
                opened: true
            })
        }
    }
    componentWillMount = () => {
        if (this.props.windowWidth > 895) {
            this.setState({
                opened: true
            })
        }
        else {
            this.setState({
                opened: false
            })
        }
    }
    render() {
        return (
            <div class="mainView" style={{ gridTemplateColumns: !this.state.opened ? "0 auto" : "180px auto" }}>
                <Menu toggleMenu={this.toggleMenu} opened={this.state.opened} mobile={this.state.mobile}></Menu>
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
    }
}

export default windowSize(MainRouter)