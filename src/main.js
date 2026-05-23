import './style.css'
import dayjs from 'dayjs'

document.querySelector('#app').innerHTML = `
  <div class="p-10">
    <h1 class="text-2xl font-bold text-blue-500 mb-6">
      Kalkulator dni od urodzenia
    </h1>

    <form id="birthForm" class="flex gap-4">
      <input
        type="date"
        id="birthDate"
        class="border p-2"
        required
      />

      <button
        type="submit"
        class="bg-blue-300 p-4 rounded"
      >
        Submit
      </button>
    </form>

    <dialog
      id="resultDialog"
      class="bg-gray-200 text-red-600 p-6 rounded mt-6"
    >
      <button
        id="closeDialog"
        class="float-right text-black"
      >
        X
      </button>

      <p id="resultText"></p>
    </dialog>
  </div>
`

const form = document.getElementById('birthForm')
const dialog = document.getElementById('resultDialog')
const resultText = document.getElementById('resultText')
const closeDialog = document.getElementById('closeDialog')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const birthDate = document.getElementById('birthDate').value

  const today = dayjs()
  const birth = dayjs(birthDate)

  const days = today.diff(birth, 'days')

  let message = `Minęło ${days} dni od twojego urodzenia.`

  if (
    today.date() === birth.date() &&
    today.month() === birth.month()
  ) {
    message += ' Wszystkiego najlepszego!'
  }

  resultText.textContent = message

  dialog.showModal()
})

closeDialog.addEventListener('click', () => {
  dialog.close()
})