<template>
  <div class="container">
    <div class="team d-flex">
      <div class="image"></div>
      <div class="details">
        <span class="name"> Arsham Mikaeili Namini </span>
        <span class="desc"> Institute Director </span>
        <span class="fieldStudy"> Fields if Study: </span>
        <p>
          Bioinformatics, Cancer Biology, Algorithm Design, Image processing,
          Reinforcement learning
        </p>
      </div>
      <div class="contact">
        <span class="email"> Emails: </span>
        <span> arshammikaeili@gmail.com </span>
        <span> Std_arshammikaeili@khu.ac.ir </span>
      </div>
      <div class="icons">
        <img :src="awesomeTwitter" alt="" />
        <img :src="awesomeTelegram" />
        <img :src="awesomeGithub" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import awesomeGithub from "@/assets/awesomeGithub.svg";
import awesomeTwitter from "@/assets/awesomeTwitter.svg";
import awesomeTelegram from "@/assets/awesomeTelegram.svg";
export default {
  name: "Team",
  data() {
    return {
      awesomeGithub,
      awesomeTwitter,
      awesomeTelegram,
    };
  },
};
</script>
<style lang="scss" scoped>
.team {
  padding: 38px 40px 55px 33px;
  background-color: #f8f8f8;
  .image {
    width: 249px;
    height: 209px;
  }
  .details {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 46px;
    }
    .desc {
      color: #e52620;
      font-size: 32px;
      margin-bottom: 29px;
    }
    .fieldStudy {
      color: #a7a7a7;
      font-size: 32px;
      margin-bottom: 7px;
    }
    p {
      font-size: 32px;
    }
  }
  .contact {
    padding-top: 145px;
    display: flex;
    flex-direction: column;
    font-size: 32px;

    .email {
      color: #a7a7a7;
      font-size: 32px;
    }
  }
  .icons{
      
  }
}
</style>
