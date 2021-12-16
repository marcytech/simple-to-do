 export const listItemTemplate = (task) => {
    return /*html*/ `
        <li class="task-item" data-id="${task.id}">
            <p class="task-brief">${task.title}</p>
            <button class="btn btn-red">Remover</button>
            <button class="btn btn-green">Editar</button>
        </li>
    `
}