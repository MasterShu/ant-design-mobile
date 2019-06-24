<template>
  <VFeedback>
    <a @click="handleClick">
      <slot></slot>
    </a>
  </VFeedback>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import VFeedback from '@vmcl/feedback';

export type ButtonType = 'default' | 'primary' | 'ghost' | 'warning';
export type ButtonSize = 'large' | 'small';

@Component({
  components: {
    VFeedback,
  }
})
export default class Button extends Vue {
  @Prop({type: String, default: 'default'})  type!: ButtonType;
  @Prop({type: String, default: 'large'}) size!: ButtonSize;

  public install() {
    Vue.component(Button.name, Button)
  }

  protected handleClick() {
    this.$emit('click');
  }
}

</script>