<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <img class="img-fluid" :src="footerImage" alt=""/>
        </div>
        <div class="col-xl-3">
          <div class="sections justify-content-xl-center justify-content-start d-grid">
            <span>Team</span>
            <span>Research</span>
            <span>Services and Tools</span>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="privacy ps-5 ps-xl-0 justify-content-xl-center justify-content-start d-grid">
            <span>Privacy Policy</span>
            <span>Contact us</span>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="social">
            <span>Social Media</span>
            <div>
              <span class="me-4">
                <img class="img-fluid" :src="Telegram" alt="Telegram"/>
              </span>
              <span>
                <img class="img-fluid" :src="Twitter" alt="Twitter"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="copyRight">Copyright © 2022 Conobo Institute. All rights reserved.</span>
  </div>
</template>

<script>
import footerImage from "@/assets/footer.svg";
import Telegram from "./icons/telegram.svg";
import Twitter from "./icons/twitter.svg";


export default {
  name: "Footer",
  data() {
    return {
      footerImage,
      Telegram,
      Twitter
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  background-color: black;
  padding-top: 55px;
  padding-bottom: 90px;
  color: white;
  font-size: 31px;
  border-bottom: 14px solid #E52620;

  .sections {
    line-height: 44px;
    justify-content: center;
    padding-left: 55px;
  }

  .privacy {
    line-height: 44px;
    justify-content: center;
  }
  .social{
    padding-left: 30px;
  }
  .copyRight{
    position: absolute;
    font-size: 24px;
    text-align: right;
    margin-bottom: 10px;
    bottom: 0;
    right: 25px;
    width: 100%;
    color: #BABABA;
  }
  @media screen and (max-width: 1200px) {
    padding-right: 65px;
    padding-top: 40px;
    .sections{
      justify-content: flex-start;
      padding-left: 28px;
      margin-top: 30px;
    }
    .privacy{
      line-height: 39px;
      justify-content: flex-start;
      padding-left: 28px !important;
      padding-top: 40px;
    }
    .social{
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .copyRight{
      position: absolute;
      font-size: 18px;
      text-align: center;
      margin-bottom: 10px;
      bottom: 0;
      width: 100%;
      color: #BABABA;
    }
  }
  }
</style>