export const validatePost = (req, res, next) => {
const { title, content, authorId } = req.body;
if (!title || !content || !authorId) {
return res.status(400).json({
message: 'Titulo, contenido y authorId son requeridos'
});
}
next(); 
};