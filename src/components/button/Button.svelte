<script lang="ts">
  export let text: string | undefined = undefined;
  export let bgColor: string | undefined = undefined;
  export let onClick: () => void = () => {};

  let hoverAnimation = false;

  function handleHover() {
    hoverAnimation = !hoverAnimation;
  }
</script>

<button
  on:click={onClick}
  on:mouseenter={handleHover}
  on:mouseleave={handleHover}
  {...$$restProps}
  class={`flex py-3 px-6 bg-${bgColor} rounded-3xl ${
    hoverAnimation ? "hover:bg-darkGray" : "hover:bg-gray"
  } ${$$restProps.class ?? ""} transition-all`}
>
  {text}
  <slot name="icon" />
</button>
