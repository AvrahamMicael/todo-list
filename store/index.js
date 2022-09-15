export const state = () => ({
    tasks: JSON.parse(( localStorage.tasks ?? '[]' )),
});

export const mutations = {

    ADD_TASK({ tasks }, content) {
        tasks.unshift({ content, done: false, id: Math.random() });
        localStorage.tasks = JSON.stringify(tasks);
    },

    TOGGLE_TASK_DONE({ tasks }, task) {
        task.done = !task.done;
        localStorage.tasks = JSON.stringify(tasks);
    },

    DELETE_TASK({ tasks }, task) {
        tasks.splice(tasks.indexOf(task), 1);
        localStorage.tasks = JSON.stringify(tasks);
    },

};
