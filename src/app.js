app.get('/authors', getAuthors); 

app.get('/authors/:id', getAuthorById); 

app.post('/authors', createAuthor); 

app.put('/authors/:id', updateAuthor); 

app.delete('/authors/:id', deleteAuthor); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app; 