const express = require("express");
const {addQuestion,getQuestionsOfACategory,deleteQuestion} = require('../../controllers/admin/question')
const router = express.Router();

router.post('/',addQuestion)
router.get('/:catId',getQuestionsOfACategory)
router.delete('delete/:qId',deleteQuestion)

module.exports = router;
