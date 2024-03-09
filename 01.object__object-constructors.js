// 1 Tạo object
// 1.1 Dùng object literal: {}
const objectLiteral = {
    id: 1,
    name: "Object literal",
}
// 1.1.1 Truy xuất properties
console.log(`name: :objectLiteral.name`);
// 1.1.2 Thêm hoặc sửa properties
objectLiteral.description = "create object use object literal";
objectLiteral.name = "Object literals";
// 1.2 Dùng constructor function
function ObjectConstructor(id, name){
    this.id = id;
    this.name = name;
}
const objectConstructor = new ObjectConstructor(1, "Object constructor");
// 1.2.1 Thêm hoặc sửa Properties hoặc Method bằng Prototype
ObjectConstrutor.prototype.getDetails = function(){
    return `name: ${this.name}, description: ${this.description}`;
}
// 1.2.2 Truy xuất properties or method
console.log(objectConstructor.getDetails())
console.log(objectConstructor.name)

// 2 Hạn chế
// 2.1 Không có properties hoặc method private
// 2.2 Kế thừa không hiệu quả do gây khó hiểu về hệ thống phân cấp kế thừa
// 2.3 Không hỗ trợ Mixins gây khó khăn trong việc tái sử dụng và kết hợp nhiều đối tượng với nhau
// 2.4 Việc ngầm định chuyển đổi kiểu dữ liệu sẽ gây ra hành vi không mong muốn khi truyền sai đối số khi tạo đối tượng
// 2.5 Tính đóng gói bị hạn chế
// 2.6 Cú pháp dài dòng