<template>
  <b-dropdown position="is-bottom-left" aria-role="menu">
    <a
      class="button is-primary"
      id="accountButton"
      slot="trigger"
      role="button"
    >
      <span>Account</span>
      <!--      <b-icon icon="menu-down"></b-icon>-->
    </a>
    <b-dropdown-item custom aria-role="menuitem">
      <span v-if="userType === 'ADMIN'">
        <b>ADMIN</b>
        <br />
      </span>
      Logged as <b>{{ this.username }}</b>
    </b-dropdown-item>
    <hr class="dropdown-divider" />

    <b-dropdown-item href="/invoices" value="home" aria-role="menuitem">
      <!--      <router-link to="/invoices">-->
      Invoices
      <!--      </router-link>-->
    </b-dropdown-item>

    <div v-if="userType === 'ADMIN'">
      <hr class="dropdown-divider" aria-role="menuitem" />
      <b-dropdown-item custom aria-role="menuitem">
        <b>Admin Options</b>
      </b-dropdown-item>

      <b-dropdown-item href="/admin/products" value="home" aria-role="menuitem">
        <!--        <router-link class="is-fullwidth" to="/admin/products">-->
        Products
        <!--        </router-link>-->
      </b-dropdown-item>

      <b-dropdown-item href="/admin/Users" value="home" aria-role="menuitem">
        <!--        <router-link class="is-fullwidth" to="/admin/products">-->
        User Management
        <!--        </router-link>-->
      </b-dropdown-item>


      <b-dropdown-item href="/admin/Report" value="home" aria-role="menuitem">
        <!--        <router-link class="is-fullwidth" to="/admin/products">-->
        Reports
        <!--        </router-link>-->
      </b-dropdown-item>
    </div>
    <hr class="dropdown-divider" aria-role="menuitem" />
    <b-dropdown-item @click="logout()" value="logout" aria-role="menuitem">
      <!--      <b-icon icon="logout"></b-icon>-->
      Logout
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data: function() {
    return {
      userType: "GUEST",
      username: ""
    };
  },
  methods: {
    ...mapActions("user", ["logoutUser"]),
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    logout() {
      this.$store.dispatch("user/logoutUser");
      location.reload();
    }
  },
  created() {
    this.userType = this.$store.getters["user/getUserType"];
    this.username = this.$store.getters["user/getUserDetails"].username;
  }
};
</script>

<style lang="scss" scoped>
/* Resize items of navbar */
.itemHeight {
  height: 100px;
}
/*Resize just the img element of Navbar */
.navbar {
  background-color: #222629;
  min-height: 100px;
  position: relative;
  z-index: 30;
}

.navbar-item img {
  max-height: 100px;
}
.navbar-item {
  color: white;
  margin-left: 50px;
}

a.button.is-primary:hover {
  background-color: #86c232;
}

.button.is-primary {
  background-color: #ce9021;
  border-color: transparent;
  color: white;
}
.button.is-secondary {
  background-color: #86c232;
  border-color: transparent;
  color: white;
}
.is-primary {
  background-color: #ce9021;
}

.box.is-primary {
  background-color: #a07855;
}

.hero.is-link {
  background-color: #181a1b;
}

.navbar-item.editProd {
  visibility: visible;
}

/*Footer*/
</style>
