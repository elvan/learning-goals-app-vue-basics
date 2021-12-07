const app = Vue.createApp({
  data() {
    return {
      pageTitle: 'My Course Goal',
      courseGoal: 'Learn Vue and finish the course!',
      vueLink: 'https://vuejs.org/'
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue and finish the course!';
      } else {
        return 'Build a complete app with Vue!';
      }
    }
  }
});

app.mount('#user-goal');
