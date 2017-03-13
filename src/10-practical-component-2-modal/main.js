Vue.component('modal', {
  template: `
    <div class="modal is-active" v-on:click="$emit('close')">
      <div class="modal-background"></div>
        <div class="modal-content box">
          <!-- Any other Bulma elements you want -->
          <slot></slot>
        </div>
        <button class="modal-close" v-on:click="$emit('close')"></button>
      </div>
    </div>
  `
});

new Vue({
  el: '#root',
  data: {
    isDisplay: false
  }
});
