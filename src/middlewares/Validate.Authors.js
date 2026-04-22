export const validateAuthor = (req, res, next) => {
  const { name, email } = req.body;

  // campos obligatorios
  if (!name || !email) {
    return res.status(400).json({ error: "falta campos" });
  }

  // tipos
  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({ error: "datos inválidos" });
  }

  // vacíos
  if (name.trim() === "" || email.trim() === "") {
    return res.status(400).json({ error: "campos vacíos" });
  }

  // email básico
  if (!email.includes("@")) {
    return res.status(400).json({ error: "email inválido" });
  }

  next();
};