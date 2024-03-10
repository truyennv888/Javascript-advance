// 1 prottype
// Khi truy vấn Properties hoặc Method không có trong đối tượng, JS sẽ tìm kiếm trong prototype của đối tượng, nếu không có sẽ tiếp tục tìm ở prototype chain.
function Person(id, name){
    this.id=id;
    this.name=name;
}
// Adding a method to prototype
Person.prototype.getPersonName = function(){
    return this.name;
}
// Create instance of Person
const person = new Person(1, "Truyển");
console.log(person.getPersonName());
// 2 Multiple Levels
// 2.1 Cấu trúc dữ liệu lồng nhau (Nested data structures)
const nestedArray = [[1,2], [2,3]];
const nestedObject = {
    outer:{
        inner:{
            value: 2
        }
    }
}
// 2.2 Gọi hàm lồng nhau (Nested function calls)
function outer(){
    function inner(){
        console.log("Nested function calls")
    }
    inner();
}
outer();
// 2.3 Callback hoặc Promise lồng nhau (Nested callbacks or promises)
fetchData(function(){
    processData(data, function(rs){
        displayResult(rs);
    });
})
// 3 Truy cập thuộc tính (Accessor Properties)
// 3.1 Getter -> lấy giá trị
var obj = {
    get propName(){
        return 'Getter is called';
    }
}
console.log(obj.propName); // Output: Getter is called
// 3.2 Setter -> đặt giá trị cho thuộc tính
var obj = {
    _propName: "",
    set propName(value){
        this._propName = value;
    }
}
obj.propName = 'Setter is called';
console.log(obj._propName); // Outoyt: Setter is called
// 3.3 Sử dụng khi
// Thực hiện kiểm tra, kiểm soát hoặc biến đổi giá trị trước khi lấy hoặc đặt giá trị cho thuộc tính
// 4 Value of This
// 4.1 Trong phương thức của đối tượng -> This tham chiếu đến đối tượng chứa phương thức
const objPerson = {
    name: "Truyển",
    greet: function(){
        console.log(`Hello, I am ${this.name}`);
    }
}
objPerson.greet(); // Output: Hello, I am Truyển
// 4.2 Trong ham không phải phương thức của đối tượng -> This phụ thuộc vào cách gọi hàm
function greet(){
    console.log(`Hello, I am ${this.name}`);
}
var obj1 = { name: 'Alice', greet};
var obj2 = { name: 'Truyển', greet};
obj1(); // Output: Hello, I am Alice
obj2(); // Output: Hello, I am Truyển
// 4.3 Sử dụng call hoặc apply để thiết lập This tường minh
function greet(){
    console.log("Hello, I am " + this.name);
}
var obj = { name: "Truyển"};
greet.call(obj); // Ouput: Hello, I am Truyển
greet.apply(obj); // Ouput: Hello, I am Truyển
// 4.4 Trong hàm constructure -> This tham chiếu đến đối tượng mới được tạo
function Person(name){
    this.name = name;
    this.greet = function(){
        console.log("Hello, I am " + this.name);
    }
}
var person1 = new Person("Truyển");
person1.greet(); // Output: Hello, I am Truyển
// 4.5 Trong sự kiện DOM -> This tham chiếu đến phần tử DOM
document.getElementById("btn").addEvenListener("click", function(){
    console.log("Button clicled: ", this.id);
})
// 5 For in Loop -> dùng để duyệt qua các thuộc tính của 1 đối tượng
var object = {
    name: "Truyển",
    age: 30,
}
for (var key in object){
    console.log(key, ": ", object[key]);
}
// 6 Các cách tạo prototype
// 6.1 Dùng constructure function
function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    return "Hello, I am " + this.name;
}
var person1 = new Person("Truyen");
console.log(person1.greet()); // Output: Hello, I am Truyen
// 6.2 Dùng Object.create()
var personProto = {
    greet: function(){
        return "Hello, I am " + this.name;
    }
}
var person1 = Object.create(personProto);
person1.name = "Truyen";
console.log(person1.greet()); // Output: Hello, I am Truyen
// 6.3 Dùng Class
class Person {
    constructure(name){
        this.name = name;
    }
    greet(){
        return "Hello, I am " + this.name;
    }
}
var person1 = new Person("Truyen");
console.log(person1.greet()); // Output: Hello, I am Truyen