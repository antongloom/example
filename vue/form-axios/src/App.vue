<template>
  <div id="app">
    <header>
      <div class="header__content content">
        <div class="content__logo">
          <div>Logo</div>
        </div>
        <div class="content__menu">
          <ul>
            <li>Главная</li>
            <li>О компании</li>
            <li>Новости</li>
            <li>Контакты</li>
            <li>Регистарция</li>
            <li>Вход</li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Contact from './components/Contact';

export default {
  data(){
    return{

    }
  },
  components: {
    Contact
  }
}
</script>

<style lang="less">
@import url('./assets/style/main.less');


ul{
  list-style-type: none;
  li{
    display: inline-block;
    padding-right: 15px;
    &:last-child{
      padding-right: 0px;
    }
  }
}

#app{
  max-width: 1920px;
  margin: 0 auto;
}

header{
  .header__content{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    .content__logo{

    }
    .content__menu{
      font-family: Roboto-bold;
      font-size: 16px;
    }
  }
}

</style>
