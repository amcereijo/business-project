class BusinessdetailsController {
  constructor() {
    this.name = 'businessdetails';
  }
  saveAddress(id, address) {
    this.onSaveBusiness.call(null, { id, address });
  }
}

export default BusinessdetailsController;
