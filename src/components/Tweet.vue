<template>
    <div class="tweet">
        <div class="user-profile__tweet">
            <div class="tweet__user">
                @{{ username }}
            </div>
            <div class="tweet__content">
                {{ tweet.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tweet',
    props: {
        username: {
            type: String,
            required: true
        },
        tweet: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .tweet {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.25s ease;
    }
    .tweet:hover {
        transform: scale(1.1, 1.1);
    }
    .tweet__user {
        font-weight: bold;
    }
</style>