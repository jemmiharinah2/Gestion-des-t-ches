document.getElementById('addTask').addEventListener('click', function() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;

  addTask(title, description, priority, 'todo');

  const modal = new bootstrap.Modal(document.getElementById('taskStatusModal'));
  document.getElementById('statusText').innerText = `La tâche "${title}" a été bien ajoutée dans la liste des à faire.`;
  modal.show();
});

window.onload = function() {
  addTask('La gestion de boîte email', 'Plus important', 'Plus importante', 'todo');
  addTask('La gestion de planning', 'Plus important', 'Plus importante', 'todo');
  addTask('L’organisation de déplacements', 'Plus important', 'Plus importante', 'todo');
  addTask('Gestion de boîte email', 'Plus important','Plus importante', 'todo');
  addTask('Gestion de planning', 'Plus important','Plus importante', 'todo');
  addTask('Organisation de déplacements', 'Plus important','Plus importante', 'todo');
  addTask('management de réseaux sociaux', 'Plus important','Plus importante', 'todo');
  addTask('Suivi de paiements', 'Plus important','Plus importante', 'todo');
  addTask('Rédaction de courriers', 'moyen', 'Moyen', 'todo');
  addTask('Etablissement de devis et factures', 'moyen', 'Moyen', 'todo');
  addTask('Gestion de toute tâche administrative', 'moyen', 'Moyen', 'todo');
  addTask('Suivi des échéances', 'Moins importante','Moins importante', 'todo');
  addTask('Organisation de documents de manière digitale', 'moins importante','Moins importante', 'todo');
};

function addTask(title, description, priority, list) {
  const newTask = document.createElement('li');
  newTask.innerText = `${title} [${priority}]`;

  switch (list) {
    case 'todo':
      document.getElementById('todoList').appendChild(newTask);
      break;
    case 'inProgress':
      
      break;
    case 'blocked':
      
      break;
    case 'done':
      
      break;
    default:
      console.log('List not recognized');
  }
}

function moveTask(list) {
  const selectedList = document.getElementById(list + 'List'); 

 
  const taskToMove = selectedList.firstElementChild;

  if (taskToMove) { 
    switch (list) {
      case 'todo':
        document.getElementById('inProgressList').appendChild(taskToMove);
        break;
      case 'inProgress':
        document.getElementById('blockedList').appendChild(taskToMove);
        break;
      case 'blocked':
        document.getElementById('doneList').appendChild(taskToMove);
        break;
      case 'done':
        
        break;
      default:
        console.log('List not recognized');
    }
  }
}
