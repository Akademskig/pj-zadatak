
import React, { Component } from "react"
import ItemsList from "./ItemsList";
import ItemsContent from "./ItemsContent"
import { dataServiceProvider } from "../services/dataService"
import windowSize from "react-window-size"

export class ContentContainer extends Component {
    state = {
        viewItem: null
    }
    openViewStyles = {
        display: "grid",
        gridTemplateColumns: "0 100%"
    }
    closeViewStyles = (mobile) => {
        if (!mobile)
            return { gridTemplateColumns: "33% 67%" }
        return { gridTemplateColumns: "0 100%" }
    }

    onCardClick = (e) => {
        const viewItem = this.props.data.find(d => parseInt(d.id) === e)
        this.setState({
            viewItem,
            openView: true
        })
    }
    closeView = () => {
        this.setState({
            openView: false
        })
    }

    componentWillReceiveProps = (newProps) => {
        if (this.props.viewItem !== newProps && newProps)
            this.setState({
                viewItem: newProps.viewItem
            })
    }
    render() {
        const mobile = this.props.windowWidth <= 895 ? true : false
        return (
            <div className="contentContainer" style={this.state.openView ? this.closeViewStyles(mobile) : null}>
                <ItemsList {...this.props} onCardClick={this.onCardClick}></ItemsList>
                <ItemsContent {...this.state} closeView={this.closeView} mobile={mobile}></ItemsContent>
            </div >
        )
    }
}

export default windowSize(dataServiceProvider(ContentContainer))