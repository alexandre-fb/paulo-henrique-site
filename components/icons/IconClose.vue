<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19.84" :fill="color" :width="width" :height="height">
        <path
            d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
    </svg>
</template>
    
<script>
export default {
    props: {
        color: {
            type: String,
            default: '#506F7F'
        },
        width: String,
        height: String
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
    
<style scoped></style>