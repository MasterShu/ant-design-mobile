<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>  
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}

</script>
