import React, { Component } from 'react'

export default class ItemsContent extends Component {

    componentWillReceiveProps = (newProps) => {
        if (this.props.viewItem !== newProps.viewItem) {
            this.setState({
                viewItem: newProps.viewItem,
            })
        }
        if (this.props.openView !== newProps.openview) {
            this.setState({
                openView: this.props.openView
            })
        }
    }
    render() {
        if (!this.props.viewItem)
            return <div className="lds-dual-ring" style={{ marginTop: window.innerHeight / 2 - 200 }}></div>
        return (
            <div className="itemsContent" style={this.props.openView && this.props.mobile ? { display: "block", marginTop: "20px" } : { marginTop: 0 }}>
                <header>
                    <div>
                        {this.props.mobile ? <button className="backBtn" onClick={this.props.closeView}>Back</button> : null}
                        <h1>{this.props.viewItem.title}</h1>
                        <div>From <span className="contentName">
                            {this.props.viewItem.name}</span> at <span className="contentDate">
                                {this.props.viewItem.date}</span></div>
                    </div>
                    <div className="actionButtons">
                        <button>Reply</button>
                        <button>Forward</button>
                        <button>Move to</button>
                    </div>
                </header>
                <p className="contentBody">{this.props.viewItem.body}</p>
            </div>
        )

    }
}