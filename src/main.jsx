import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FaGithub, FaEdit, FaTrash } from "react-icons/fa";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import { GoSquareFill } from "react-icons/go";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg> */}
          <GoSquareFill />
          note
        </a>
      </div>
      <div className="flex-1 justify-center">
        <div className="typewriter">
          <TypeAnimation
            sequence={[
              "m",
              100,
              "made",
              500,
              "made by",
              1500,
              "made by riqyuzet",
              1000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "inline-block" }}
          />
        </div>
      </div>
      <div className="flex-1 justify-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="https://github.com/Qyuzet"
              target="_blank"
              className="text-xl"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <details>
              <summary>About Us</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="https://medium.com/@riqyuzet" target="_blank">
                    medium
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/riqyuzet/#"
                    target="_blank"
                  >
                    instagram
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Qyuzet
          </p>
        </aside>
      </footer>
    </>
  );
}

function TaskModal(props) {
  const handleClick = (e) => {
    props.action(e);
  };
  return (
    <dialog id="task_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">
          {props.isEdit ? "Edit Your Task" : "Add New Task"}
        </h3>
        <div className="py-4 flex justify-center items-center gap-2">
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Enter your task..."
            onChange={props.changes}
            value={props.value}
          ></textarea>
          <button className="btn h-20" onClick={(e) => handleClick(e)}>
            {props.isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </dialog>
  );
}

function AddTask() {
  return (
    <button
      className="btn bg-transparent btn-wide flex justify-start text-xl gap-4 ml-5 my-4 text-gray-500"
      onClick={() => document.getElementById("task_modal").showModal()}
    >
      <RiStickyNoteAddLine className="text-xl" /> Input Order
    </button>
  );
}

function TaskCard(props) {
  return (
    <div className="card bg-gray-100 w-60 shadow-md m-2 hover:shadow-lg transition-shadow">
      <div className="card-body p-4">
        <h2 className="card-title text-base mb-4">{props.data.text}</h2>
        <div className="card-actions justify-end gap-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => props.onEdit(props.data.id)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-sm btn-error"
            onClick={() => props.onDelete(props.data.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert ${props.type} fixed top-4 right-4 w-auto max-w-xs z-50`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{props.msg}</span>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: [],
      showAlert: false,
      alertMsg: "",
      alertType: "",
      editingTaskId: null,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showAlert(msg, type) {
    this.setState({
      showAlert: true,
      alertMsg: msg,
      alertType: type,
    });

    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 3000);
  }

  handleOnChange(event) {
    this.setState({
      input: event.target.value,
      showAlert: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.input.trim()) {
      this.showAlert("Task cannot be empty", "alert-warning");
      return;
    }

    if (this.state.editingTaskId !== null) {
      // Update existing task
      this.setState((state) => ({
        data: state.data.map((task) =>
          task.id === state.editingTaskId
            ? { ...task, text: state.input }
            : task
        ),
        input: "",
        editingTaskId: null,
      }));
      this.showAlert("Task updated successfully!", "alert-success");
    } else {
      // Add new task
      this.setState((state) => ({
        input: "",
        data: [...state.data, { id: Date.now(), text: state.input }],
      }));
      this.showAlert("Task added successfully!", "alert-success");
    }

    document.getElementById("task_modal").close();
  }

  handleEdit(id) {
    const task = this.state.data.find((t) => t.id === id);
    this.setState({
      input: task.text,
      editingTaskId: id,
    });
    document.getElementById("task_modal").showModal();
  }

  handleDelete(id) {
    this.setState((state) => ({
      data: state.data.filter((task) => task.id !== id),
    }));
    this.showAlert("Task deleted successfully!", "alert-error");
  }

  render() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap">
            <AddTask />
            <TaskModal
              isEdit={this.state.editingTaskId !== null}
              changes={this.handleOnChange}
              action={this.handleSubmit}
              value={this.state.input}
            />
            {this.state.showAlert && (
              <Alert type={this.state.alertType} msg={this.state.alertMsg} />
            )}
          </div>
          <div className="flex flex-wrap gap-4 items-start justify-start">
            {this.state.data.map((task) => (
              <TaskCard
                key={task.id}
                data={task}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
