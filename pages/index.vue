<template>
    <section class="container">
        <div class="columns is-multiline">
            <div v-for="(item, i) in instructor_list" v-bind:key='i' class='column is-2'>
                <img v-bind:src="'https://cdn.slidesharecdn.com/profile-photo-' + i + '-96x96.jpg?cb=1534998396'" />
                <nuxt-link :to="{ path: 'instructors/'+ i }" class="button">{{ i }}</nuxt-link>
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