<template>
  <div>
    <h5 class="text-left">{{ title }}</h5>
    <br />
    <div class="row">
      <div class="col-sm-4">
        <div class="card" style="width: 100%;">
          <img
            src="http://via.placeholder.com/348x196"
            class="card-img-top"
            alt="image"
          />
          <div class="card-body text-left">
            <small>Design</small>
            <h5 class="card-title">Design Better Podcast</h5>
            <span>
              <img src="@/assets/mic.svg" class="mic" alt="image" />Aarron
              Walter and Eli Woolery</span
            >
            <b-button v-b-modal.modalDisplay variant="primary"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line></svg
              >&nbsp;Follow</b-button
            >
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 100%;">
          <img
            src="http://via.placeholder.com/348x196"
            class="card-img-top"
            alt="image"
          />
          <div class="card-body text-left">
            <small>Programming</small>
            <h5 class="card-title">Software Engineering Radio</h5>
            <span>
              <img src="@/assets/mic.svg" class="mic" alt="image" />Thomas
              Houston</span
            >
            <b-button v-b-modal.modalDisplay variant="primary"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line></svg
              >&nbsp;Follow</b-button
            >
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 100%;">
          <img
            src="http://via.placeholder.com/348x196"
            class="card-img-top"
            alt="image"
          />
          <div class="card-body text-left">
            <small>Programming</small>
            <h5 class="card-title">Javascript Jabber</h5>
            <span>
              <img src="@/assets/mic.svg" class="mic" alt="image" />Jabber
              Media</span
            >
            <b-button v-b-modal.modalDisplay variant="primary"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line></svg
              >&nbsp;Follow</b-button
            >
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modalDisplay" title="Confirmation">
      <p class="my-4">Are you sure you want to follow the Podcast?</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  color: #ffffff;
}
button.btn.btn-primary {
  margin-top: 20px;
  display: table;
}
button.btn.btn-primary:focus{
  outline: none;
  box-shadow: none;
}
small {
  text-transform: uppercase;
  color: #ff881a;
  font-size: 13px;
  padding: 10px 0px;
  display: block;
}
span {
  color: rgba(0, 0, 0, 0.4);
}
span .mic {
  width: 17px;
  margin-right: 10px;
}
</style>
