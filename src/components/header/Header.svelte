<script lang="ts">
  import { Hamburger } from "svelte-hamburgers";
  import { fade } from "svelte/transition";

  export let path: string = "";
  let openNav = false;
  const navItems = [
    { text: "HOME", url: "/" },
    { text: "ABOUT", url: "/about" },
    { text: "PROJECTS", url: "/projects" },
    { text: "CONTACT", url: "/contact" },
  ];
</script>

<header
  class={`z-50 fixed w-full ${
    openNav ? "h-screen bg-black text-white" : "bg-black text-white"
  } transition-all duration-1000 overflow-hidden`}
>
  <div class="flex pt-4">
    <h1 class="text-2xl z-50 my-auto ml-20">HARALD SIGVARTSEN</h1>

    <div class="ml-auto z-50 mr-20 group my-auto gap-x-2">
      <Hamburger
        --color="white"
        ariaLabel="Open navigation"
        bind:open={openNav}
        --active-color="white"
      />
    </div>
  </div>

  <ul
    class={`fixed inset-0 flex flex-col items-center justify-center mx-auto text-7xl text-center gap-10 transition-opacity duration-500 bg-black ${
      openNav
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
  >
    {#each navItems as { text: navItem, url }}
      <li class="hover:translate-x-10 transition flex">
        <a
          href={url}
          class={`hover:text-red-500 ${
            path === url ? "text-red-500" : "text-white"
          }`}
        >
          {navItem}
        </a>
        {#if path === url}
          <div
            class="h-4 w-4 my-auto relative left-10 bg-red-500 rounded-full"
          ></div>
        {/if}
      </li>
    {/each}
  </ul>
</header>
