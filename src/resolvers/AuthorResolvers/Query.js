const { getAllAuthors, getAuthor } = require('../../services/AuthorService');

const getAuthors = async () => {
    const authors = await getAllAuthors();
    return authors;
};

const getSingleAuthor = async (_, { id }) => {
    const author = await getAuthor(id);
    if(!author) throw new Error('Author not exist');
    return author;
};

module.exports = {
    getAuthors,
    getSingleAuthor,

};