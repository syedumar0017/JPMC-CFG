const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide vegetable name'],
      maxlength: 50,
    },
    qty: {
      type: Number,
      required: [true, 'Please provide quantity'],
      default: 10,
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      default: 10,
    },
    rawSell:{
      type: Boolean,
      default: false
    },
    rawBuy:{
      type:Boolean,
      default: false
    },
    qualityCheck:{
      type:Boolean,
      default: false
    },
    processing:{
      type:Boolean,
      default: false
    },
    processed:{
      type:Boolean,
      default: false
    },
    toPack:{
      type:Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Item', ItemSchema)
