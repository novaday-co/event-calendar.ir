<template>
  <div id="CalendarType">
    <h1>
      this is CalendarType content
    </h1>

  <div>
    <vue-code-highlight language="dart">
      <pre class="mb-0 py-2">EventCalendar(
          calendarType: CalendarType.GREGORIAN,)</pre>
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
  name: 'CalendarType',
  components: {
    VueCodeHighlight
  }
}
</script>

<style>
  .Home {
    padding: 50px;
  }

  .language-dart {
    border-radius: 5px; 
  }
</style>
