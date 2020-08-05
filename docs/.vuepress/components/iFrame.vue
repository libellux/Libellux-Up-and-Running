<template>
    <iframe width="120" height="240" :src="ihtml" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</template>

<script>
  export default {
      props: {
          ihtml: {
              type: String
          }
      }
  }
</script>
