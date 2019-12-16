const Posts = require('../models/Posts');

const createPost = async (data) => {
    const post = Posts.create(data);
    const populatePost = await getOnePost(post._id);
    return populatePost;
};

const getOnePost = (id) => Posts.findOne({
    _id: id,
    is_active: true,
}).populate('author');

const getAllPost = () => Posts.find({
    is_active: true,
}).populate('author');

const updatePost = (id, data) => Posts.findeOneAndUpdate({
    _id: id,
    is_active: true},{...data,},{new: true}).populate('author');

const deletePost = (id) => Posts.findeOneAndUpdate({
    _id:id,
    is_active: true
}, {
    is_active:false,
});

module.exports = {
    createPost,
    getOnePost,
    getAllPost,
    updatePost,
    deletePost
};