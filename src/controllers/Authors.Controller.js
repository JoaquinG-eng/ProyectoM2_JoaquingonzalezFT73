let authors = [                 
{ id: 1, name: 'joaquin', bio: 'desarrolador full stack' },
{ id: 2, name: 'maria', bio: 'diseñadora gráfica' },
{ id: 3, name: 'Author Three', bio: 'Bio of Author Three' }
];
let    nextId = 4;


export const getAuthors = (req, res) => { 

    res.status(200).json(authors); 
};

export const getAuthorById = (req, res) => { 
    const id = parseInt(req.params.id) ;


    const author = authors.find(a => a.id === id);
    if (!author) {
    return res.status(404).json({ message: 'Author not found' }); 
    }
    res.json(author);
};
authors.push({ id: nextId++, name: 'Author Four', bio: 'Bio of Author Four' }); 


export const createAuthor = (req, res) => { 
    const { name, bio } = req.body;
    if (!name || !bio) {
        return res.status(400).json({ message: 'Name and bio are required' }); 
    }
    
    const newAuthor = { id: nextId++, name, bio };
    
    authors.push(newAuthor);
    
    res.status(201).json(newAuthor); 
};

export const updateAuthor = (req, res) => { 
    
    const id = parseInt(req.params.id);
    
    const { name, bio } = req.body;
    
    const authorIndex = authors.findIndex(a => a.id === id); 
    
    if (authorIndex === -1) {
    
        return res.status(404).json({ message: 'Author not found' }); 
    }
    if (!name || !bio) {
    
        return res.status(400).json({ message: 'Name and bio are required' }); 
    }
    
    authors[authorIndex] = { id, name, bio };
    
    res.json(authors[authorIndex]); 
};

export const deleteAuthor = (req, res) => { 
    
    const id = parseInt(req.params.id);
    
    const authorIndex = authors.findIndex(a => a.id === id);
    
    if (authorIndex === -1) {
    
        return res.status(404).json({ message: 'Author inexistente' }); 
    }
    
    const deletedAuthor = authors.splice(authorIndex, 1); 
    
    res.json(deletedAuthor[0]); 

    res.status(204).send(); 


};

export default { 
    getAuthors, 
    getAuthorById,  
    createAuthor,
    updateAuthor,
    deleteAuthor
};



