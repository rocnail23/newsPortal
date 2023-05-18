import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import News from './components/News'
function App() {
  
  const [categoryRequired, setCategoryRequired] = useState("")
  const [news, setNews] = useState([])
  useEffect(() => {
    const getNews = async () => {
      const url = `http://api.mediastack.com/v1/news?access_key=8f5e1eeab1dd8b49ae81207422045685&categories=${categoryRequired}`
      const res = await fetch(url)
      const news = await res.json()
      
      setNews(news.data)
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
