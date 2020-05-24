<template>
    <div class="w-100 ss-abount">
        <SSBreadcrumb />
        <router-view />
    </div>
</template>
<script>
import p from '@/components/ModuleIdentifier';
export default {
    extends: p,
    data(){
        return {
            moduleId: 1
        };
    }
}
</script>
<style lang="scss" scoped>
.ss-abount{
    margin: 2rem 0;
}
</style>