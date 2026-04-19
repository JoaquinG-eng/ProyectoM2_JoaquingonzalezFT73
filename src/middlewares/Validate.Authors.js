import { validatePost } from '../middlewares/Validate.Posts.js';

router.post('/', validatePost, async (req, res, next) => {
try {
const data = await service.create(req.body);
res.status(201).json(data);
} catch (err) {
next(err);
}
});