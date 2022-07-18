<template>
  <div class="contact container">
        <span class="mobile-title d-none">
        Contact
      </span>
    <h2 class="d-none d-xl-block">Contacts</h2>
    <p class="pt-contact pt-3">
      We are a research group in mostly biological backgrounds have interest in
      computer biology and bioinformatics. Our goal is to represents an online
      to which can everyone use complex and modern computational methods in
      biology and analyze Data more efficiently.
    </p>

    <p class="pt-contact">
      Our team were get together in mid 2022 with 3 members. If you have
      interest in our work feel free to ask every aspects of them or at least
      emails us and say hi !
    </p>
    <p class="pt-contact">
      The emails of the staffs were provided in
      <router-link to="/team">
      <span class="text-red">Team</span>
      </router-link>
      section however the
      Institute have a its own Communications.
    </p>

    <div class="details">
      <div class="pt-contact d-flex flex-column">
        <span>Email</span>
        <span class="text-red">CONOBO@info.org </span>
      </div>
      <div class="pt-contact d-flex flex-column">
        <span>Youtube</span>
        <span class="text-red">CONOBO/YT.com </span>
      </div>
      <div class="pt-contact d-flex flex-column">
        <span>Twitter</span>
        <span class="text-red">@CONOBO</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.contact {
  a{
    text-decoration: unset !important;
  }
  padding-bottom: 120px;
  padding-top: 130px;

  .pt-contact {
    padding-top: 20px;
  }

  h2 {
    font-size: 40px;
    color: #E52620;
  }

  p {
    padding-top: 30px;
    font-size: 35px;
  }

  .text-red {
    color: #E52620;
  }

  .details {
    font-size: 35px;
    line-height: 35px;
  }

  .mobile-title {
    @media (max-width: 950px) {
      display: block !important;
      padding: 18px 2px;
      font-size: 46px;
      &:after {
        content: "";
        border-bottom: 3px solid #E52620;
        display: flex;
        width: 20%;
        position: absolute;
        left: 9%;
        margin-top: -5px;
      }
    }
  }

  @media (max-width: 950px) {
    padding: 20px 30px 50px 30px;
    p, .details {
      font-size: 28px;
    }
  }
}
</style>