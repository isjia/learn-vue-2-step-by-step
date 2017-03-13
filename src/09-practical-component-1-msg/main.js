Vue.component('message', {
  props: ['title', 'content'],
  template: `
    <article class="message" v-show="isDisplay">
      <div class="message-header">
        <p>{{title}}</p>
        <button class="delete" v-on:click="isDisplay = false"></button>
      </div>
      <div class="message-body">
        {{content}}
      </div>
    </article>
  `,
  data(){
    return {
      isDisplay: true
    }
  }
});

new Vue({
  el: '#root'
});
