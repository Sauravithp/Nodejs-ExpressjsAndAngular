var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _student_gpa;
export class student {
    constructor(name, gpa) {
        _student_gpa.set(this, 0.0);
        this.name = name;
        __classPrivateFieldSet(this, _student_gpa, gpa, "f");
    }
    getName() {
        return this.name;
    }
    setNmae(name) { this.name = name; }
    get gpa() {
        return __classPrivateFieldGet(this, _student_gpa, "f");
    }
    set gpa(gpa) {
        __classPrivateFieldSet(this, _student_gpa, gpa, "f");
    }
}
_student_gpa = new WeakMap();
