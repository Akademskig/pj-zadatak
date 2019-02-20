import React, { Component } from 'react';
import ItemsCard from '../components/ItemCard';

export default class ItemsList extends Component {
    render() {
        if (!this.props.data) {
            return <div className="lds-dual-ring" style={{ marginTop: window.innerHeight / 2 - 200 }}></div>
        }
        return (
            <div className="itemsListContainer" style={{ height: window.innerHeight }} >
                <ul className="itemsList" >
                    <ItemsCard {...this.props}> </ItemsCard>
                </ul>
            </div>
        )
    }
}