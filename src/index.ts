let id: number = 5;
let company: string = 'this is company';
let isPublished: boolean = false;
let x: any = 20;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, 'Hello', true]; 

// Tuple
let person: [number, string, boolean] = [1, 'Hello', true];

// Tuple array
let employee: [number, string][];
employee = [
    [1, 'Employee 1'],
    [2, 'Employee 2'],
    [3, 'Employee 3']
];

// Union
let pid: string | number = 2;

// Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// Type
type User = {
    id: number,
    name: string
};

const user: User = {
    id: 1,
    name: 'misa'
};

type Point = number | string

// or
// const user: {
//     id: 1,
//     name: 'misa'
// } = {
//     id: 1,
//     name: 'misa'
// };

// type assertion
let cid: any = 1;
let customerId = <number>cid
// or let customerId = cid as number

// functions
function addNum(x1: number, x2: number): number {
    return x1 + x2;
}

function log(message: string | number) {
    console.log(message);
}

// interfaces
interface UserInterface {
    id: number,
    name: string,
    readonly address: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
    address: '8th street'
};

// user1.address = '9th street' cant change beacause its readonly

// interface Point = number | string doesnt work
const p1: Point = 1;

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes and inheritance
interface PersonInterface {
    id: number
    name: string

    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}

const mike = new Person(1, 'Mike');
const josh = new Person(2, 'Josh');

console.log(mike.register());
console.log(josh.register());

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'John', 'Manager');
console.log(emp.register());

// generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);