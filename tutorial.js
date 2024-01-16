let name
name = "Olu"
console.log(`${name} is brilliant`)

const strings = ["Home", "Shop", "About Me"];

const capitalize = (x) => {
  return x.toUpperCase();
};

const listItems = strings.map(capitalize);
console.log(listItems)

function keys(x, i) {
  return `${x}_${i}`;
}

const listItemss = strings.map(keys);
console.log(listItemss);

console.log(["Items", ...strings])

const temp = {
    "Name": "Olu"
}
const {Name} = temp

console.log({...temp, "Age": 24});
console.log(Name)