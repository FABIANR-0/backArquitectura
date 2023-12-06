import { Router } from "express";
import { getProduct, deleteProduct, saveProduct, updateProduct, getProductById } from "../controllers/product.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { prodcutValidator } from "../validators/product.validators.js";

const router = Router();

router.get("/all/:userId"/*,validate(prodcutValidator)*/, getProduct);
router.get("/:productId"/*,validate(prodcutValidator)*/, getProductById);
router.delete("/:productId"/*,validate(prodcutValidator)*/, deleteProduct);
router.post("/"/*,validate(prodcutValidator)*/, saveProduct);
router.put("/:productId"/*,validate(prodcutValidator)*/, updateProduct);

export  default router;
