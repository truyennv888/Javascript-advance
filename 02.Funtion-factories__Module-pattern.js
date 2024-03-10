// 1 JavaScript Scopes
// 1.1 Phạm vi toàn cục (Global scope)
const globalVar = "This is a gloval variable";
function globalFunction(){
    return "This is a global function";
}
// 1.2 Phạm vi cụ bộ (Local scope) -> Chỉ có thể truy cập trong phạm vị của dấu {}
function localFunction(){
    const localVar = "This is a local variable";
    function localFunction2(){
        return "This is a local function";
    }
}
// 1.3 Sử dụng phạm vi theo quy tắc Flexiable scope hoặc Static scope
const outerVar = "Global scope";
function outerFunction(){
    const innerVar = "Local scope";
    function innerFunction(){
        console.log(outerVar); // có thể truy vấn global scope
        console.log(innerVar); // có thể truy vấn local scope
    }
    innerFunction(); // có thể truy vấn local scope
}
outerFunction(); //có thể truy vấn global scope
// 2 Closure -> innerFunction truy cập được outerVar ngay cả khi outerFunction đã hoàn thành thực thi
// 2.1 Cách thể hiện
function outerFunction(){
    const outerVar = "Outer";
    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}
const closureExample = outerFunction();
closureExample(); // Output: Outer
// 2.2 Mục đích dùng closure
// 2.2.1 Enscapsulation (đóng gói) -> Tạo biến private
function counter(){
    var counter = 0;
    return function(){
        return counter++;
    }
}
var increment = counter();
console.log(increment()) // Outout: 1
console.log(increment()) // Output: 2
// 2.2.2 Module pattern -> Tạo các biến và hàm sử dụng trong pham vi nhất định không xung đột với biến toàn cục
var module = (function(){
    var privateVar = "This is private";
    function privateFunction(){
        console.log(privateVar);
    }
    return {
        publicFunction: function(){
            privateFunction();
        }
    }
})();
module.publicFunction();
// 2.2.3 Event handlers (xử lý sự kiện) -> Cho phép truy câp biến và hàm từ phạm vi bên ngoài của hàm xử lý sự kiện
function handleClick(){
    var message = "Button clicked";
    document.getElementById("#btn").addEventListener('click', function(){
        console.log(message);
    })
}
handleClick();
// 2.2.4 State variable -> Lưu trữ và duy trì biến trạng thái -> tránh việc sử dụng biến toàn cục để lưu trạng thái
function createCounter(){
    var counter = 0;
    return function(){
        return ++counter;
    }
}
var counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
var counter2 = createCounter();
console.log(counter2()); // Output: 1
// 3 Factory Functions -> Được dùng để tạo và trả về các đối tượng mới -> Dùng khi cần tạo nhiều đối tượng có cấu trúc tương tự
function createPerson(name, age){
    return {
        name: name,
        age: age,
        greet: function(){
            console.log(`Hello ${this.name} ${this.age} years old`);
        }
    }
}
var person1 = new createPerson("Truyển", 19);
person1.greet();
var person2 = new createPerson("Khang", 20);
person2.greet();
// 4 Inheritance with Factory Functions
// -> Factory Functions không cung cấp đăc tính kế thừa nhưng ta có thể sử dụng kỹ thuật composition
// -> dùng mixins để chia sẻ và mở rộng các đối tượng
function createPerson(name, age){
    return {
        name,
        age,
        great: function(){
            console.log(`My name is: ${this.name}, I am ${this.age} years old`);
        }
    }
}
function createEmployee(name, age, position){
    var person = createPerson(name, age);
    return Object.assign(person, {
        position,
        work: function(){
            console.log(`${this.name} working as a ${this.position}`);
        }
    })
}
var employee = createEmployee("Truyển", 30, "Developer");
employee.greet(); // Output: My name is Truyển, I am 30 years old
employee.work(); // Output: Truyển is woriking as a Developer