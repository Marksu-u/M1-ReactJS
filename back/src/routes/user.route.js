const router = require('express').Router();
const userController = require('../controllers/user.controller');

// router.post('/auth/register', userController.register);

router.get('/', userController.getUsers);
router.get('/:id', userController.getOneUser);

router.post('/', userController.register);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteOneUser);

module.exports = router;