const Freelancer = require('../models/freelancer');


//when freelancerIndex function used mongoose is used to
//search freelancer collection and return all documents
//some error handling built into controller
//messages sent with all responses to be more verbose
function freelancersIndex(req, res) {
  Freelancer.find((err, freelancers) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json({ freelancers });
  });
}
//when freelancerShow function used freelancer id taken from
//req parameters. mongoose used to search freelancer collection
//and return the mathinc freelancer which is send back in
//body of response in JSON format
function freelancersShow(req,res) {
  Freelancer.findById(req.params.id, (err, freelancer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });
    return res.status(200).json({ freelancer });
  });
}
//when freelancer update function used freelancer id taken from req parameters
//and updated document taken from req body
//mongoose used to find by id and update relevant document
//pre update document send back in response
function freelancersUpdate(req,res){
  Freelancer.findByIdAndUpdate(req.params.id, req.body.freelancer, { new: true }, (err, freelancer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });
    return res.status(200).json({ freelancer });
  });
}

function freelancersDelete(req,res) {
  Freelancer.findByIdAndRemove(req.params.id, (err, freelancer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });
    return res.status(204).send();
  });
}

module.exports = {
  index: freelancersIndex,
  show: freelancersShow,
  update: freelancersUpdate,
  delete: freelancersDelete
};
