<script setup>
import { useStore, ref, onMounted } from '@nuxtjs/composition-api';

const { state, commit } = useStore();

const newTaskContent = ref('');

const addTask = () => {
  if(!newTaskContent.value) return;
  commit('ADD_TASK', newTaskContent.value);
  newTaskContent.value = '';
};

const removeStarsIfAlreadyExistAndCreate = () => {
  document.body.querySelectorAll('i').forEach(el => el.remove());
  const count = 250;
  const addUnit = (number, unit = 'px') => number + unit;
  for(let i = 0; i < count; i++)
  {
    const star = document.createElement('i');
    const size = Math.random() * 4;
    const x = Math.floor( Math.random() * window.innerWidth - size );
    const y = Math.floor( Math.random() * window.innerHeight - size );
    const duration = 2 + Math.random() * 6;
    const delay = Math.random() * 10;

    star.style.left = addUnit(x);
    star.style.top = addUnit(y);
    star.style.width = addUnit(size);
    star.style.height = addUnit(size);
    star.style.animationDuration = addUnit(duration, 's');
    star.style.animationDelay = addUnit(delay, 's');

    document.body.appendChild(star);
  }
};

onMounted(removeStarsIfAlreadyExistAndCreate);

window.addEventListener('resize', removeStarsIfAlreadyExistAndCreate);
</script>
    
<template>
  <main>
    <div class="text-center">
      <h1>Task Board</h1>
      <p>Create a list of tasks</p>
  
      <input
        type="text"
        autofocus
        v-model="newTaskContent"
        @keydown.enter="addTask"
      >
      <button type="button" class="btn btn-success btn-sm" @click="addTask">ADD</button>
    </div>

    <div class="container tasks">
      <TransitionGroup name="bounce">
        <Task
          v-for="(task, index) in state.tasks"
          :key="task.id"
          :task="task"
        />
      </TransitionGroup>
    </div>
  </main>
</template>
