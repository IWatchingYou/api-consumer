const Consumer = require('../model/consumer-model');

exports.CREATE = (req, res) => {
  const rb = req.body;

  new Consumer({
    enq_type: rb.enq_type,
    pro_type: rb.pro_type,
    acc_type: rb.acc_type,
    number_app: rb.number_app,
    member: rb.member,
    amount: rb.amount,
    currency: rb.currency,
    scorecard: rb.scorecard,
    app_type: rb.app_type,
    id_type: rb.id_type,
    id_number: rb.id_number,
    id_expire: rb.id_expire,
    gender: rb.gender,
    marital_status: rb.marital_status,
    dob: rb.dob,
    pob_prov: rb.pob_prov,
    pob_dist: rb.pob_dist,
    pob_comm: rb.pob_comm,
    faname_eng: rb.faname_eng,
    finame_eng: rb.finame_eng,
    faname_khm: rb.faname_khm,
    finame_khm: rb.finame_khm,
    email_address: rb.email_address,
    add_type: rb.add_type,
    provice: rb.provice,
    district: rb.district,
    commune: rb.commune,
    village: rb.village,
    street: rb.street,
    house: rb.house,
    other_vill_eng: rb.other_vill_eng,
    other_vill_khm: rb.other_vill_khm,
    phone_number: rb.phone_number,
    country_code: '855',
    phone_type: 'M',
    emp_type: rb.emp_type,
    emp_self: rb.emp_self,
    lenght: rb.lenght,
    occupation: rb.occupation,
    emp_name: rb.emp_name,
    salary: rb.salary,
    emp_currency: rb.emp_currency,
    emp_add_type: rb.emp_add_type,
    emp_prov: rb.emp_prov,
    emp_dist: rb.emp_dist,
    emp_comm: rb.emp_comm,
    emp_vill: rb.emp_vill,
    emp_street: rb.emp_street,
    emp_house: rb.emp_house,
    empother_vill_eng: rb.empother_vill_eng,
    empother_vill_khm: rb.empother_vill_khm,
    created: new Date(),
    updated: new Date(),
    uploaded: false
  })
  .save()
  .then(()=>{
    res.status(201).send({
      message: 'success'
    })
  })
  .catch(()=>{
    res.status(400).send({
      message: 'fail'
    })
  })
}

exports.COUNT = (req, res) =>{
  Consumer.countDocuments().then(count=>{
    res.status(200).send({
      count: count
    });
  })
  .catch(err=>{
    res.status(400).send(err)
  })
}

exports.READ = (req, res) => {
  const skip = 10 * (req.params.page - 1);
  Consumer
    .find().skip(skip).limit(10).sort({created: -1}).exec()
    .then(data => {
      if (!data[0]) {
        res.status(200).send({
          message: 'not found consumer.'
        })
        return;
      }
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.READID = (req, res) => {
  Consumer
    .findById(req.params.id).exec()
    .then(data => {
      if (!data) {
        res.status(200).send({
          message: 'not found consumer.'
        })
        return;
      }
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.UPDATE = (req, res) => {
  const rb = req.body;

  Consumer
  .findByIdAndUpdate(req.params.id, {
    enq_type: rb.enq_type,
    pro_type: rb.pro_type,
    acc_type: rb.acc_type,
    number_app: rb.number_app,
    member: rb.member,
    amount: rb.amount,
    currency: rb.currency,
    scorecard: rb.scorecard,
    app_type: rb.app_type,
    id_type: rb.id_type,
    id_number: rb.id_number,
    id_expire: rb.id_expire,
    gender: rb.gender,
    marital_status: rb.marital_status,
    dob: rb.dob,
    pob_prov: rb.pob_prov,
    pob_dist: rb.pob_dist,
    pob_comm: rb.pob_comm,
    faname_eng: rb.faname_eng,
    finame_eng: rb.finame_eng,
    faname_khm: rb.faname_khm,
    finame_khm: rb.finame_khm,
    email_address: rb.email_address,
    add_type: rb.add_type,
    provice: rb.provice,
    district: rb.district,
    commune: rb.commune,
    village: rb.village,
    street: rb.street,
    house: rb.house,
    other_vill_eng: rb.other_vill_eng,
    other_vill_khm: rb.other_vill_khm,
    phone_number: rb.phone_number,
    emp_type: rb.emp_type,
    emp_self: rb.emp_self,
    lenght: rb.lenght,
    occupation: rb.occupation,
    emp_name: rb.emp_name,
    salary: rb.salary,
    emp_currency: rb.emp_currency,
    emp_add_type: rb.emp_add_type,
    emp_prov: rb.emp_prov,
    emp_dist: rb.emp_dist,
    emp_comm: rb.emp_comm,
    emp_vill: rb.emp_vill,
    emp_street: rb.emp_street,
    emp_house: rb.emp_house,
    empother_vill_eng: rb.empother_vill_eng,
    empother_vill_khm: rb.empother_vill_khm,
    updated: new Date(),
  }).exec()
  .then(()=>{
    res.status(200).send({
      message: 'success'
    })
  })
  .catch(err=>{
    res.status(400).send({
      message: err
    })
  })
}

exports.DELETE = (req, res) => {
  Consumer
  .findByIdAndDelete(req.params.id)
  .exec()
  .then(()=>{
    res.status(200).send({
      message: 'success'
    })
  })
  .catch(err=>{
    res.status(400).send({
      message: err
    })
  })
}

exports.SEARCH = (req, res) =>{
  const search = new RegExp(req.query.name, 'i');

  Consumer.find({
    $or:[
      {finame_eng: search},
      {faname_eng: search},
      {finame_khm: search},
      {faname_khm: search},
      {phone_number: search}
    ]
  })
  .sort({created: 1})
  .exec()
  .then(data=>{
    if (!data[0]) {
      res.status(200).send({
        message: 'not found consumer.'
      })
      return;
    }
    res.status(200).send(data);
  })
  .catch(err=>{
    res.status(400).send(err);
  })
}