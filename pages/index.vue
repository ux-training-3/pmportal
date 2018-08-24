<template>
    <section class="container">
        <div class="columns is-multiline">
            <div v-for="(item, i) in instructor_list" v-bind:key='i' class='column is-3'>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img v-bind:src="'https://cdn.slidesharecdn.com/profile-photo-' + i + '-96x96.jpg?cb=1534998396'">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{i}}</p>
                                <nuxt-link :to="{ path: 'instructors/'+ i }" class="button is-link">気になる</nuxt-link>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <!-- 適当なコメント -->
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import instructorApi from '@/api/instructor'
    import { mapState } from 'vuex'

    export default {
        async fetch({store}) {
            let json = await instructorApi.instructors();
            console.log(json);
            store.commit('instructor_list_update', json)
        },
        computed: mapState(['instructor_list']),
    }
</script>