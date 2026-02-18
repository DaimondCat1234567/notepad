let b = document.getElementHyId('blok');
doc = {}
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
function save() {}
function load() {}
