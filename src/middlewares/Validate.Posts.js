export const validatePost = (req, res, next) => {
const { title, content, authorId } = req.body;


if (!title || !content || !authorId) {
return res.status(400).json({ error: "falta campos" });
}

if (typeof title !== "string" || typeof content !== "string") {
return res.status(400).json({ error: "datos inválidos" });
}


if (title.trim() === "" || content.trim() === "") {
return res.status(400).json({ error: "campos vacíos" });
}


if (isNaN(authorId)) {
return res.status(400).json({ error: "número de autor inválido" });
}


req.body.authorId = Number(authorId);

next();
};