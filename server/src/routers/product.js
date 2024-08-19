const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/product");

router.post("/",ctrl.addProduct );
router.get("/",ctrl.getProduct );
router.get("/:pid",ctrl.getOneProduct );
router.put("/:pid",ctrl.updateProduct );
router.delete("/:pid",ctrl.deleteProduct );

module.exports = router;
