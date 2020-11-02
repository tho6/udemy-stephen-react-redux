import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
    return async function (dispatch, getState) {
        // console.log('about to fetch post');
        // **when we call an action creator inside of an action creator, we need to make sure to dispatch the result of calling it
        await dispatch(fetchPosts()); // need manually dispatch cause the below 2 fetchPosts and fetchUsers won't get called like before after adding fetchPostsAndUsers (all React components only call fetchPostsAndUsers)
        // console.log(getState().posts);
        // console.log('fetched post');
        
        // const userIds = new Set(getState().posts.map(({ userId }) => userId))
        const userIds = new Set(getState().posts.map(post => post.userId));
        userIds.forEach(id => dispatch(fetchUser(id)));
    }
};

export const fetchPosts = () => {
    return async function (dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data }); // call dispatch and pass in Action
    }
};

export const fetchUser = (id) => {
    return async function (dispatch, getState) {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
    }
};

// before redux-thunk
// export const fetchPosts = async () => {
//     return function (dispatch, getState) {
//         const promise = await jsonPlaceholder.get('/post');

//         return {
//             type: 'FETCH_POSTS',
//             payload: promise
//         }
//     }
// };

// // TOTALLY FINE (example) (can still make normal Action Creators that return Action objects)
// export const selectPost = () => {
//     return {
//         type: 'SELECT_POST'
//     }
// };