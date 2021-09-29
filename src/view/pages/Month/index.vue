<template>
  <div id="Month">
    <h1>
      this is Month content
    </h1>
    <div class="container">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        voluptates sunt similique ullam culpa dicta debitis tenetur dolorem
        eaque, ad expedita reiciendis vero! Iste adipisci quibusdam dolor
        veniam. Ab, voluptate.
      </p>

      <vue-code-highlight language="javascript">
        <pre class="mb-0 py-2">EventCalendar(dateTime:"asdf")</pre>
      </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-okaidia.css'
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-dart'

export default {
  name: 'Month',
  components: {
    VueCodeHighlight
  }
}
</script>

<style>
.Home {
  padding: 50px;
}

h1 {
  margin-left: 35px;
}

.container {
  display: flex;
  flex-direction: row;
}

p {
  width: 50%;
  max-height: 70%;
  margin: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

@media only screen and (min-width: 1916px) {
  .container {
    justify-content: center;
  }
}

@media only screen and (max-width: 728px) {
  .container {
    flex-direction: column;
  }
}
</style>
