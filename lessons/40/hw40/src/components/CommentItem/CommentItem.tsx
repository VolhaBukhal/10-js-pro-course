import React, {FC} from 'react';
import {Comment} from 'types/types'


interface MyCommentItemProps {
    comment: Comment;
}

const CommentItem: FC<MyCommentItemProps> = ({comment}) => {
    return (
        <div >
            <h4>{comment.name}</h4>
            <div>{comment.body}</div>
            <div>{comment.email}</div>
            
        </div>
    );
};

export default CommentItem;