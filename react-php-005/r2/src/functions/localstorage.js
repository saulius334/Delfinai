

function GetID(key) {

    let id = localStorage.getItem(key + `_id`)
    if (id === null) {
        localStorage.setItem(key + `_id`, 1)
        return 1;
    }
    id = parseInt(id)
    id++
    localStorage.setItem(key + `_id`, id)
    return id
}
function getFrom(key) {
    const data = localStorage.getItem(key)
    if (data === null) {
        localStorage.setItem(key, JSON.stringify([]))
        return [];
    }
    return JSON.parse(data)
}
export function Create(key, data) {
const oldData =  getFrom(key);
const newData = {...data, id: GetID(key)}
oldData.push(newData)
localStorage.setItem(key, JSON.stringify(oldData))
}

function Read(key) {
const oldData = getFrom(key);
return oldData
}
function Update(key, data,id) {
    let oldData = getFrom(key);
    oldData = oldData.filter(a => a.id !== id)
    const newData = {...data, id: id}
    oldData.push(newData)
    localStorage.setItem(key, JSON.stringify(oldData))
}
function Destroy(key, id) {
let oldData = getFrom(key);
oldData = oldData.filter(a => a.id !== id)
localStorage.setItem(key, JSON.stringify(oldData))
}
export { Read, Update, Destroy }