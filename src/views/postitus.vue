<template>
    <component :is="dynamicComponent" v-if="id"></component>
    <h1 v-else>Postitused pole hetkel kättesaadavad.</h1>
</template>

<script>
import postitus1 from '../components/postitused/postitus1.vue';
import postitus2 from '../components/postitused/postitus2.vue';
import postitus3 from '../components/postitused/postitus3.vue';
import postitus4 from '../components/postitused/postitus4.vue';
import postitus5 from '../components/postitused/postitus5.vue';
import postitus6 from '../components/postitused/postitus6.vue';


export default {
    name: "App",
    components: {
        'postitus1': postitus1,
        'postitus2': postitus2,
        'postitus3': postitus3,
        'postitus4': postitus4,
        'postitus5': postitus5,
        'postitus6': postitus6,
    },
    data() {
        return {
            id: null,
        };
    },
    computed: {
        dynamicComponent() {
            return this.id ? `postitus${this.id}` : null;
        }
    },
    watch: {
      '$route.params.id': {
        immediate: true,
        handler(newVal) {
            this.id = newVal;
        }
      }
    },
    methods: {},
    created() {
        this.id = this.$route.params.id;
    }
}
</script>