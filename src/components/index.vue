<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Content />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Content from '@/components/content'

export default {
  name: 'main',
  props: {
    msg: String
  },
  components: {
    Content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
