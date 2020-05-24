<template>
    <div class="w-100">
        <SSBreadcrumb />
        <router-view />
    </div>
</template>
<script>
import p from '@/components/ModuleIdentifier';

export default {
    extends: p,
    data() {
        return {
            moduleId: 3
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>