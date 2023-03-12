export class Model {
    Users:any;
    Cars:any;
    RentACars:any;
    constructor() {
        this.Users=[];
        this.Cars=[];
        this.RentACars=[];
    }

    addUser(user:User){
        this.Users.push(user);
    }
    addCar(car:Car){
        this.Cars.push(car);
    }
    addRentACar(rent:RentACar){
        this.RentACars.push(rent);
    }
}

export class User {
    Id;
    Gander;
    constructor(id:any,gander:any) {
        this.Id=id;
        this.Gander=gander;
    }
}
export class Car {
    Id;
    Model;
    Color;
    Price;
    constructor(id:any,model:any,color:any,price:any) {
        this.Id=id;
        this.Model=model;
        this.Color=color;
        this.Price=price;
    }
}
export class RentACar {
    Id;
    UserId;
    CarId;
    Day;
    TotalPrice;
    constructor(id:any,userid:any,carid:any,day:any,totalprice:any) {
        this.Id=id;
        this.UserId=userid;
        this.CarId=carid;
        this.Day=day;
        this.TotalPrice=totalprice;
    }
}