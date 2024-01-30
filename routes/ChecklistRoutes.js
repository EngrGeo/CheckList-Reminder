const {Router} = require("express");
const { getCheckList, saveCheckList, updateCheckList, deleteCheckList } = require("../controllers/ChecklistControllers");

const router = Router()

router.get('/', getCheckList)
router.post('/save', saveCheckList)
router.post('/update', updateCheckList)
router.post('/delete', deleteCheckList)

module.exports = router;