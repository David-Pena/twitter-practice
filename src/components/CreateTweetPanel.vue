<template>
    <div class="row mt-5">
        <div class="col col-md-12">
            <form class="user-profile__create-tweet" @submit.prevent="createNewTweet" :class="{ 'exceeded': newTweetCharacterCount > 180 }">
                <div class="form-group">
                    <label for="newTweet">New Tweet ({{ newTweetCharacterCount }}/180)</label>
                    <textarea class="form-control" id="newTweet" rows="4" v-model="state.newTweetContent"></textarea>
                </div>
                <div class="form-group user-profile__create-tweet-type">
                    <label for="newTweetType">Type: </label>
                    <select class="form-control" id="newTweetType" v-model="state.selectedTweetType">
                        <option :value="option.value" v-for="(option, index) in state.tweetTypes" :key="index">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-info btn-block">Tweet</button>
            </form>
        </div>
    </div>    
</template>

<script>

import { reactive, computed } from 'vue';

export default {
    name: 'CreateTweetPanel',
    setup(props, ctx) {
        const state = reactive({
            newTweetContent: '',
            selectedTweetType: 'instant',
            tweetTypes: [
                { value: 'draft', name: 'Draft'},
                { value: 'instant', name: 'Instant Tweet'}
            ],
        })

        const newTweetCharacterCount = computed(() => state.newTweetContent.length)

        function createNewTweet() {
            if(state.newTweetContent !== '' && state.selectedTweetType !== 'draft' && newTweetCharacterCount.value <= 180) {
                ctx.emit('add-tweet', state.newTweetContent);
                state.newTweetContent = '';
            }
        }

        return {
            state,
            newTweetCharacterCount,
            createNewTweet
        }
    }
}
</script>

<style scoped>

</style>