import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/User/CreateUserController'
import { AuthUserController } from './controllers/User/AuthUserController'
import { DetailuserController } from './controllers/User/DetailUserController'

import { CreateCategoryController } from './controllers/User/category/CreateCategoryController'
import { ListCategoryController } from './controllers/User/category/ListCategoryController'

import { CreateNewTfcController } from './controllers/User/product/CreateNewTfcController'
import { ListByCategoryController } from './controllers/User/product/ListByCategoryController'

import { CreateOrderController } from './controllers/User/order/CreateOrderController'
import { RemoveOrderController } from './controllers/User/order/RemoveOrderController'

import { AddItemController } from './controllers/User/order/AddItemController'
import { RemoveItemController } from './controllers/User/order/RemoveItemController'
import { SendOrderController } from './controllers/User/order/SendOrderController'

import { ListOrdersController } from './controllers/User/order/ListOrdersController'
import { DetailOrderController } from './controllers/User/order/DetailOrderController'
import { FinishOrderController } from './controllers/User/order/FinishOrderController'


import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailuserController ().handle )

// -- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle )

router.get('/category', isAuthenticated, new ListCategoryController().handle )

// -- ROTAS NEW TFC (PRODUCT)
router.post('/tfc', isAuthenticated, upload.single('file'), new CreateNewTfcController().handle )

router.get('/category/tfc', isAuthenticated, new ListByCategoryController().handle )

// -- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle )
router.delete('/order', isAuthenticated, new RemoveOrderController().handle )

router.post('/order/add', isAuthenticated, new AddItemController().handle )
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle )

router.put('/order/send', isAuthenticated, new SendOrderController().handle )

router.get('/orders', isAuthenticated, new ListCategoryController().handle )
router.get('/order/details', isAuthenticated, new DetailOrderController().handle )

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )



export { router };