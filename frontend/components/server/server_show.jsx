import React from 'react';

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.match.params.serverId) {
            this.props.requestServer(this.props.match.params.serverId);
        }

        document.getElementsByClassName("harmony-app")[0].addEventListener("click", () => {
            document.getElementsByClassName("server-dropdown")[0].classList.remove("is-showing");
        });
    }

    showDropdown(event) {
        document.getElementsByClassName("server-dropdown")[0].classList.add("is-showing");
    }

    handleDelete() {
        this.props.deleteServer(this.props.server.id);
    }

    render() {
        const { server } = this.props;
        if(!server) return null;

        return (
            <div onClick={this.showDropdown.bind(this)} className="server-name-container">
                <h1 className="server-name">{server.name}</h1>
                <ul className="server-dropdown dropdown-menu">
                    <li onClick={() => this.props.updateServerModal()}>Edit Server</li>
                    <li onClick={this.handleDelete.bind(this)}>Delete Server</li>
                </ul>
            </div>
        );
    }
}

export default ServerShow;