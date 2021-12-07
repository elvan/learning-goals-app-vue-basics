const app = Vue.createApp({
  data() {
    return {
      pageTitle: 'My Course Goal',
      courseGoalA: '<span>Learn Vue and finish the course!</span>',
      courseGoalB: '<span>Build a complete app with Vue!</span>',
      vueLink: 'https://vuejs.org/'
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');
