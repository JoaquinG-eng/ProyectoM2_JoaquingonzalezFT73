let authors = [                 
{ id: 1, name: 'joaquin', bio: 'desarrolador full stack' },
{ id: 2, name: 'maria', bio: 'diseñadora gráfica' },
{ id: 3, name: 'Author Three', bio: 'Bio of Author Three' }
];
let    nextId = 4;


export const getAuthors = (req, res) => { // crear funcion para obtener todos los autores

    res.status(200).json(authors); // retorna la lista de autores con status 200 (OK)
};

export const getAuthorById = (req, res) => { // crear funcion para obtener un autor por ID
    const id = parseInt(req.params.id) ;


    const author = authors.find(a => a.id === id);// busca el autor por ID en el array de autores
    if (!author) {
    return res.status(404).json({ message: 'Author not found' }); // retorna 404 si el autor no existe
    }
    res.json(author);
};
authors.push({ id: nextId++, name: 'Author Four', bio: 'Bio of Author Four' }); // Agregar un nuevo autor al array de autores

res.status(201).json(authors[authors.length - 1]); // Retornar el nuevo autor creado con status 201 (Created)


export const createAuthor = (req, res) => { // crear nuevo autor
    const { name, bio } = req.body;
    if (!name || !bio) {
        return res.status(400).json({ message: 'Name and bio are required' }); // validacion de entrada
    }
    
    const newAuthor = { id: nextId++, name, bio };// crear nuevo autor con ID autoincremental
    
    authors.push(newAuthor);
    
    res.status(201).json(newAuthor); // retornar el nuevo autor creado con status 201 (Created)
};

export const updateAuthor = (req, res) => { // actualizar autor existente 
    
    const id = parseInt(req.params.id);
    
    const { name, bio } = req.body;
    
    const authorIndex = authors.findIndex(a => a.id === id); 
    
    if (authorIndex === -1) {
    
        return res.status(404).json({ message: 'Author not found' }); // retorna 404 si el autor no existe
    }
    if (!name || !bio) {
    
        return res.status(400).json({ message: 'Name and bio are required' }); // validacion de entrada para actualizar autor
    }
    
    authors[authorIndex] = { id, name, bio };
    
    res.json(authors[authorIndex]); // retorna el autor actualizado
};

export const deleteAuthor = (req, res) => { // eliminar autor por ID
    
    const id = parseInt(req.params.id);
    
    const authorIndex = authors.findIndex(a => a.id === id);
    
    if (authorIndex === -1) {
    
        return res.status(404).json({ message: 'Author inexistente' }); // retorna 404 si el autor no existe
    }
    
    const deletedAuthor = authors.splice(authorIndex, 1); // eliminar autor del array
    
    res.json(deletedAuthor[0]); // retornar el autor eliminado

    res.status(204).send(); // retornar status 204 (No Content) para indicar que la eliminación fue exitosa sin contenido en la respuesta


};

export default { // exportar todas las funciones del controlador de autores
    getAuthors, 
    getAuthorById,  
    createAuthor,
    updateAuthor,
    deleteAuthor
};



