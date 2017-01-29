const Freelancer = require('../models/freelancer');

function freelancersIndex(req, res) {
  Freelancer.find((err, freelancers) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json({ freelancers });
  });
}

function freelancersShow(req,res) {
  Freelancer.findById(req.params.id, (err, freelancer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });
    return res.status(200).json({ freelancer });
  });
}

function freelancersUpdate(req,res){
  Freelancer.findByIdAndUpdate(req.params.id, req.body.freelancer, { new: true }, (err, freelancer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });
    return res.status(200).json({ freelancer });
  });


}
//
// function freelancersDelete() {
//
// }

module.exports = {
  index: freelancersIndex,

  show: freelancersShow,
  update: freelancersUpdate
  // delete: freelancersDelete
};
