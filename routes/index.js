import express from 'express';
import CampgroundController from '../controllers/CampgroundController.js';
import ErrorController from '../controllers/ErrorController.js';
import { isAuthor, isLoggedIn } from '../middleware/index.js';

const router = express.Router();
router.use(isLoggedIn);

// router.get('/', async (req, res) => res.send({'message': 'looks goood!!' }))
router.get('/', CampgroundController.getCampgrounds)
router.post('/', CampgroundController.createCampground)
router.get('/new', CampgroundController.getCampgroundForm)
router.get('/:id', CampgroundController.getCampground)
router.post('/:id/review', CampgroundController.createReview)
router.delete('/:id/reviews/:reviewId', CampgroundController.removeReview)
router.put('/:id', isAuthor, CampgroundController.updateCampground)
router.delete('/:id', isAuthor, CampgroundController.deleteCampground)
router.get('/:id/edit', isAuthor, CampgroundController.getUpdateCampground)

router.all(/(.*)/, ErrorController.showErrorPage);
export default router;
