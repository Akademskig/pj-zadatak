
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (

            <div>
                <div className="menu" style={{
                    display: !this.props.opened ? "none" : "block"
                }} >
                    <div className="composeBtnContainer">
                        <button className="composeBtn">Compose</button>
                    </div>
                    <ul className="menuList">
                        <li>
                            <Link to="/inbox">
                                Inbox <span className="newCount">({sessionStorage.getItem("new_count") || 3})</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/important">
                                Important
                            </Link>
                        </li>
                        <li>
                            <Link to="/sent">
                                Sent
                             </Link>
                        </li>
                        <li>
                            <Link to="/drafts">
                                Drafts
                         </Link>
                        </li>
                        <li>
                            <Link to="/trash">
                                Trash
                         </Link>
                        </li>
                    </ul>
                    <ul className="menuList">
                        <li id="labelTitle">
                            LABELS
                        </li>
                        <li>
                            <div className="label personal"></div>
                            <Link to="#">
                                Personal
                            </Link>
                        </li>
                        <li>
                            <span className="label work"></span>
                            <Link to="#">
                                Work
                            </Link>
                        </li>
                        <li>
                            <span className="label travel"></span>
                            <Link to="#">
                                Travel
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mobileMenu">
                    <div className="composeBtnContainer">
                        <button className="composeBtn">Compose</button>
                    </div>
                    {/* <button onClick={this.openMenu} className="menuBtn">Open Menu</button> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Menu)