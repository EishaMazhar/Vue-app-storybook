<template>
    <div v-if="visible" class="alert" :class="alertClass">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'Alert',
    props: {
      message: {
        type: String,
        default: ''
      },
      msgType: {
        type: String,
        validator: function (value) {
          return ['danger', 'success'].indexOf(value) !== -1
        },
        default: 'success' // default to success if not specified
      },
      size: {
        type: String,
        validator: function (value) {
          return ['small', 'medium', 'large'].indexOf(value) !== -1;
        },
      },
    },
    data() {
      return {
        visible: true
      };
    },
    computed: {
      alertClass() {
        // Apply different styles based on the type of message
        return {
          'alert-danger': this.msgType === 'danger',
          'alert-success': this.msgType === 'success',
          // Optionally add classes based on size prop
          'alert-small': this.size === 'small',
          'alert-medium': this.size === 'medium',
          'alert-large': this.size === 'large',
        };
      }
    },
    methods: {
      showAlert() {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000); // Hides the alert after 3 seconds
      }
    }
  }
  </script>
  
  <style scoped>
  .alert {
    padding: 10px;
    color: white;
    border-radius: 5px;
    text-align: center;
    position: fixed;
    top: 20px;
    right: 20px;
  }
  
  .alert-danger {
    background-color: red;
  }
  
  .alert-success {
    background-color: green;
  }
  
  /* Additional styles based on size */
  .alert-small {
    font-size: 12px;
    padding: 5px;
  }
  
  .alert-medium {
    font-size: 14px;
    padding: 10px;
  }
  
  .alert-large {
    font-size: 16px;
    padding: 15px;
  }
  </style>
  