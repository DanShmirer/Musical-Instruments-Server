const Instrument = require('../models/instrument');

// CRUD

const createInstrument = async (name, brand, description, address, price, category) => {
    const instrument = new Instrument({ //TODO inputs validation
        name : name,
        brand : brand,
        description: description,
        address : address,
        price : price
    });
    if(category){
        instrument.category = category;
    }
    return await instrument.save();
};

const getInstrumentById = async (id) => {
    return await Instrument.findById(id);
};

const getInstruments = async () => {
    return await Instrument.find({});
};

const updateInstrument = async (id, description, address, price) => {
    const instrument = await getInstrumentById(id);
    if(!instrument)
        return false; //TODO: exception & log it
    if(description)
        instrument.description = description;
    if(address)
        instrument.address = address; //TODO change to addresses
    if(price)
        instrument.price = price;
    await instrument.save();
    return true;
};

const deleteInstrument = async (id) => {
    const instrument = await getInstrumentById(id);
    if(!instrument)
        return false; //TODO: exception & log it
    await instrument.remove();
    return true;
};

module.exports = {
    createInstrument,
    getInstrumentById,
    getInstruments,
    updateInstrument,
    deleteInstrument,
};