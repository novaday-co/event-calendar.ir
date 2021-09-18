<template>
  <div>
    <img
      src="../../../assets/images/flutter_event_calendar.png" 
      alt=""
    >
    <div id="introduction">
      <h1>Event Calendar</h1>
      <br>
      <h2>How to install :</h2>
      <p>Add this to your package's pubspec.yaml file:</p>
    </div>

    <div class="code" id="long-div">
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
    <div class="code" id="long-div">
      <p class="mb-0 py-2">import 'package:flutter_event_calendar/flutter_event_calendar.dart';</p>
    </div>
    <!-- <code> this is a line of code </code>
    <code>> this is a line of code </code>
    <code>> this is a line of code </code>
    <code>> this is a line of code </code>  -->
    <img
     src="../../../assets/images/event_calendar_options.png"
     alt="">
    
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

  .code{
    font-size: 15px;
    background-color: #f3f3f3;
    box-shadow: 3px 3px 6px #e1e1e1;
    border-radius: 2px;
    padding: 10px;
    font-family: monospace;
    margin: 20px 0;
  }

  p{
    margin-top: 16px;
  }

  @media only screen and (max-width : 820px) {
    #long-div{
      width : fit-content;
    }
  }
  @media only screen and (max-width : 1240px ) {
    img{
      width : 100% ;
    }
  }
</style>
