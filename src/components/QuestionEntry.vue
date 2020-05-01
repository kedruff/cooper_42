<template>
  <div
    class="questionDetail"
    v-bind:class="{
      'answer-correct': answerCorrect,
      'answer-incorrect': !answerCorrect && isQuestionAnswered
    }"
  >
    <h3>{{ entry.question }} correct: {{ selectedAnswer }}</h3>
    <form v-on:submit.prevent="submitAnswer()">
      <div class="row" v-for="(answer, index) in entry.choices" :key="index">
        <label>{{ answer }}</label>
        <input type="radio" name="entry.label" :value="index" v-model="selectedAnswer" />
      </div>
      <button type="submit">Submit Answer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "QuestionEntry",
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedAnswer: null,
      answerCorrect: false,
      isQuestionAnswered: false
    };
  },
  methods: {
    submitAnswer() {
      this.isQuestionAnswered = true;
      if (this.entry.answer === this.selectedAnswer) {
        this.answerCorrect = true;
      } else {
        this.answerCorrect = false;
      }
    }
  }
};
</script>

<style scoped>
div[class*="answer"] {
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.answer-correct {
  border: 1px solid darkgreen;
  background: green;
}
.answer-incorrect {
  border: 1px solid darkred;
  background: red;
}
</style>
