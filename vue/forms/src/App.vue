<template>
  <div id="#app">
    <div class="app__container">
      <div class="container__blog">
        <div class="blog__progress">
          <div class="progress__bar" :style="progressWidth"></div>
        </div>
      </div>
      <div class="container__form">
        <div class="form">
          <ul>
            <li v-for="(item, index) in info">
               <div v-if="item.type === 'text'">
                <div class="form__title">
                  <div class="title__name">{{item.name}}</div>
                  <div class="title__icon">
                   <!-- <div :class="{iconError: item.error}"></div>
                    <div :class="{iconSuccess : item.success}"></div> -->
                    <div v-if="controls[index].activated"
                         :class="controls[index].error ? 
                         'iconError' : 'iconSuccess'"
                          ></div>
                  </div>
                 </div> 
                 <input :type="item.type"
                        :value="item.value"
                        @input = "onInput(index, $event.target.value)"
                        >
               </div>
               <div v-if="item.type === 'textarea'">
                 <div class="form__title">
                 <div class="title__name">{{item.name}}</div>
                </div>
                 <textarea></textarea>
               </div>
            </li>
          </ul>
          <button :class="{btnCursor: activeBtn}" v-model="buttonBlock" :disabled="disabled">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      disabled: true,
      activeBtn: true,
      info: [
        {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z]{2,30}$/,
          type: 'text',
        },
        {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/,
          type: 'text',
        },
        {
          name: 'Email',
          value: '',
          pattern: /.+/,
          type: 'text',
        },
        {
          name: 'Message',
          value: '',
          type: 'textarea'
        },
      ],
      controls: []
    }
  },
  beforeMount(){
    for(let i = 0; i < this.info.length; i++){
        this.controls.push({
          error: true,
          activated: false
        })
    }
  },
  methods: {
      onInput(index, value){
        let data = this.info[index];
        let control = this.controls[index];
        
        data.value = value;
        control.error = !data.pattern.test(value);
        control.activated = true;
      }
  },
  computed: {
    done(){
      let done = 0;
      for(let i = 0; i < this.controls.length; i++){
        if(!this.controls[i].error){
          done++;
        }
      }
      return done;
    },
    progressWidth(){
      return{
        //width: (this.done / this.info.length * 100) + '%'
          width: this.done * 33.33 + '%'
      }
    },
    buttonBlock(){
      if(this.done < 3){
        this.disabled = true
        this.activeBtn = true
      }else{
        this.disabled = false
        this.activeBtn = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./assets/stylus/main.less');
@import url('./assets/stylus/animation.less');

.app__container{
  max-width: 550px;
  margin: 100px auto;
  .container__blog{
    .blog__progress{
      height: 40px;
      width: 100%;
      border-radius: 50px;
      margin-bottom: 40px;
      background: #ddd;
      overflow: hidden;
      .progress__bar{
        height: 100%;
        background: blue;
        width: 0%;
      }
    }
  }
  .container__form{
    ul{
      li{
        list-style-type: none;
        margin-bottom: 20px;
      }
    }
  }
}

.form__title{
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: center;
  .title__name{
    font-family: "Roboto-bold";
    font-size: 22px;
    color: #000;
  }
  .title__icon{
    height: 15px;
    width: 15px;
  }
}

.iconError{
  height: 15px;
  background: url('./assets/images/error.png');
  background-size: cover;
}

.iconSuccess{
  height: 15px;
  background: url('./assets/images/valid.png');
  background-size: cover;
}

input{
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  padding: 0px 15px;
  font-family: "Roboto-regular";
  font-size: 16px;
  color: #000;
  outline: none;
}

textarea{
  width: 100%;
  height: 300px;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  padding: 15px 15px;
  font-family: "Roboto-regular";
  font-size: 16px;
  color: #000;
  outline: none;
  resize: none;
}

button{
  font-family: "Roboto-regular";
  color: green;
  font-size: 18px;
  border: 1px solid green;
  height: 40px;
  width: 150px;
  background: #fff;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover{
    background: green;
    color: #fff;
  }
}

.btnCursor{
  cursor: no-drop;
}


</style>
