
import React, { Component } from "react"
import ItemsList from "./ItemsList";
import ItemsContent from "./ItemsContent"
import { dataServiceProvider } from "../services/dataService"

export class ContentContainer extends Component {
    state = {
        viewItem: null
    }
    onCardClick = (e) => {
        const viewItem = this.props.data.find(d => parseInt(d.id) === e)
        this.setState({
            viewItem
        })
    }

    componentWillReceiveProps = (newProps) => {
        if (this.props.viewItem !== newProps && newProps)
            this.setState({
                viewItem: newProps.viewItem
            })
    }
    render() {
        return (
            <div className="contentContainer">
                <ItemsList {...this.props} onCardClick={this.onCardClick}></ItemsList>
                <ItemsContent {...this.state}></ItemsContent>
            </div >
        )
    }
}

export default dataServiceProvider(ContentContainer)