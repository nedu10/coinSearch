const Home = resolve => {
    require.ensure(['./components/Home/Home.vue'], () => {
        resolve(require('./components/Home/Home.vue'));
    });
}
const Result = resolve => {
    require.ensure(['./components/Result/Result.vue'], () => {
        resolve(require('./components/Result/Result.vue'));
    });
}

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/result', component: Result, name: 'result'},
    {path: '*', redirect: {name: 'home'}}

]