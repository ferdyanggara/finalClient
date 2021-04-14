export class Order{
    constructor(_id, employeeId, district, batchOrderIds, employeeList){
        this._id = _id
        this.employeeId = employeeId
        this.district = district;
        this.batchOrderIds =batchOrderIds;
        this.employeeList = employeeList
    }

}