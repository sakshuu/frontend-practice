import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [tododataAdded, setTododataAdded] = useState({
        task:"",
        desc:"",
        priority:"",
    })
    const [todoget, setTodoget] = useState("")
    const [deleetTodo, setdeleetTodo] = useState("")
    const [updated, setUpdated] = useState("")
    
    const Tododata = async (todo) => {
        try {
            const {data} = await axios.post("http://localhost:5000/todo", todo)
            setTododataAdded(data)
        } catch (error) {
            console.log(error);
        }
    }

    const Todofetch = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/todo")
            setTodoget(data)
        } catch (error) {
            console.log(error);
        }
    }

    const TodoDelete =  async(id) => {
        try {
            const {data} = await axios.delete(`http://localhost:5000/todo/${id}`,)
            setdeleetTodo(data)
        } catch (error) {
            console.log(error);
        }
    }

    const updatedTodo = async (id, dataedit) => {
try {
    const {data} = await axios.put(`http://localhost:5000/todo/${id}`, dataedit)
    setUpdated(data)

} catch (error) {
    console.log(error);
}
    }

    useEffect(() => {
        Todofetch()
    }, [deleetTodo,tododataAdded])

  return <>
  {/* {JSON.stringify(tododataAdded)} */}
  {JSON.stringify(todoget)}
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Todo</div>
              <div class="card-body">
                <div>
                  <label for="task" class="form-label">First task</label>
                  <input
                    type="text"
                    class="form-control"
                    id="task" 
                    value={tododataAdded.task}
                    onChange={e => setTododataAdded({...tododataAdded, task: e.target.value})}
                    placeholder="Enter Your task"/>

                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div class="mt-2">
                  <label for="desc" class="form-label">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="desc" value={tododataAdded.desc}
                    onChange={e => setTododataAdded({...tododataAdded, desc: e.target.value})}
                    placeholder="Enter task description"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add description</div>
                </div>
                <div class="mt-2">
                  <label for="priority"> Priority</label>
                  <select class="form-select" id="priority" value={tododataAdded.priority}
                  onChange={e => setTododataAdded({...tododataAdded, priority: e.target.value})}>
                    <option selected>Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <button type="submit" onClick={e => Tododata(tododataAdded)} class="btn btn-primary w-100 mt-3">
                  Add Todo
                </button>
              </div>
            </div>






            {/* <!-- output start --> */}
            {
 todoget && todoget.map((item, i) => <>
                            <div class="card mt-4" key={item.i}>
              <div
                class="card-header d-flex justify-content-between"
                data-bs-toggle="collapse"
                data-bs-target="#task1"
              >
                {item.task}
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-warning"
                    data-bs-target="#editModal"
                    data-bs-toggle="modal"
                    onClick={e => setUpdated(item)}
                  >
                    edit
                  </button>{' '}
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    // data-bs-target="#deleteModal"
                    // data-bs-toggle="modal"
                    onClick={e => TodoDelete(item.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
              <div class="collapse" id="task1">
                <div class="card-body">{item.desc}</div>
              </div>
            </div>
                </>)
            }




            {/* <!-- output end--> */}
          </div>
        </div>
      </div>
      {/* <!-- edit Modal --> */}
      <div class="modal fade" id="editModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModal">Edit Todo</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <label for="mtask" class="form-label">First task</label>
                <input
                  type="text"
                  class="form-control"
                  id="mtask"
                  value={updated.task}
                  onChange={e => setUpdated({...updated, task:e.target.value})}
                  placeholder="Enter Your task"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add task.</div>
              </div>
              <div class="mt-2">
                <label for="mdesc" class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="mdesc"
                  value={updated.desc}
                  onChange={e => setUpdated({...updated, desc:e.target.value})}
                  placeholder="Enter task description"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add description</div>
              </div>
              <div class="mt-2">
                <label for="mpriority"> Priority</label>
                <select class="form-select" id="mpriority" value={updated.priority}
                onChange={e => setUpdated({...updated, priority:e.target.value})}
                >
                  <option selected>Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary w-100 mt-3" onClick={ e=> updatedTodo(updated.id, updated)}>
                Update Todo
              </button>
              <button
                type="button"
                class="btn mt-2 w-100 btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Delete Modal --> */}
      <div class="modal fade" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-danger">
                Are you sure you want delete this todo ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-danger">
              <p class="text-center text-muted mb-5">
                You can delete this todo at any time. If you change your mind, you
                might not be able to recover it
              </p>
              <div class="btn-group w-100">
                <button type="button" class="btn btn-outline-danger">Yes</button>
                <button type="button" class="btn btn-success">NO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Todos