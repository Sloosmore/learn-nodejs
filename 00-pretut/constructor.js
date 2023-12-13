function Order(name) {
  this.name = name;
  this.speak = () => {
    return `hello I am ${this.name}`;
  };
}
const nick = new Order("nick");
console.log(nick.speak);
