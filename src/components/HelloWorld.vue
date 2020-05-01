<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hi, this a project for my school for quarintine.
    </p>
    <h3>Game controls.</h3>
    <ol>
      <li>click a tile</li>
      <li>
        After you click(or tap) a question and multiple answers for the
        question.
      </li>
      <li>
        Lastly, click or tap the back arrow in the bottom left togo back to the
        question tiles.
      </li>
    </ol>
    <div class="gameBoard">
      <question-entry
        :entry="item"
        v-for="item in questions"
        :key="item.index"
      ></question-entry>
    </div>
  </div>
</template>

<script>
import QuestionEntryVue from "./QuestionEntry.vue";
const entries = [
  {
    label: `age`,
    question: "How old am I?",
    choices: ["9", "39", "38", "3"],
    answer: 0
  },
  {
    label: `number`,
    question: "What is Jackie's number?",
    choices: ["44", "24", "3", "42"],
    answer: 3
  },
  {
    label: `mlbTeam`,
    question: "For which Major League Baseball team(s) did Jackie play?",
    choices: [
      "New York Giants",
      "Brooklyn Dodgers",
      "New York Yankees",
      "New York Mets"
    ],
    answer: 1
  },
  {
    label: `negroLeagueTeam`,
    question: "For which negro league team(s) did Jackie play?",
    choices: [
      "Homestead Grays",
      "Chicago American Giants",
      "Kansas City Monarchs",
      "Pittsburgh Crawfords"
    ],
    answer: 2
  }
];

export default {
  name: "HelloWorld",
  components: {
    "question-entry": QuestionEntryVue
  },
  props: {
    msg: String
  },
  data: function() {
    return { questions: entries };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameBoard {
  margin: 2.5rem auto 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  border: 2px solid white;
  background: rgba(255 255 255 25%);
  padding: 0.5rem 2rem;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #bd0a04;
}
</style>
