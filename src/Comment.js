import React from 'react';

const Comment = ({ commentText }) => {
    return (
        <div className="comment">
            {commentText}
        </div>
    )
}

export default Comment