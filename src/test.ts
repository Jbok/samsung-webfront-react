function add<T>(a: T, b: T) {
  return a + b;
}

add(1, 2);
add('A', 'B');

interface Abc<T> {
  name: string;
  age: T;
}

const userA: Abc<number> = {
  name: 'John',
  age: 20
};

const userB: Abc<string> = {
  name: 'Evan',
  age: '21'
};

console.log(userA);
console.log(userB);
