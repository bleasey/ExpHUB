const express = require("express");
const {
  getCategories,
  addCategory,
  getSingleCategory,
  deleteCategory,
} = require("../../controllers/admin/category");
const router = express.Router();

router.route("/").get(getCategories).post(addCategory);

router.route("/:id").get(getSingleCategory).delete(deleteCategory);

module.exports = router;
