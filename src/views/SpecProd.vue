<template>
<div>
        <display-product></display-product>

</div>
</template>

<script>
    import DisplayProduct from "../components/DisplayProduct";
    export default {
        name: "SpecProd",
        components: {DisplayProduct},
        data() {
                return{
                        Id
                };
        },
       created() {

                {
                    this.Id = this.$route.params.Id;
                    console.log(this.Id)
                }
            }
    }
</script>

<style scoped>

</style>
