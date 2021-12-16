import { listItemTemplate } from './listItem.template.js'

const buttonCreateTask =  document.querySelector('.create-task')
const buttonCancel =  document.querySelector('#btnCancel')
const buttonSave =  document.querySelector('#btnSave')
const buttonClose =  document.querySelector('#btnClose')


const form = document.querySelector('form')
const input = document.querySelector('input')

const taskList = []

buttonCreateTask.onclick = (event) => {
    form.classList.remove('hide')
}

buttonCancel.onclick = (event) => {
    event.preventDefault()
    form.classList.add('hide')
}

buttonClose.onclick = (event) => {
    event.preventDefault()
    form.classList.add('hide')
}

buttonSave.onclick = (event) => {
    event.preventDefault()
    const id = Date.now()
    const title = input.value
    const task = { title, id }
    taskList.push(task)
    const taskListJson = JSON.stringify(taskList)


  localStorage.setItem('tasks', taskListJson)
  input.value = ''
}



window.addEventListener('DOMContentLoaded', () => {
    const tasksJson = localStorage.getItem('tasks')
    const tasks = JSON.parse(tasksJson)
    const taskListElement = document.querySelector('.task-list')
    const taskWrapper = document.querySelector('.task-wrapper')

    if(tasks && tasks.length) {

        taskWrapper.classList.remove('hide')

        tasks.forEach((task) => {
             const listItem = listItemTemplate(task)
             taskListElement.insertAdjacentHTML('beforeend',listItem)
        })
    }
})