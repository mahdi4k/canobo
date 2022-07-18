<template>
  <div class="services">
    <div class="items">
      <div>
        <div class="row-section">
          <div>
            <img :src="simpleMicrogenetics" alt="" />
            <span>DNA Read Mapping</span>
          </div>
          <div>
            <span
              >Utilizing Burrows–Wheeler transform algorithm to construct suffix
              tree</span
            >
          </div>
          <div>
            <span>Status </span>
            <span>Available</span>
          </div>
        </div>
        <div class="row-section">
          <div>
            <img :src="simpleMicrogenetics" alt="" />
            <span>DNA Read Mapping</span>
          </div>
          <div>
            <span
              >Utilizing Burrows–Wheeler transform algorithm to construct suffix
              tree</span
            >
          </div>
          <div>
            <span>Status </span>
            <span>Available</span>
          </div>
        </div>
        <div class="row-section">
          <div>
            <img :src="simpleMicrogenetics" alt="" />
            <span>DNA Read Mapping</span>
          </div>
          <div>
            <span
              >Utilizing Burrows–Wheeler transform algorithm to construct suffix
              tree</span
            >
          </div>
          <div>
            <span>Status </span>
            <span>Available</span>
          </div>
        </div>
      </div>
      <div class="col-section">
        <div>
          <img :src="simpleMicrogenetics" alt="" />
          <span>DNA Read Mapping</span>
        </div>
        <div>
          <span
            >A modified platform to analyze the microarray expression data from
            GEO database in a modern and smart approach which can trim the
            principal component analysis results as well as custom volcano plots
            and lastly Enrich analyzes based on DEGs results. This package will
            be online in mid 2023.</span>
        </div>
        <div>
          <span>Status </span>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import simpleMicrogenetics from "@/assets/simpleMicrogenetics.svg";
import simpleMicrogenetics1 from "@/assets/simpleMicrogenetics1.svg";
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";

export default {
  data() {
    return {
      simpleMicrogenetics,
      simpleMicrogenetics1,
      simpleMicrogenetics2,
    };
  },
};
</script>
