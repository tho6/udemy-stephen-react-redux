import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.get(this.props.userId);
    // }

    render() {
        // console.log(this.props.users);
        // const user = this.props.users.find((user) => user.id === this.props.userId); // as long as its return true from this inner function, the entire .find() will stop and return whatever element that had return true 

        const {user} = this.props; // refactor the above to use ownProps

        if (!user) {
            return null; // null to indicate that don't want to show anything
            // return <div>Loading...</div>;
        }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => { // ownProps gets reference to the props that are about to be sent into this component (UserHeader)
    // return { users: state.users };
    return { user: state.users.find(user => user.id === ownProps.userId)}; // refactor the above to use ownProps
};

export default connect(mapStateToProps)(UserHeader);
// export default connect(mapStateToProps, { fetchUser })(UserHeader);