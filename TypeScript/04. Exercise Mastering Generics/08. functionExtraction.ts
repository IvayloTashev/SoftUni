type FunctionKeys<T> = {
    [Key in keyof T]: T[Key] extends Function ? Key : never;
}[keyof T]

type AllFunctions<T> = Pick<T, FunctionKeys<T>>

type test = {
    name: string,
    age: number,
    test: () => string;
}
type extractedOne = AllFunctions<test>

type Employee = {
    name: string,
    salary: number,
    work: () => void,
    takeBreak: () => string
};
type extractedTwo = AllFunctions<Employee>;

type Nope = {
    name: string
};

type extractedTree = AllFunctions<Nope>;


