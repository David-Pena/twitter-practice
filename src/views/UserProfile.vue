<template>
    <div class="user-profile container">
        <div class="row mt-5">
            <div class="col col-md-6">
                <h3 class="user-profile__username text-left"> @{{ state.user.username }}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-1 col-sm-2 text-center">
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin"> Adm </div>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-3">
                <div class="user-profile__follower-count text-left">
                    <strong>Followers: </strong> {{ state.followers }}
                </div>
            </div>
        </div>
        <CreateTweetPanel @add-tweet="addTweet"/>
        <div class="user-profile__tweets-wrapper mt-5 col-12">
            <Tweet 
            v-for="tweet in state.user.tweets"
            :key="tweet.id"
            :username="state.user.username"
            :tweet="tweet"
            />
        </div>
    </div>
</template>

<script>

import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users';
import Tweet from '../components/Tweet';
import CreateTweetPanel from '../components/CreateTweetPanel';

export default {
    name: "UserProfile",
    components: { CreateTweetPanel, Tweet },
    setup() {
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[0]
        })

        function addTweet(tweet) {
            state.user.tweets.unshift({
                id: state.user.tweets.length + 1,
                content: tweet
            });
        }

        return {
            state,
            addTweet,
            userId
        }
    },
}
</script>

<style>
    .user-profile__admin-badge {
        background-color: rebeccapurple;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding: 0 10px;
        font-weight: bold;
    }
    .user-profile__tweets-wrapper {
        display: grid;
        grid-gap: 10px;
    }
    .exceeded {
        color: red;
    }
</style>
