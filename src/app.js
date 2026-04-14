app.get('/authors', getAuthors); // ruta para obtener todos los autores

app.get('/authors/:id', getAuthorById); // ruta para obtener un autor por ID

app.post('/authors', createAuthor); // ruta para crear un nuevo autor

app.put('/authors/:id', updateAuthor); // ruta para actualizar un autor existente

app.delete('/authors/:id', deleteAuthor); // ruta para eliminar un autor por ID

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app; 