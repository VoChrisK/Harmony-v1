import React from 'react';

class FriendIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestFriends(this.props.currentUserId);
    }

    render() {
        if(this.props.friends.length === 0) return null;

        return (
            <section className="main-content">
                <h1>hi</h1>
            </section>
        )
    }
}

export default FriendIndex;