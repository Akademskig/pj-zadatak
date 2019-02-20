
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Menu extends React.Component {
    state = {
        opened: true
    }

    setActive = (path) => {
        if (this.props.history.location.pathname === path)
            return {
                backgroundColor: "#1c1f25"
            }
        return {
            backgroundColor: "#282c34"
        }
    }
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
                        <li style={this.setActive("/inbox")}>
                            <Link to="/inbox">
                                Inbox <span className="newCount">({sessionStorage.getItem("new_count") || 3})</span>
                            </Link>
                        </li>
                        <li style={this.setActive("/important")}>
                            <Link to="/important">
                                Important
                            </Link>
                        </li>
                        <li style={this.setActive("/sent")}>
                            <Link to="/sent">
                                Sent
                             </Link>
                        </li>
                        <li style={this.setActive("/drafts")}>
                            <Link to="/drafts">
                                Drafts
                         </Link>
                        </li>
                        <li style={this.setActive("/trash")}>
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
                    <button onClick={this.props.toggleMenu} className="menuBtn">
                        <div></div><div></div><div></div>
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Menu)