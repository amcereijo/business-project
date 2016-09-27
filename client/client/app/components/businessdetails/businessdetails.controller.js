class BusinessdetailsController {
  constructor() {
    this.name = 'businessdetails';
  }
  saveAddress(address) {
    this.onSaveBusiness.call(null, { business: address });
  }
}

export default BusinessdetailsController;
