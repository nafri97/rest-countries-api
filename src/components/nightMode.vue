<template>
    <div class="navbar">
        <h1>Where in the world?</h1>
        <div class="mode-toggle" @click="modeToggle" :class="darkDark">
          <div class="toggle">
          <div id="dark-mode" type="checkbox"></div>
          </div>
        </div>
    </div>
</template>

<script>
export default{
  data() {
      return {
          darkMode: false
      }
  },
  
  methods: {
      dark() {
          document.querySelector('body').classList.add('dark-mode');
          this.darkMode = true
          this.$emit('dark')
      },
  
      light() {
          document.querySelector('body').classList.remove('dark-mode');
          this.darkMode = false
          this.$emit('light')
      },
  
      modeToggle() {
          if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
              this.light()
          } else {
              this.dark()
          }
      },
  },
  
  computed: {
      darkDark() {
          return this.darkMode && 'darkmode-toggled'
      }
  }
}
</script>  