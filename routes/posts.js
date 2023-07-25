import express from 'express';

const router = express.Router();

//start working with routes
router.get('/', (res, req) => {
    res.send('This works');
});

export default router;