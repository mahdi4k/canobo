<template>
  <div class="container-fluid">
    <div class="row top ps-6 pb-4 pt-6 align-items-center">
      <div class="col-xxl-3 logo col-lg-4 col-12 ">
        <Logo/>
      </div>
      <div class="col-xxl-9 menu col-lg-8 col-12">
        <div class="d-flex">
          <div v-for="item in menuItems" :key="item.id">
            <router-link
                :to="item.path"
                custom
                v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <NavLink :active="isActive" :href="href" @click="navigate">
                <span class="menu-item">{{ item.name }}</span>
              </NavLink>
            </router-link>
          </div>
        </div>
      </div>
      <div class="collapseIcon">
            <span>
               <img v-if="collapsed" class="img-fluid" @click="collapseIcon" :src="menu" alt=""/>
               <img v-else class="img-fluid" @click="collapseIcon" :src="times" alt=""/>
            </span>
      </div>
      <div v-if="!collapsed" class="d-flex flex-column  mobile-menu">
        <div v-for="item in menuItems" :key="item.id">
          <router-link
              :to="item.path"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <NavLink :active="isActive" :href="href" @click="navigate">
              <span class="menu-item">{{ item.name }}</span>
            </NavLink>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Logo from "./icons/Logo.vue";
import menu from "@/assets/menu.svg"
import times from "@/assets/times.svg"

export default {
  name: "Top",
  components: {Logo},
  data() {
    return {
      times,
      menu,
      collapsed : true,
      menuItems: [
        {
          id: 1,
          path: '/team',
          name: 'Team'
        },
        {
          id: 2,
          path: '/researches',
          name: 'Researches'
        },
        {
          id: 3,
          path: '/services-and-tools',
          name: 'Services and Tools'
        },
        {
          id: 4,
          path: '/contacts',
          name: 'Contacts'
        },
      ]
    }
  },
  methods:{
    collapseIcon(){
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  @media screen and (max-width: 600px) {
    position: relative;
    padding-left: 15px !important;
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
    padding-right: 20px;
    justify-content: space-between;
    .collapseIcon{
      width: fit-content;
      display: block;
    }
    .logo{
      width: fit-content;
    }
    .logoTop {
      width: 138px;
      height: 37px;
    }
    .mobile-menu{
      position: absolute;
      bottom: -181%;
      border: 1px solid #CECECE;
      background-color: white;
      width: 85%;
      padding-left: 44px;
      left: 7.5%;
      .menu-item{
        font-size: 30px;
      }
    }
  }
}
.collapseIcon{
  display: none;
}
.menu {
  @media screen and (max-width: 600px) {
    display: none !important;
  }

  .menu-item {
    margin-right: 76px;
    font-size: 40px;
    cursor: pointer;
  }
}

@media screen and (max-width: 1400px) {
  .menu .menu-item {
    margin-right: 20px;
    font-size: 27px;
  }
}
</style>