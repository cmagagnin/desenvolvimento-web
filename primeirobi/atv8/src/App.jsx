import { useState } from 'react'
import './index.css'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    const newTask = { id: Date.now(), text: value, done: false }
    setTasks(prev => [...prev, newTask])
    setText('')
  }

  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function toggleDone(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  return (
    <>
      <header>
        <h1>To Do List</h1>
        <p style={{textAlign:'center', color:'var(--muted)'}}>Organize a sua vida</p>
      </header>

      <main>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="taskInput" className="visually-hidden">Nova tarefa</label>
          <input
            id="taskInput"
            type="text"
            placeholder="Digite a sua tarefa"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button id="addTaskButton" type="submit">Adicionar</button>
        </form>

        <section aria-labelledby="lista-tarefas-titulo">
          <h2 id="lista-tarefas-titulo">Suas tarefas</h2>
          <ul id="taskList">
            {tasks.map(task => (
              <li key={task.id}>
                <span className={task.done ? 'taskText done' : 'taskText'}>
                  {task.text}
                </span>

                <nav className="actions">
                  <button
                    className="iconBtn editBtn"
                    onClick={() => toggleDone(task.id)}
                    aria-label={`Marcar ou desmarcar: ${task.text}`}
                    type="button"
                    title="Marcar como concluída"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M15.232 5.232a2.5 2.5 0 013.536 3.536l-9.5 9.5-4.768 1.232 1.232-4.768 9.5-9.5z" stroke="#16a34a" strokeWidth="2" />
                    </svg>
                  </button>

                  <button
                    className="iconBtn trashBtn"
                    onClick={() => removeTask(task.id)}
                    aria-label={`Remover: ${task.text}`}
                    type="button"
                    title="Remover"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#ef4444" aria-hidden="true">
                      <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM6 9h2v8H6V9z"/>
                    </svg>
                  </button>
                </nav>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <small>Use o lápis para marcar como concluída e a lixeira para remover.</small>
      </footer>
    </>
  )
}
