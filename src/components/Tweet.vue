<template>
  <article class="tweet border-b border-gray-600">
    <!-- {{ tweet }} -->
    <div class="flex p-4">
      <figure class="w-16 mr-3">
        <img
          src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
          alt="Image"
          class="rounded-full w-full"
        />
      </figure>

      <section class="flex-1">
        <div>
          <span class="text-white font-bold">
            {{ tweet.user.name }}
          </span>
          <span class="text-gray-500 ml-2 font-normal">
            @{{ tweet.user.name }}
          </span>
        </div>

        <div class="">
          <p class="text-white">{{ tweet.tweet }}</p>
        </div>

        <!-- <figure  class="rounded-xl border border-gray-600 overflow-hidden">
					<img 
						src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg" 
						alt="tweet.image.alt" 
						class="w-full h-44 object-cover" />
				</figure> -->

        <div class="mt-2 flex items-center justify-between">
          <div class="text-gray-500">
            <i
              class="
                fas
                fa-comment
                p-2
                mr-1
                rounded-full
                hover:bg-green-900 hover:text-green-500
              "
            ></i>
            <span>{{ tweet.length }}</span>
          </div>
          <div class="text-gray-500">
            <i
              class="
                fas
                fa-retweet
                p-2
                mr-1
                rounded-full
                hover:bg-green-900 hover:text-green-500
              "
            ></i>
            <span>{{ tweet.length }}</span>
          </div>
          <div class="text-gray-500">
            <i
              class="
                fas
                fa-heart
                p-2
                mr-1
                rounded-full
                hover:bg-green-900 hover:text-green-500
              "
              @click="likeHandler(tweet._id)"
            ></i>
            <span>{{ tweet.likes?.length }}</span>
          </div>
          <div class="text-gray-500">
            <i
              class="
                fas
                fa-share
                p-2
                mr-1
                rounded-full
                hover:bg-green-900 hover:text-green-500
              "
            ></i>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
// import { ref } from "vue";
import { usetweetStore } from "../store/tweet";
export default {
  props: ["tweet"],
  setup() {
    const tweetStore = usetweetStore();

    const likeHandler = async (_id) => {
      const tweetStore = usetweetStore();
      const res = await tweetStore.tweetLikeAction(_id);
      console.log(res);
    };
    return {
      tweetStore,
      likeHandler,
    };
  },
};
</script>