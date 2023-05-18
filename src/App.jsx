import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import News from './components/News'
function App() {
  
  const [categoryRequired, setCategoryRequired] = useState("")
  const [news, setNews] = useState([])
  useEffect(() => {
    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoryRequired}&apiKey=78f63796b3fb43bd9230ab65376e8eab`
      const res = await fetch(url)
      const news = await res.json()
      setNews(news.articles)
    }

    getNews()
  },[categoryRequired])

  return (
   <Fragment>
    <Header title="noticias venezuela"/>
    <div className='container white'>
    <Form setCategoryRequired={setCategoryRequired}/>
    <News news={news}/>
    </div>
   </Fragment>
  )
}

export default App
