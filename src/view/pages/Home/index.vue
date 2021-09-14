<template>
  <div>
    <img
      src="../../../assets/images/flutter_event_calendar.png" 
      alt=""
    >
    <div id="introduction">
      <h1>Event Calendar</h1>
      <h2>How to install :</h2>
      <p>Add this to your package's pubspec.yaml file:</p>
    </div>

    <div class="code">
      <pre class="mb-0 py-2">dependencies: 
    flutter_event_calendar: ^0.0.8 </pre>
    </div>
    <p>Then You can install packages from the command line:</p>
    <div class="code">
      <pre class="mb-0 py-2">$ pub get</pre>
    </div>
    <p>or</p>
    <div class="code">
      <pre class="mb-0 py-2">$ flutter pub get</pre>
    </div>
    <p>Alternatively, your editor might support flutter pub get. Check the docs for your editor to learn more.
      Now in your Dart code, you can use:</p>
    <div class="code">
      <p class="mb-0 py-2">import 'package:flutter_event_calendar/flutter_event_calendar.dart';</p>
    </div>
    <!-- <code>mdden dnwndje</code>
    <code>mdden neinfjorn</code>
    <code>mdden mjfineif</code>
    <code>mdden mfdfjn</code>  -->
    
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>
<style scope>
  #introduction{
    margin-top: 50px;
  }

  .code{
    font-size: 15px;
    background-color: #f3f3f3;
    box-shadow: 4px 7px 1px #cfcfcf;
    border-radius: 2px;
    padding: 10px;
    font-family: monospace;
    margin: 20px 0;
  }
  
</style>
