let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post', authorId: 1 },
    { id: 2, title: 'Second Post', content: 'This is the second post', authorId: 2 },
    { id: 3, title: 'Third Post', content: 'This is the third post', authorId: 3 }
];

let nextId = 4;

// GET todos los posts
export const getPosts = (req, res) => {
    res.json(posts);
};

// GET post por ID
export const getPostById = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
};

// GET posts por autor
export const getPostsByAuthor = (req, res) => {
    const authorId = parseInt(req.params.authorId);

    const authorPosts = posts.filter(p => p.authorId === authorId);

    res.json(authorPosts);
};

// CREATE post
export const createPost = (req, res) => {
    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
        return res.status(400).json({
            message: 'Title, content and authorId are required'
        });
    }

    const newPost = {
        id: nextId++,
        title,
        content,
        authorId
    };

    posts.push(newPost);

    res.status(201).json(newPost);
};

// UPDATE post
export const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, authorId } = req.body;

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    if (!title || !content || !authorId) {
        return res.status(400).json({
            message: 'Title, content and authorId are required'
        });
    }

    posts[postIndex] = { id, title, content, authorId };

    res.json(posts[postIndex]);
};

// DELETE post
export const deletePost = (req, res) => {
    const id = parseInt(req.params.id);

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    posts.splice(postIndex, 1);

    res.json({ message: 'Post deleted' });
};