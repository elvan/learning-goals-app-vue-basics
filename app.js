const app = Vue.createApp({
  data() {
    return {
      pageTitle: 'My Course Goal',
      courseGoal: 'Learn Vue and finish the course!'
    };
  }
});

app.mount('#user-goal');
