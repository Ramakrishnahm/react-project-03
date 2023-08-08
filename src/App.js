import React,{useState} from'react'
import SingleQuestion from './Question'
import data from './data'

const App = () =>{

  const [question,setQuestion] = useState(data)
  return(
    <main>
      <div className='container'>
        <h3>questions and answer about login</h3>
        <section className='info'>
          {question.map((question) => {
            return(
              <SingleQuestion key = {question.id} {...question}/>
            )
          })}

        </section>

      </div>

    
    </main>
  )
}

export default App