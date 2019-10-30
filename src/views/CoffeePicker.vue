<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column">
          <p class="is-1 title has-text-centered has-text-grey-lighter">
              Coffee Picker
          </p>
        <div v-if="!chosenRoastType">
          <p class="title has-text-centered has-text-grey-lighter">
            Step 1: Pick your preferred roast type
          </p>
          <div class="columns is-centered is-fullwidth is-multiline">
            <div class="column is is-one-fifth">
              <div
                class="box has-text-centered"
                style="background-color: #222629"
              >
                <p class="title has-text-grey-lighter">
                  Any
                </p>
                <button
                  style="background-color: #0290A3"
                  class="button is-primary is-large is-fullwidth"
                  @click="setRoastType('any')"
                >
                  Pick
                </button>
              </div>
            </div>
            <div
              v-for="roast of roastTypes"
              :key="roast.id"
              class="column is is-one-fifth"
            >
              <div
                class="box has-text-centered"
                style="background-color: #222629"
              >
                <p class="title has-text-grey-lighter">
                  {{ roast.Roast }}
                </p>
                <button
                  style="background-color: #0290A3"
                  class="button is-primary is-large is-fullwidth"
                  @click="setRoastType(roast.Roast)"
                >
                  Pick
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="chosenRoastType && !chosenBeanType">
          <p class="title has-text-centered has-text-grey-lighter">
            Step 2: Pick your preferred bean type
          </p>
          <div class="columns is-centered is-fullwidth is-multiline">
            <div class="column is is-one-fifth">
              <div
                class="box has-text-centered"
                style="background-color: #222629"
              >
                <p class="title has-text-grey-lighter">
                  Any
                </p>
                <button
                  style="background-color: #0290A3"
                  class="button is-primary is-large is-fullwidth"
                  @click="setBeanType('any')"
                >
                  Pick
                </button>
              </div>
            </div>
            <div
              v-for="bean of beanTypes"
              :key="bean.id"
              class="column is is-one-fifth"
            >
              <div
                class="box has-text-centered"
                style="background-color: #222629"
              >
                <p class="title has-text-grey-lighter">
                  {{ bean.bean_type }}
                </p>
                <button
                  style="background-color: #0290A3"
                  class="button is-primary is-large is-fullwidth"
                  @click="setBeanType(bean.bean_type)"
                >
                  Pick
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="chosenRoastType && chosenBeanType && !chosenRegion">
          <p class="title has-text-centered has-text-grey-lighter">
            Step 3: Pick your preferred region
          </p>
          <div class="columns is-centered is-fullwidth is-multiline">
            <div class="column is is-one-fifth">
              <div
                class="box has-text-centered"
                style="background-color: #222629"
              >
                <p class="title has-text-grey-lighter">
                  Any
                </p>
                <button
                  style="background-color: #0290A3"
                  class="button is-primary is-large is-fullwidth"
                  @click="setRegion('any')"
                >
                  Pick
                </button>
              </div>
            </div>
            <div
              v-for="reg of regions"
              :key="reg.id"
              class="column is is-one-fifth"
            >
              <div
                class="box has-text-centered"
                style="background-color: #222629"
              >
                <p class="title has-text-grey-lighter">
                  {{ reg.region }}
                </p>
                <button
                  style="background-color: #0290A3"
                  class="button is-primary is-large is-fullwidth"
                  @click="setRegion(reg.region)"
                >
                  Pick
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CoffeePicker",
  data() {
    return {
      roastTypes: [],
      beanTypes: [],
      regions: [],
      chosenRoastType: "",
      chosenBeanType: "",
      chosenRegion: ""
    };
  },
  methods: {
    getRoastTypes: async function() {
      try {
        await axios
          .get("http://localhost:5000/api/Products/getRoast")
          .then(response => {
            this.roastTypes = response.data.Roasts;
            // eslint-disable-next-line no-console
            console.log(this.roastTypes);
          });
      } catch (e) {
        console.error(e);
      }
    },
    getBeanType: async function() {
      try {
        await axios
          .get("http://localhost:5000/api/Products/getBeanType", {
            params: {
              inRoast: this.chosenRoastType
            }
          })
          .then(response => {
            this.beanTypes = response.data.BeanTypes;
            // eslint-disable-next-line no-console
            console.log(this.beanTypes);
          });
      } catch (e) {
        console.error(e);
      }
    },
    getRegions: async function() {
      try {
        await axios
          .get("http://localhost:5000/api/Products/getRegion", {
            params: {
              inRoast: this.chosenRoastType,
              inBeanType: this.chosenBeanType
            }
          })
          .then(response => {
            this.regions = response.data.Regions;
            // eslint-disable-next-line no-console
            console.log(this.beanTypes);
          });
      } catch (e) {
        console.error(e);
      }
    },
    setRoastType: function(r) {
      this.chosenRoastType = r;
      this.getBeanType();
    },
    setBeanType: function(b) {
      this.chosenBeanType = b;
      this.getRegions();
    },
    setRegion: function(r) {
      this.chosenRegion = r;
      window.location.href =
        "/product?roast=" +
        this.chosenRoastType +
        "&bean=" +
        this.chosenBeanType +
        "&region=" +
        this.chosenRegion;
    }
  },
  async created() {
    await this.getRoastTypes();
  }
};
</script>

<style scoped></style>
