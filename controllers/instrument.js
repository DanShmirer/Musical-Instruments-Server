const instrumentService = require('../services/instrument');

const createInstrument = async (req, res) => {
//TODO decide where inputs validation necessary(controller or service or both)
    const {name, brand, description, address, price, category} = req.body;
    const newInstrument = await instrumentService.createInstrument(name, brand, description, address, price, category);
    res.json(newInstrument);
};

const getInstrument = async (req, res) => {
    const instrument = await instrumentService.getInstrumentById(req.params.id);
    if(!instrument)
        return res.status(404).json({errors: ['Instrument not found']});
    res.json(instrument);
}
 
const getInstruments = async (req, res) => {
    const instruments = await instrumentService.getInstruments();
    res.json(instruments);

};

const updateInstrument = async (req, res) => {
    if(!req.body)
        return res.status(400).json({ message : "Instrument features required!"});
    const {description, address, price} = req.body;
    const instrument = await instrumentService.updateInstrument(req.params.id, description, address, price);
    if(!instrument)
        return res.status(404).json({errors: ['Instrument not found']});
    res.json(instrument);
};

const deleteInstrument = async (req, res) => {
    const instrument = await instrumentService.deleteInstrument(req.params.id);
    if(!instrument)
        return res.status(404).json({ errors: ['Instrument not found']});
    res.send();
};


module.exports = {
    createInstrument,
    getInstrument,
    getInstruments,
    updateInstrument,
    deleteInstrument,
};


