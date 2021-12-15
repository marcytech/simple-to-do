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
    const value = input.value
    const data = { task: value }
    taskList.push(data)
    const taskListJson = JSON.stringify(taskList)


  localStorage.setItem('task', taskListJson)
  input.value = ''
}