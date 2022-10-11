const express = require("express");
const router = express.Router();
const { protect,isAdmin,roleNotUser } = require("../../middleware/authMiddleware");

const {
  getAllUsers,
  getSingleUser,
  updateUser,
} = require("../../controllers/admin/user");

router.get("/",protect,roleNotUser, getAllUsers);
router.get("/:id",protect,roleNotUser, getSingleUser);
router.patch("/:id",protect,isAdmin, updateUser);
router.patch("/status/:id",protect,roleNotUser, updateUser);

module.exports = router;
