import React from 'react'
import { useDispatch } from 'react-redux'
import { ReduxTodoPost } from '../../redux/actions/todoActions'

const TodoRedux = () => {
    const dispatch = useDispatch()
    const [todoData, setTodoData] = useState([
        task="",
        desc="",
        priority=""

    ])
    const handleSubmit = () => {
dispatch(ReduxTodoPost(todoData))
    }
  return <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">

            <form onSubmit={handleSubmit}>
            <div class="card">
              <div class="card-header">Todo</div>
              <div class="card-body">
                <div>
                  <label for="task" class="form-label">First task</label>
                  <input
                    type="text"
                    class="form-control"
                    id="task"
                    value={todoData.task}
                    onChange={e => setTodoData({...todoData, task:e.target.value})}
                    placeholder="Enter Your task"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div class="mt-2">
                  <label for="desc" class="form-label">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="desc"
                    placeholder="Enter task description"
                    value={todoData.desc}
                    onClick={e => setTodoData({...todoData, desc:e.target.value})}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add description</div>
                </div>
                <div class="mt-2">
                  <label for="priority"> Priority</label>
                  <select class="form-select" id="priority"
                  value={todoData.priority}
                  onChange={e => setTodoData({...todoData, priority:e.target.value})}
                  >
                    <option selected>Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary w-100 mt-3">
                  Add Todo
                </button>
              </div>
            </div>
            </form>


            {/* <!-- output start --> */}
            {/* <div class="card mt-4">
              <div
                class="card-header d-flex justify-content-between"
                data-bs-toggle="collapse"
                data-bs-target="#task1"
              >
                task 1
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-warning"
                    data-bs-target="#editModal"
                    data-bs-toggle="modal"
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    data-bs-target="#deleteModal"
                    data-bs-toggle="modal"
                  >
                    delete
                  </button>
                </div>
              </div>
              <div class="collapse" id="task1">
                <div class="card-body">task 1 description</div>
              </div>
            </div> */}
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
                  placeholder="Enter task description"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add description</div>
              </div>
              <div class="mt-2">
                <label for="mpriority"> Priority</label>
                <select class="form-select" id="mpriority">
                  <option selected>Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary w-100 mt-3">
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

export default TodoRedux