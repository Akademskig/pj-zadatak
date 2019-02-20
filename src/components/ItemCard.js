import React, { Component } from 'react';

export default class ItemsCard extends Component {
    render() {
        return (
            this.props.data.map((d, i) => (
                <div onClick={this.props.onCardClick.bind(this, d.id)} key={d.id} className="cardContainer" style={{ borderLeft: d.inbox && d.inbox.new ? "5px solid #47a5f1" : 0 }}>
                    <div className="cardGrid">
                        <div className="imgContainer">
                            <img src={d.image_url} alt="user avatar" />
                        </div>
                        <div className="cardContent">
                            <p className="name"><b>{d.name}</b></p>
                            <p className="title"><b>{d.title}</b></p>
                            <p className="body">{d.body}</p>
                        </div>
                    </div>
                </div>))
        )
    }
}