import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("channel-info")[this.props.idx].classList.add("focus");
    }

    addFocus() {
        this.clearFocus();
        document.getElementsByClassName("channel-info")[this.props.idx].classList.add("focus");
    }

    clearFocus() {
        for (let i = 0; i < document.getElementsByClassName("channel-info").length; i++) {
            document.getElementsByClassName("channel-info")[i].classList.remove("focus");
        }
    }

    render() {
        if(!this.props.channel) return null;

        return (
            <Link onClick={this.addFocus.bind(this)} to={`/servers/${this.props.match.params.serverId}/${this.props.channel.id}`} className="channel-info">
                <i className="fa fa-hashtag"></i>
                <strong className="channel-name">{this.props.channel.name}</strong>
                <div className="channel-options">
                    <i onClick={() => this.props.updateChannelModal()} className="fa fa-edit"></i>
                    <i onClick={() => this.props.deleteChannelModal()} className="fa fa-trash"></i>
                </div>
            </Link>
        )
    }
}

export default ChannelIndexItem;