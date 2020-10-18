import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45pm" avatar={faker.image.avatar()} comment="Nice blog post!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00am" avatar={faker.image.avatar()} comment="I like the subject" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" avatar={faker.image.avatar()} comment="I like the writing" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));