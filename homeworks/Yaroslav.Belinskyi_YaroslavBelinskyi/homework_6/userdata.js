function addUser(userName, userPhone, obj) {
    let nameConstructor;
    let phoneConstructor;
    Object.defineProperty(obj, userName, {
        get() {
            return nameConstructor;
        },
        set(nameValue) {
            nameConstructor = nameValue
                .trim()
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        },
    });
    Object.defineProperty(obj, userPhone, {
        get() {
            return phoneConstructor;
        },
        set(phoneValue) {
            let plus = '';
            if (phoneValue.charAt(0) === '+') {
                plus = '+';
            }
            phoneConstructor = plus + phoneValue.replace(/[^0-9]/g, '');
        },
    });
    return obj;
}
const obj = addUser('fullName', 'phone', {});
obj.fullName = '   asdASD qweqFDG  ';
obj.phone = '+3(das)a2323+32392-23';
console.log(obj.fullName);
console.log(obj.phone);
