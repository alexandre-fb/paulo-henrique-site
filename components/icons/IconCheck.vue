<template>
    <svg :width="width" :height="height" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.791 0.205046C10.07 0.478441 10.07 0.922434 9.791 1.19583L4.07736 6.79495C3.79837 7.06835 3.34529 7.06835 3.06631 6.79495L0.209484 3.99539C-0.0695025 3.722 -0.0695025 3.278 0.209484 3.00461C0.488471 2.73121 0.941545 2.73121 1.22053 3.00461L3.57295 5.30769L8.78219 0.205046C9.06118 -0.0683487 9.51425 -0.0683487 9.79324 0.205046H9.791Z"
            :fill="color" />
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