const Item = require("../models/Item");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// const createItem = async (req, res) => {
//   req.body.createdBy = req.user.userId;
//   const item = await Item.create(req.body);
//   res.status(StatusCodes.CREATED).json({ item });
// };

const createItem = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const item = await Item.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
};

//farmer can get all farmers products
const getAllItemsFarmer = async (req, res) => {
  const items = await Item.find({rawBuy:false, qualityCheck:false});
  res.status(StatusCodes.OK).json({ items });
};

//Cpu can get all farmers products
const getAllItemsCPUToBuy = async (req, res) => {
  const items = await Item.find({rawSell:true, rawBuy:false, qualityCheck:false});
  res.status(StatusCodes.OK).json({ items });
};

//Cpu gets all their own products
const getAllItemsCPU = async (req, res) => {
  const items = await Item.find({rawBuy:true, qualityCheck:false});
  res.status(StatusCodes.OK).json({ items });
};

//ACDC gets all their own products this will be visible to mills too
const getAllItemsACDC = async (req, res) => {
  const items = await Item.find({rawBuy:true, qualityCheck:true,processing:false});
  res.status(StatusCodes.OK).json({ items });
};

//Mills get all products processing
const getAllItemsMills = async (req, res) => {
  const items = await Item.find({rawBuy:true, qualityCheck:true, processing:true, processed:false});
  res.status(StatusCodes.OK).json({ items });
};

//ACDC all products after getting processed by mills
const getAllProcessed = async (req, res) => {
  const items = await Item.find({rawBuy:true, qualityCheck:true, processing:true, processed:true,toPack:false});
  res.status(StatusCodes.OK).json({ items });
};
const getAllCPC = async (req, res) => {
  const items = await Item.find({rawBuy:true, qualityCheck:true, processing:true, processed:true,toPack:true});
  res.status(StatusCodes.OK).json({ items });
};




//Farmer makes it available to cpu
const updateRawSell = async (req, res) => {
  const itemId=req.params.id;
  const item = await Item.findByIdAndUpdate(
    { _id: itemId },
    {rawSell:true},
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.CREATED).send("get all items");
};

//cpu buys from farmer
const updateRawBuy = async (req, res) => {
  const itemId=req.params.id;
  const item = await Item.findByIdAndUpdate(
    { _id: itemId },
    {rawBuy:true},
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.CREATED).send("get all items");
};

//cpu sends to acdc
const updateQualityCheck = async (req, res) => {
  const itemId=req.params.id;
  const item = await Item.findByIdAndUpdate(
    { _id: itemId },
    {qualityCheck:true},
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.CREATED).send("get all items");
};

//mills do this to take from acdc
const updateProcessing = async (req, res) => {
  const itemId=req.params.id;
  const item = await Item.findByIdAndUpdate(
    { _id: itemId },
    {processing:true},
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.CREATED).send("get all items");
};

//mills do this to send to acdc
const updateProcessed = async (req, res) => {
  const itemId=req.params.id;
  const item = await Item.findByIdAndUpdate(
    { _id: itemId },
    {processed:true},
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.CREATED).send("get all items");
};

const updateToPack = async (req, res) => {
  const itemId=req.params.id;
  const item = await Item.findByIdAndUpdate(
    { _id: itemId },
    {toPack:true},
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.CREATED).send("get all items");
};



module.exports = {
  createItem,
  getAllItemsFarmer,
  getAllItemsCPU,
  getAllItemsACDC,
  getAllItemsMills,
  getAllProcessed,
  getAllCPC,
  updateRawSell,
  updateRawBuy,
  updateQualityCheck,
  getAllItemsCPUToBuy,
  updateProcessed,
  updateProcessing,
  updateToPack
};
