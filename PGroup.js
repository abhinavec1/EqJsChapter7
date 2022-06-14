class PGroup {
    constructor(data) {
        this.data = data
    }

    add(newElement) {
        let instance = new PGroup([...this.data])
        instance.data.push(newElement)
        return instance
    }

    delete(value) {
        let instance = new PGroup([...this.data])
        let index = this.data.indexOf(value);

        if (index > -1) instance.data.splice(index, 1);
        return instance;
    }

    has(value){
        return this.data.includes(value)
    }
}
PGroup.empty = new PGroup([])

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

document.getElementById('a1').innerHTML = (b.has("b"));
document.getElementById('a2').innerHTML = (a.has("b"));
document.getElementById('a3').innerHTML = (b.has("a"));
