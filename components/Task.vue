<script setup>
import { useStore } from '@nuxtjs/composition-api';

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
});

const { commit } = useStore();

const toggleTaskDone = () => {
    commit('TOGGLE_TASK_DONE', props.task);
};

const deleteTask = () => {
    commit('DELETE_TASK', props.task);
};
</script>

<template>
    <section class="task d-flex justify-content-between" :class="{ done: task.done }">
        <span class="my-auto text-break">{{ task.content }}</span>
        <span class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-center justify-content-sm-between">
            <button @click="toggleTaskDone" class="btn btn-success">{{ task.done ? 'UNDO' : 'DONE' }}</button>
            &nbsp;
            <button @click="deleteTask" class="btn btn-danger">DELETE</button>
        </span>
    </section>
</template>
