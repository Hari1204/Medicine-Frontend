export class User {
    userid?:number
    name?:string
    phone?:string
    address?:string
    pass?:string
    pincode?:string
    confirmpass?:string
    constructor(userid?:number,name?:string,phone?:string,address?:string,pass?:string,pincode?:string,confirmpass?:string){
        this.userid=userid
        this.name=name
        this.phone=phone
        this.address=address
        this.pass=pass 
        this.pincode=pincode
        this.confirmpass=confirmpass
    }
}
