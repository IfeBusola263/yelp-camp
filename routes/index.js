import express from 'express';
import CampgroundController from '../controllers/CampgroundController.js';
import ErrorController from '../controllers/ErrorController.js';
import { isAuthor, isLoggedIn, isReviewAuthor } from '../middleware/index.js';
import multer from 'multer';
import { storage } from '../cloudinary/index.js';

const uplaod = multer({storage})
const router = express.Router();

router.use(isLoggedIn);

// router.get('/', async (req, res) => res.send({'message': 'looks goood!!' }))
router.get('/', CampgroundController.getCampgrounds)
// router.post('/', uplaod.array('image') ,CampgroundController.createCampground)
router.post('/', uplaod.array('image') , async (req, res) => {
    console.log(req.files, req.body);
    res.send('It Worked');
})
router.get('/new', CampgroundController.getCampgroundForm)
router.get('/:id', CampgroundController.getCampground)
router.post('/:id/review', CampgroundController.createReview)
router.delete('/:id/reviews/:reviewId', isReviewAuthor, CampgroundController.removeReview)
router.put('/:id', isAuthor, CampgroundController.updateCampground)
router.delete('/:id', isAuthor, CampgroundController.deleteCampground)
router.get('/:id/edit', isAuthor, CampgroundController.getUpdateCampground)

router.all(/(.*)/, ErrorController.showErrorPage);
export default router;
