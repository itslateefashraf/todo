import { useEffect, useState } from 'react'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import CustomInput from './components/CustomInput/CustomInput';

function App() {
  const [count, setCount] = useState(0)
  const [todoList, setTodoList] = useState([
   
  ]);

  const [todoname,setTodoName] =useState('');
  const [tododetail,setTodoDetail] =useState('');

  useEffect(() => {
    console.log('umar',count)
    const data = JSON.parse(localStorage.getItem('todos'))
    if(data == null){
      return;
    }
    setTodoList(data)
  },[count,todoname])


  const handleSubmit = () =>{
    if(!todoname || !tododetail){
      alert('Enter data first')
      return;
    }
    const newTodo = {name: todoname,detail: tododetail};

    setTodoList([...todoList,  newTodo] );

    //get all tods from localstorage
    //set or push new todo in existing localStorage todos
    const lsTodos = JSON.parse(localStorage.getItem('todos'))
    if(lsTodos ==null){
      localStorage.setItem('todos',JSON.stringify([newTodo]));
    }else{
      lsTodos.push(newTodo)
      localStorage.setItem('todos',JSON.stringify(lsTodos));
    }
  }
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-8 offset-2">
            <h2 className='my-3'>New Todo App</h2>

            <div className="accordion" id="accordionExample">

              {
                todoList.map((todo,index) => {
                  return <>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+index} aria-expanded="false" aria-controls={"collapseOne"+index}>
                          {todo.name}
                        </button>
                      </h2>
                      <div id={"collapseOne"+index} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                         {todo.detail}
                        </div>
                      </div>
                    </div>
                  </>

                })
              }

            </div>

          </div>

        </div>

        <div className="row mt-5">
          <div className="col-8 offset-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Todo Name</label>
              <input type="text" onChange={(e)=> setTodoName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Todo Detail</label>
              <textarea className="form-control" onChange={(e)=> setTodoDetail(e.target.value)} id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            <div className="btn-wrapper d-flex justify-content-center">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
