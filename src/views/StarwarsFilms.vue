<template>
    <v-row dense>
        <v-col v-for="(item, index) in filmsList" class="col-12 my-4 p-2" :key="index">
            <film-card-vue :filmImg="item.filmImg" :filmTitle="item.title"
                :filmOpeningCrawl="item.opening_crawl" :path="item.url">
            </film-card-vue>
        </v-col>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-row>
</template>

<script>
import FilmCardVue from '@/components/FilmCard.vue'

export default {
    name: 'StarwarsFilms',
    components: {
        FilmCardVue
    },
    data: () => ({
        filmsList: [],
        overlay: false
    }),
    created() {
        this.getStarwarsFilms();
    },
    methods: {
        getRandomImgs(limit) {
            const options = {
                method: 'GET',
                url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
                params: { q: "star wars films", pageNumber: '1', pageSize: limit, autoCorrect: 'true' },
                headers: {
                    'X-RapidAPI-Key': '352d46e957msh4d68818204783afp1f3d9fjsn55139970bbea',
                    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                }
            };

            return this.$axios.request(options).then(function (response) {
                if (response.status === 200 && response.data.value.length > 0) return response.data.value;
            }).catch(function () {
                return [];
            });
        },
        getStarwarsFilms() {
            this.filmsList = [];
            this.overlay = true;
            this.$axios.get('https://swapi.dev/api/films/').then(async response => {
                if (response.status === 200) {
                    let randomImages = await this.getRandomImgs(response.data.results.length);
                    this.filmsList = response.data.results.map((x, i) => {
                        x.filmImg = randomImages[i]?.url ?? null;
                        return x;
                    });
                }
            }).catch(err => {
                console.log(err);
            }).then(() => {
                this.overlay = false;
            })
        }
    }
}
</script>
