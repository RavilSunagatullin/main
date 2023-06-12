export const postMoudule = {
    state: () => ({
        posts:[],
        isPostsLoading:false,
        selectedSort:"",
        page: 1,
        limit: 10,
        totalPages:0,
        sortOptions : [
            {value: 'title', name: 'by named'},
            {value: 'body', name: 'by content'}
        ]
    }),
    getters: {
    },
    mutations:{
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
    },
    actions:{
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}
