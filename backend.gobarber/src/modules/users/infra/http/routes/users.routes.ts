import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controller/UsersController';
import UserAvatarController from '../controller/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const usersRouter = Router();

// Middleware criado para upload de arquivos
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

// Atualizar uma única informação do usuário
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
