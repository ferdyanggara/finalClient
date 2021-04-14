export class Order{
    constructor(employeeId, district, batchOrderIds, employeeList){
        this.employeeId = employeeId
        this.district = district;
        this.batchOrderIds =batchOrderIds;
        this.employeeList = employeeList
    }

    GenerateOrder = ()=>{
        let data = []
        for(let i = 0; i < this.batchOrderIds.length; i++){
            let format = {
                id : i,
                order : this.batchOrderIds[i],
                actualPrice : 0
            }
            data.push(format);
        }
        return data;
    }
}