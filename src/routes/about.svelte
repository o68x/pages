<script context="module">
  import blogConfig from '../../blog.config.js';
</script>

<svelte:head>
  <title>about - {blogConfig.site_name}</title>
</svelte:head>

<h1>Hey! I'm Olivier.</h1>

<p>
  This is a blog. It is powered by <em>Sapper</em>, which is a full-featured web-app framework based on the Svelte UI framework.
</p>

<p>I write about the meaning of life, and sex.</p>

<script>

  import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };
</script>

<style>
  .swipe-holder{
    height: 50vh;
    width: 100%;
  }
  img{
    width: 100%;
    height: auto;
  }
</style>

<div class="swipe-holder">
  <Swipe {...swipeConfig}>
    <SwipeItem>
      <img src="https://loremflickr.com/640/480/paris" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="https://loremflickr.com/640/480/berlin" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="https://loremflickr.com/640/480/london" alt="">
    </SwipeItem>
  </Swipe>
</div>
