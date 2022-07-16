<template>
  <div class="row w-100 m-0">
    <div class="flex-column-reverse flex-xl-row m-0 p-0 row w-100">
      <div class=" col-xl-12 col-xxl-6 p-0">
        <div class="left">
          <div>
            <span class="about">About CANOBO</span>
            <h2 class="mb-5">
              Analyze and Sort Your data efficiently for your research
            </h2>
            <p>
              We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give
              researchers
              easy and powerful tools for analyzing biological datas. Our mission is to provide a work space for every
              researchers to analyse their projects free and accessible.
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-xxl-6 p-0">
        <div class="right">
          <img class="img-fluid" :src="rightImage"/>
        </div>
      </div>
    </div>

    <div class="svgSection position-relative">

      <div class="text-svg">
          <span data-aos="fade-right"
                data-aos-id="super-duper"
                data-aos-delay="490"
                data-aos-duration="1000"
          >
          Here You Are
          </span>
        <span data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="370">
             The beginning
           </span>
        <span data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="250">
            Yor First Step into the Unknown…
            </span>
      </div>
      <div class="svgSection2 position-absolute">
      </div>
    </div>

    <div class="solo-video">
      <video autoplay muted>
        <source :src="video" type="video/mp4">
        <source :src="video" type="video/ogg">
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="ourDream">
      <div class="header">
        <span>Our Dream</span>
        <h2>Analyze and Sort Your data efficiently for your research</h2>
        <p>We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give researchers
          easy and powerful tools for analyzing biological datas. Our mission is to provide a work space for every
          researchers to analyse their projects free and accessible. </p>
        <p>
          We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give researchers
          easy and powerful tools for analyzing biological datas. Our mission is to provide a work space for every
          researchers to analyse their projects free and accessible.
        </p>
      </div>
    </div>

    <div class="article-section d-lg-flex d-none flex-column flex-xl-row">
      <div class="col-xl-4 px-2 px-xxl-2 col-lg-12">
        <div class="img"></div>
        <div class="title">
          <h2>Title</h2>
          <span class="date">2020.05.19</span>
        </div>
        <div class="description">
          <p>
            We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give
            researchers easy and powerful tools for analyzing biological datas. Our mission is to provide a work space
            for every researchers to analyse their projects free and accessible.
          </p>
        </div>
        <div class="underline"></div>
      </div>
      <div class="col-xl-4 px-2 px-xxl-2 col-lg-12">
        <div class="img"></div>
        <div class="title">
          <h2>Title</h2>
          <span class="date">2020.05.19</span>
        </div>
        <div class="description">
          <p>
            We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give
            researchers easy and powerful tools for analyzing biological datas. Our mission is to provide a work space
            for every researchers to analyse their projects free and accessible.
          </p>
        </div>
        <div class="underline"></div>
      </div>
      <div class="col-xl-4 px-2 px-xxl-2 col-lg-12">
        <div class="img"></div>
        <div class="title">
          <h2>Title</h2>
          <span class="date">2020.05.19</span>
        </div>
        <div class="description">
          <p>
            We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give
            researchers easy and powerful tools for analyzing biological datas. Our mission is to provide a work space
            for every researchers to analyse their projects free and accessible.
          </p>
        </div>
        <div class="underline"></div>
      </div>
    </div>

    <div id="carouselExampleIndicators" class="carousel mobile-slider d-block d-lg-none slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item,i) in articleSlider" data-bs-interval="90000" class="carousel-item" :class="i === 0 ? 'active':''">
          <div class="col-12 article-section" >
            <div class="img"></div>
            <div class="title">
              <h2>{{ item.title }}</h2>
              <span class="date">{{ item.date }}</span>
            </div>
            <div class="description">
              <p>
                {{item.description}}
              </p>
            </div>
            <div class="underline"></div>
          </div>
        </div>
      </div>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>

  </div>
</template>
<script>
import rightImage from "@/assets/nationalCancer.jpg";
import video from "@/assets/file.mp4";

