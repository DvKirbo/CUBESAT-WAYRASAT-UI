import Page from './+page.svelte';

const page = new Page({
    target: document.body,
})
window.initMap =  function component_is_ready() {
    page.$set({ component_is_ready: true})
}