<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component
export default class AntdMobileVueSample extends Vue {
    counter = 5
    initCounter = 5

}
</script>

<template>
    <div class="antd-mobile-vue-sample">
        <p>The counter is set to <b>{{counter}}</b>.</p>
        <button @click="counter += 10">Click +10</button>
        <button @click="counter -= 1">Click -1</button>
        <button @click="counter = initCounter">Reset</button>
    </div>
</template>

<style scoped>
    .antd-mobile-vue-sample {
        display: block;
        width: 400px;
        margin: 25px auto;
        border: 1px solid #ccc;
        background: #eaeaea;
        text-align: center;
        padding: 25px;
    }
    .antd-mobile-vue-sample p {
        margin: 0 0 1em;
    }
</style>
