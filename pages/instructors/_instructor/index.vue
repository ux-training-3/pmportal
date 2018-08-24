<template>
    <section class="container">
        <div class="columns is-multiline">
            <div v-for="(item, i) in content_list" v-bind:key='i' class='column is-4'>
                <iframe :src="'//www.slideshare.net/slideshow/embed_code/key/' + item.key"
                        width="595" 
                        height="300" 
                        frameborder="0" 
                        marginwidth="0" 
                        marginheight="0" 
                        scrolling="no" 
                        style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" 
                        allowfullscreen> 
                </iframe> 
                <!-- <div style="margin-bottom:5px"> 
                    <strong> 
                        <a href="//www.slideshare.net/fullvirtue/product-manager-party-pmparty" 
                        title="Product Manager Party 〜 キャリア編 〜 パネルディスカッション #pm_party" 
                        target="_blank">Product Manager Party 〜 キャリア編 〜 パネルディスカッション #pm_party</a> 
                    </strong> from <strong><a href="https://www.slideshare.net/fullvirtue" target="_blank">満徳 関</a></strong> 
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import instructorApi from "@/api/instructor";
import { mapState } from "vuex";

export default {
  async fetch({ store, params }) {
    let json = await instructorApi.contents(params.instructor);
    console.log(json);
    store.commit("content_list_update", json);
  },
  computed: mapState(["content_list"])
};
</script>