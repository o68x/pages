<script>
  export let segment;
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
  }
  #title {
    color:rgb(255, 62, 0);
  }
  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
<header>
<div id="title"><a rel="prefetch" class:selected={segment === undefined} href=".">Olivier Cardinaux</a></div>
<nav>
  <ul>
    <li>
      <a rel="prefetch" class:selected={segment === 'projects'} href="projects">projects</a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'about'} href="about">about</a>
    </li>
  </ul>
</nav>
</header>
