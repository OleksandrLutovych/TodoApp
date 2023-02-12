import React from 'react';
import Post from './Post';

interface IExtraDataProps {
    body: string
}

const UsersExtraData = (props: IExtraDataProps) => {
    const {body} = props
    return (
        <div>
            <Post
              body={body}
            />
        </div> 
    );
};

export default UsersExtraData;