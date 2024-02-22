<script>
  import { twMerge } from 'tailwind-merge';
</script>

<div class={twMerge('skeleton h-full w-full bg-gray-700', $$props.class)} />

<style>
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .skeleton {
    display: inline-block;
    position: absolute;
    overflow: hidden;
  }

  .skeleton::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(51, 51, 51, 0) 0,
      rgba(51, 51, 51, 0.1) 20%,
      rgba(51, 51, 51, 0.5) 60%,
      rgba(51, 51, 51, 0) 100%
    );
    animation: shimmer 2s infinite;
    content: '';
  }
</style>
