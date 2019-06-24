<script>
import { AntdMobileVueSample } from './entry';
export default {
    name:  'AntdMobileVueLibDev', // vue library dev component
    components: {
        AntdMobileVueSample,
    },
}
</script>

<template>
    <div class="antd-mobile-vue-lib-dev">
        <antd-mobile-vue-sample></antd-mobile-vue-sample>
    </div>
</template>

<style scoped>
    .antd-mobile-vue-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
