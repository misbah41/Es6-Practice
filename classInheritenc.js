


class Parent{
  constructor(father){
    this.father = father
  }
};

class Child extends Parent{
  constructor(name){
    super('mutabbir hasan');
    this.name = name
  }
}

const _1stBaby = new Child ('misbah');
const _2ndBaby = new Child ('hasan');
console.log(_1stBaby.father);
console.log(_2ndBaby.name);



