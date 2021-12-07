const app = Vue.createApp({
  data() {
    return {
      pageTitle: 'My Course Goal',
      courseGoal: 'Learn Vue and finish the course!',
      vueLink: 'https://vuejs.org/'
    };
  }
});

app.mount('#user-goal');
