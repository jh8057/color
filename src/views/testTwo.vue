<template>
  <div class="testOne">
    <h1>This is an testTwo page</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/testOne">testOne</RouterLink> |
    <RouterLink to="/testTwo">testTwo</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .testOne {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
