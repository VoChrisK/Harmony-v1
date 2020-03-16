import React from 'react';
import chooseColor from '../../util/choose_color';
import { createAffiliation } from './../../util/affiliation_api_util';
import { createDirectMessage } from './../../util/direct_message_api_util';
import setIcons from './../../util/set_icons';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }

    componentDidMount() {
        setIcons(this.props.user.id);
    }

    componentDidUpdate(preProps) {
        // uncomment later when I use AWS
        // if(this.props.match.params.serverId !== preProps.match.params.serverId) {
            setIcons(this.props.user.id);
        // }
    }

    showDropdown() {
        if(this.props.user.id !== this.props.currentUser.id) {
            document.getElementsByClassName("user-dropdown")[this.props.idx].classList.toggle("is-showing");
        }
    }

    focusTab() {
        document.getElementsByClassName("user-info")[this.props.idx].focus();
    }

    render() {
        const { user } = this.props;

        return (
            <div onClick={this.showDropdown.bind(this)} className="user-info" tabIndex="0">
                <div className="user-tab" onClick={this.focusTab.bind(this)}>
                    <div className={`user-icon icon-container ${chooseColor(user.id)}`}>
                        <img className={`discord-icon ${this.props.user.id}`} src={discordIcon} alt=""/>
                    </div>
                    <i className={`fa fa-circle ${user.status}`}></i>
                    <h1 className="username">{user.username}</h1>
                </div>
            </div>
        );
    }

};

export default UserIndexItem;