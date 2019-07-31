# @b keystrokes
vs ctrl+/ = split window

### how to setup a hotkey in VS:
🔗 https://docs.microsoft.com/en-us/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio?view=vs-2019

# @b FrontendTasks()
🚀 consolidate common display elements into _Pretty 
🍰 write humans to a file
// load file and display
// move human to vue-x; 
// access in other components
// work with filter map applications
// review jest
// develop unit test for human file (is present, has json)
// 


# @b BackendTasks()
evsite migrate humans to json. 
* need to load humans from:
    * static files /c0re/filename
    * json
    * graphql
    * json-rpc?
* how does deployment work? 
* still need effect
https://css-tricks.com/intro-to-vue-5-animations/


@b vue() notes

netninja tutorial https://www.youtube.com/watch?v=jgw82b5Y2MU
^^^ video 3/?? https://www.youtube.com/watch?v=PjR97QzOrJM

CSS animations (multi-part not complete. )
img {
    transform: rotateZ(-90deg) translateY(200px)
}

.circle {
    width: 100px;
    padding: 50px;
    line-height: 0;
    margin: 60px auto;
    background: pink;
    color: white; 
    border-radius: 50px;
    cursor: pointer; 
    transition: background 1s, transform 0.3s;
}

.circle:hover {
    background: salmon; 
    transform: rotate(360deg);
}

### css transform vs. translate vs. transition? 
* transform  rotateX(0deg), rotateY(0deg), rotateZ(0deg), linear|ease-in|...
* translate  moveX(10)
* transition:  translate, transform 0.3s 1s, ...
* animate: 
https://vuejs.org/v2/guide/transitions.html
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>

new Vue({
  el: '#demo',
  data: {
    show: true
  }
})

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



Elastic stroke CSS+SVG
https://codepen.io/sanketjpatel/pen/GgpdGB


ideas:
radial highlight on mouseover/link css tricks. 

20190722 NOTES: 
Glitch effect  (still in app.vue)
https://github.com/ianaya89/vue-glitch
alternate glitch with typing
