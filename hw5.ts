// ở ngoài lớp thì protected và private cũng giống nhau vì không thể truy cập
// còn khác nhau là nếu như có 1 lớp con kế thừa lớp cha thì protected có thể truy cập được , 
// còn private thì không
class Parent {
    userName: string;
    password: string;
    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
    sayHello():void{
        console.log(`hello ${this.userName}`);
    }
}

class Children extends Parent {
    protected address: string;
    constructor(userName: string, password :string,address: string) {
        super(userName, password);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
    sayGoodBye():string{
        console.log("tạm biệt");
        return "tạm biet"
    }
}

class Child1 extends Children {
    constructor(userName: string, password :string,address: string) {
        super(userName, password,address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
}

const child = new Parent("kithu", "123456");

child.sayHello();

let child11 = new Child1("hong", "123456","hcm");
child11.sayHello();
child11.sayGoodBye();