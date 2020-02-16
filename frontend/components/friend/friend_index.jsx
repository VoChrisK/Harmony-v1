import React from 'react';
import FriendIndexItemContainer from './friend_index_item_container';

class FriendIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestFriends(this.props.currentUserId);

        if (document.getElementsByClassName("expand home").length > 0) {
            document.getElementsByClassName("expand home")[0].style.background = `url(${wumpus}) no-repeat center center`;
            document.getElementsByClassName("expand home")[0].style.backgroundSize = '500px';
            document.getElementsByClassName("expand home")[0].style.backgroundColor = "#36393f";
        }
    }

    componentDidUpdate() {
        if (document.getElementsByClassName("expand home").length > 0) {
            document.getElementsByClassName("expand home")[0].style.background = `url(${wumpus}) no-repeat center center`;
            document.getElementsByClassName("expand home")[0].style.backgroundSize = '500px';
            document.getElementsByClassName("expand home")[0].style.backgroundColor = "#36393f";
        }
        else if (document.getElementsByClassName("expand").length > 0) {
            document.getElementsByClassName("expand")[0].style.backgroundImage = "none";
        }
    }

    render() {
        if(this.props.friends.length === 0) {
            return (
                <section className="expand home">
                    <h1 className="poor-wumpus">No one's around to play with wumpus</h1>
                </section>
            )
        }

        return (
            <section className="expand">
                {
                    this.props.friends.map((friend, idx) => <FriendIndexItemContainer key={idx} friend={friend} currentUserId={this.props.currentUserId} />)
                }
            </section>
        )
    }
}

export default FriendIndex;