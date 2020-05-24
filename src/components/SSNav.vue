<template>
  <nav class="navbar navbar-expand-md navbar-light ss-bg-blue">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav justify-content-center align-content-stretch">
        <li v-for="(menu,index) in menus.filter( temp => ! temp.hide == true )" :key="index" :class="{ 'dropdown' : menu.children.length != 0 }" class="nav-item">
            <router-link v-if="menu.children.length == 0" :to="menu.path" class="nav-link">{{ menu.title }}</router-link>
            <a v-else class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ menu.title }}
            </a>
            <div v-if="menu.children.length != 0" class="dropdown-menu">
              <router-link 
              v-for="(item,itemId) in menu.children.filter( temp => ! temp.hide == true )"
              :key = "itemId" 
              :to="menu.path + '/' + item.path" 
              class="dropdown-item" >
                {{ item.title }}
              </router-link>
            </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  import { menuRoutes } from "@/router";

  console.log("menu:",menuRoutes);

  export default {
    data() {
      return { menus: menuRoutes };
    }
  };
</script>
<style lang="scss" scoped>
  .navbar{
    height: 4.38rem;
    width: 100%;
    ul{
      width: 100%;
    }
    li {
      width: 10rem;
      a{
        text-align: center;
      }
    }
  }
  .dropdown-menu{
    > a {
      font-size: .9rem;
    }
  }
</style>
