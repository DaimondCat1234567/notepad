let b = document.getElementById('blok');
let doc = {}
doc.input = document.getElementById('input')
doc.num = document.getElementById('input1')
doc.input.value = ''
doc.num.value = ''
function update() {
  document.getElementById(`b${doc.num.value}`).textContent = doc.input.value
}
function newB() {
  b.innerHTML += `
    <p id="b${doc.num.value}">
      doc.input.value
    </p>
  `
}
function save() {
  localStorage.setItem('notepad-data', JSON.stringify({
    b: b.innerHTML
  }))
}
function load() {
  let locData = JSON.parse(localStorage.getItem('notepad-data'))
  b.innerHTML = locData.b
}
