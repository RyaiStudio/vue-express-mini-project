<template>
<p class="control">
    <a v-bind:class="['button', button.btClass]"
        data-social-network="Twitter" 
        data-social-action="tweet" 
        data-social-target="http://localhost:4000" 
        target="_blank" 
        v-bind:href="button.url">

        <span class="icon">
            <i v-bind:class="button.icons"></i>
        </span>
        <span> {{button.content}} </span>
    </a>
</p>
</template>

<script>
export default {
    props: ['button']
}  
</script>