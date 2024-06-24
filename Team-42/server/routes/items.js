const express = require('express')

const router = express.Router()
const {
  createItem,
  getAllItemsFarmer,
  getAllItemsCPU,
  getAllItemsACDC,
  getAllItemsMills,
  getAllProcessed,
  getAllCPC,
  updateRawSell,
  updateRawBuy,
  getAllItemsCPUToBuy,
  updateQualityCheck,
  updateProcessing,
  updateProcessed,
  updateToPack
} = require('../controllers/items')

router.route('/').post(createItem);
router.route('/getAllItemsFarmer').get(getAllItemsFarmer);
router.route('/getAllItemsCPUToBuy').get(getAllItemsCPUToBuy);
router.route('/getAllItemsCPU').get(getAllItemsCPU);
router.route('/getAllItemsACDC').get(getAllItemsACDC);
router.route('/getAllItemsMills').get(getAllItemsMills);
router.route('/getAllProcessed').get(getAllProcessed);
router.route('/getAllCPC').get(getAllCPC);
router.route('/updateRawSell/:id').patch(updateRawSell);
router.route('/updateRawBuy/:id').patch(updateRawBuy);
router.route('/updateQualityCheck/:id').patch(updateQualityCheck);
router.route('/updateProcessing/:id').patch(updateProcessing);
router.route('/updateProcessed/:id').patch(updateProcessed);
router.route('/updateToPack/:id').patch(updateToPack);
//router.route('/').post(getAllItemsFarmer);

//router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
