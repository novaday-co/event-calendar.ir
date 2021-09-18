<template>
  <div>
    <img
      src="../../../assets/images/flutter_event_calendar.png" 
      alt="flutter_event_calendar"
      class="calendar_image-width"
    >
    <div id="introduction">
      <h1>Event Calendar</h1>
      <br>
      <h2>How to install :</h2>
      <p>Add this to your package's pubspec.yaml file:</p>
    </div>

    <div>
      <vue-code-highlight language="dart">
        <pre class="language-dart mb-0 py-2">dependencies: 
          flutter_event_calendar: ^0.0.8 </pre>
      </vue-code-highlight>
    </div>
    <p>Then You can install packages from the command line:</p>
    <div>
      <vue-code-highlight language="dart">
        <pre class="language-dart mb-0 py-2">$ pub get</pre>
      </vue-code-highlight>
    </div>
    <p>or</p>
    <div>
      <vue-code-highlight language="dart">
        <pre class="language-dart mb-0 py-2">$ flutter pub get</pre>
      </vue-code-highlight>
    </div>
    <p>Alternatively, your editor might support flutter pub get. Check the docs for your editor to learn more.
      Now in your Dart code, you can use:</p>
    <div>
      <vue-code-highlight language="dart">
        <pre class="language-dart mb-0 py-2">import 'package:flutter_event_calendar/flutter_event_calendar.dart';</pre>
      </vue-code-highlight>
    </div>
    <!-- <code> this is a line of code </code>
    <code>> this is a line of code </code>
    <code>> this is a line of code </code>
    <code>> this is a line of code </code>  -->
    <img
     src="../../../assets/images/event_calendar_options.png"
     alt="event_calendar_options"
     class="calendar_image-width"
    >
    
  </div>
</template>

<script>
import VueCodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'
  export default {
    name: 'home',
    components:{
      VueCodeHighlight
    }
  }
</script>
<style scope>
  #introduction{
    margin-top: 50px;
  }

  h1{
    font-size: 35px;
    border-bottom: 1px solid rgb(206, 206, 216);
    padding-bottom: 3px;
  }

  h2{
    font-size: 27px;
    border-bottom: 1px solid rgb(206, 206, 216);
    padding-bottom: 3px;
  }

  p{
    margin-top: 16px;
  }

  .calendar_image-width {
    max-width: 100%;
  }
</style>
