import Fault from "../model/fault.js";


export const createFault = async (req,res) =>
{
  
    const distance = req.query.distance
    const phase = req.query.phase

    const newfault = new Fault({phase: phase, distance: distance});
    
    await newfault.save();
    res.status(200).json({messsage:"success"});
}


export const getAllFaultDetails = async (req, res) => {
     const faults = await Fault.find({});
     res.status(200).json(faults);
}