Vue.component('coupon', {
  template: `
    <input type="text" @blur="$emit('applied')"></input>
  `
});

new Vue({
  el: '#root',
  data: {
    isApplied: false
  },
  methods: {
    onCouponApplied(){
      this.isApplied = true;
    }
  }
});