export default {
  data() {
    return {
      rightImage,
      touchstartX:0,
      touchendX :0,
      detectMove:null,
      video,
      articleSlider: [
        {
          title: 'Title',
          date: '2020.05.19',
          description: "We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give researchers easy and powerful tools for analyzing biological datas. Our mission is to provide a work space for every researchers to analyse their projects free and accessible."
        },
        {
          title: 'Title',
          date: '2020.05.19',
          description: "We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give researchers easy and powerful tools for analyzing biological datas. Our mission is to provide a work space for every researchers to analyse their projects free and accessible."
        },
        {
          title: 'Title',
          date: '2020.05.19',
          description: "We started “Computational Analysis Network on Biological Observation” CANOBO in mid 2022 to give researchers easy and powerful tools for analyzing biological datas. Our mission is to provide a work space for every researchers to analyse their projects free and accessible."
        }
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      let svgSection = document.querySelector(".svgSection2");
      if (window.scrollY > 700) {
        svgSection.classList.add('opacity');
      }
    },
  }
}
</script>
<style lang="scss" scoped>

.left {

  background-color: #ECEFEE;
  padding-top: 166px;
  padding-left: 143px;
  padding-right: 120px;
  height: 100%;

  .about {
    color: #E52620;
    font-size: 35px;
  }

  h2 {
    font-size: 75px;
    line-height: 66px;
    color: black;
  }

  p {
    font-size: 40px;
    line-height: 37px;
    color: #6A6A6A;
  }

  @media screen and (max-width: 600px) {
    padding: 35px 40px 50px;
    h2 {
      font-size: 48px;
      line-height: 44px;
    }
    p {
      font-size: 27px;
    }

  }
}

.opacity {
  opacity: 0;
  transition: opacity 2s ease;

}

.svgSection {
  width: 100%;
  height: 1110px;
  background-color: black;
  background-image: url("./src/assets/dots2.svg");
  transition: opacity 2s ease;

  .svgSection2 {
    background-image: url("./src/assets/dots.svg");
    transition: all 2s ease;
    width: 100%;
    height: 1110px;
    top: 0;
    filter: brightness(0.2);
    left: 0;
    @media screen and (max-width: 600px) {
      height: 790px;
    }

  }

  .text-svg {
    z-index: 1000;
    color: white;
    font-size: 66px;
    display: flex;
    flex-direction: column;
    line-height: 78px;
    padding-top: 112px;
    padding-left: 225px;
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.8239670868347339) 46%, rgba(0, 0, 0, 0) 100%);
    padding-bottom: 59px;
    @media screen and (max-width: 600px) {
      padding-left: 40px;
      font-size: 43px;
    }

  }

  @media screen and (max-width: 600px) {
    height: 790px;
  }
}

.solo-video {

  padding-top: 118px;
  padding-bottom: 91px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1300px) {
    video {
      width: 100%;
      height: auto;
    }
  }
}

.ourDream {
  background-color: #F7F7F7;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .header {
    width: 700px;
    align-self: center;
    padding-top: 61px;
    padding-bottom: 91px;
    @media screen and (max-width: 768px) {
      width: auto;
    }

    span {
      color: #E52620;
      font-size: 35px;
    }

    h2 {
      font-size: 65px;
      color: black;
    }

    p {
      color: #6A6A6A;
      font-size: 40px;
      line-height: 40px;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    .header {
      padding-left: 30px;
      padding-right: 30px;

      span {
        font-size: 21px;
      }

      h2 {
        font-size: 48px;
      }

      p {
        font-size: 27px;
        margin-top: 25px;
      }
    }
  }
}

.article-section {
  padding: 95px 140px 140px;

  .img {
    width: auto;
    height: 289px;
    border: 1px solid #707070;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #E0E0E0;
    margin-top: 20px;

    h2 {
      font-size: 55px;
      margin-bottom: 0;

    }

    .date {
      font-size: 30px;
      color: #3B3B3B;
      padding-right: 40px;
    }
  }

  .description {
    p {
      padding-top: 35px;
      font-size: 36px;
      line-height: 37px;
      color: #6A6A6A;

      &:after {
        content: "";
        width: 50%;
        height: 3px;
        background-color: #E0E0E0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 37px auto 0;
      }
    }
  }


}

.mobile-slider {
  margin-bottom: 50px;
  .article-section {
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
      padding-left: 35px;
      padding-right: 35px;
      padding-top: 38px;
      .img {
        height: 190px;
        width: 100%;
      }

      .title {
        width: 100%;
        h2 {
          font-size: 36px;
          margin-bottom: 0;
        }

        .date {
          font-size: 19px;
          color: #3B3B3B;
          padding-right: 30px;
        }
      }

      .description {
        p {
          padding-top: 35px;
          font-size: 23px;
          line-height: 28px;
          text-align: left;
          color: #6A6A6A;

          &:after {
            content: "";
            margin: 25px auto 0;
          }
        }
      }
    }

  }
  .carousel-indicators{
    button{
      background-color: #D9D9D9;
      width: 38px;
      height: 1px;
      border-radius: 5px;
      margin-right: 6px;
      margin-left: 6px;
      background-clip: unset !important;
      border: 0;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
       transition: opacity .6s ease;
      &.active{
        background-color: #E52620;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .img-fluid {
    width: 960px;
    height: 759px;
  }
}
@media screen and (min-width: 2000px) {
  .img-fluid {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 600px) {
  [data-aos^=fade][data-aos^=fade] {
    opacity: 1 !important;
  }
  [data-aos=fade-right] {
    transform: unset;
  }
}
</style>

