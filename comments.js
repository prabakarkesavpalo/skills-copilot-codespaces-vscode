// Create web servers that can accept incoming HTTP requests and respond to them
// with appropriate responses. 
// 
// This file contains the code to handle comments-related requests.
// 
// The functions in this file include:
//
//   - getComments: Get comments for a specific post.
//   - postComment: Post a comment for a specific post.
//   - deleteComment: Delete a comment for a specific post.
//   - updateComment: Update a comment for a specific post.
//

/**
 * Update a comment for a specific post.
 * @param {number} postId - The ID of the post.
 * @param {number} commentId - The ID of the comment.
 * @param {string} newContent - The new content of the comment.
 * @returns {object} - The updated comment object.
 */
function updateComment(postId, commentId, newContent) {
    // Validate input parameters
    if (!postId || !commentId || !newContent) {
        throw new Error('Missing required parameters');
    }

    // Validate content length
    if (newContent.trim().length === 0 || newContent.length > 1000) {
        throw new Error('Comment content must be between 1 and 1000 characters');
    }

    try {
        // Find the comment in storage (example using a hypothetical database)
        const comment = db.comments.findOne({
            postId: postId,
            commentId: commentId
        });

        if (!comment) {
            throw new Error('Comment not found');
        }

        // Update the comment
        const updatedComment = {
            ...comment,
            content: newContent,
            updatedAt: new Date().toISOString()
        };

        // Save to database
        db.comments.update(commentId, updatedComment);

        return updatedComment;
    } catch (error) {
        throw new Error(`Failed to update comment: ${error.message}`);
    }
}