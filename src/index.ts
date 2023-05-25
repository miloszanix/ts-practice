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
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
};