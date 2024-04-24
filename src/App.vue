<template>
  <header>
    <div class="wrapper">
      <h1>Bonjour 😃🎉</h1>
    </div>
  </header>

  <main>
    <h2>Welcome to my App</h2>
    <MyButton label="Custom Button" primary="true" @click="buttonClicked"></MyButton>
    <Alert
      v-if="isAlertVisible"
      :message="alertMessage"
      :msgType="alertType"
      @close="isAlertVisible = false"
    />
  </main>
</template>

<script>
import MyButton from '@/components/Button.vue'
import Alert from '@/components/Alert.vue'

export default {
  name: 'App',

  components: {
    MyButton,
    Alert
  },

  data() {
    return {
      isAlertVisible: false,
      alertMessage: 'Button Clicked!',
      alertType: 'success' // can be 'danger' as well
    }
  },

  methods: {
    buttonClicked() {
      this.isAlertVisible = true
      setTimeout(() => {
        this.isAlertVisible = false
      }, 3000) // automatically hide the alert after 3 seconds
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
