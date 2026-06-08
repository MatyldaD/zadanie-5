import './style.css'
import { supabase } from './db.js'

document.querySelector('#app').innerHTML = `
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-blue-600 mb-6">
      Lista artykułów
    </h1>

    <div id="articles" class="space-y-4"></div>

    <h2 class="text-2xl font-bold mt-8 mb-4">
      Dodaj nowy artykuł
    </h2>

    <form id="articleForm" class="flex flex-col gap-3">
      <input class="border p-2" id="title" placeholder="Tytuł" required />
      <input class="border p-2" id="subtitle" placeholder="Podtytuł" required />
      <input class="border p-2" id="author" placeholder="Autor" required />
      <textarea class="border p-2" id="content" placeholder="Treść" required></textarea>

      <button class="bg-blue-600 text-white p-2 rounded" type="submit">
        Dodaj artykuł
      </button>
    </form>
  </div>
`

const articlesDiv = document.querySelector('#articles')
const form = document.querySelector('#articleForm')

async function getArticles() {
  const { data, error } = await supabase
    .from('article')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
  console.log(error)
  alert(JSON.stringify(error))
  articlesDiv.innerHTML = '<p>Błąd pobierania artykułów</p>'
  return
}

  articlesDiv.innerHTML = ''

  data.forEach((article) => {
    articlesDiv.innerHTML += `
      <div class="border p-4 rounded shadow">
        <h2 class="text-xl font-bold">${article.title}</h2>
        <h3 class="text-gray-600">${article.subtitle}</h3>
        <p><strong>Autor:</strong> ${article.author}</p>
        <p><strong>Data:</strong> ${article.created_at}</p>
        <p class="mt-2">${article.content}</p>
      </div>
    `
  })
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const title = document.querySelector('#title').value
  const subtitle = document.querySelector('#subtitle').value
  const author = document.querySelector('#author').value
  const content = document.querySelector('#content').value

  const { error } = await supabase
    .from('article')
    .insert([
      {
        title,
        subtitle,
        author,
        content
      }
    ])

  if (error) {
    console.log(error)
    alert('Nie udało się dodać artykułu')
    return
  }

  form.reset()
  getArticles()
})

getArticles()