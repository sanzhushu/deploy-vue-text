<template>
  <div>
    <h2 class="m-auto mt-6 flex justify-between w-[90vw]">
      <span @click="gohome"><Icon icon="iconamoon:close-bold" /></span> <span>游客登入</span>
    </h2>
    <div v-if="flay">
      <div class="mt-10 m-auto w-[90vw] flex justify-center">
        <Icon
          icon="ri:netease-cloud-music-fill"
          class="text-[#F12A24] text-[30vw]"
        />
      </div>
      <div
        class="border-2 m-auto flex items-center w-[80vw] h-[15vw] rounded-[2vw]"
      >
        <span
          is-link
          @click="showPopup"
          name=""
          id=""
          class="flex border-r-4 pl-4"
          >+{{ code }}<Icon icon="ri:arrow-down-s-fill" class="mt-1"
        /></span>
        <input
          type="search"
          class="outline-none pl-4 w-[60vw]"
          v-model="phone"
        />
      </div>
      <div class="m-auto w-[80vw] mt-6">
        <button
          class="text-[5vw] text-white w-[80vw] h-[15vw] rounded-[7.5vw] bg-[#FF3A39]"
          @click="sentCard"
        >
          获取验证码
        </button>
      </div>
      <div class="m-auto w-[80vw] mt-6 flex h-[8vw]">
        <span class="h-[8vw]">
          <input type="checkbox" class="Checkbox" id="check1"  v-model="checked"/>
          <label for="check1" class="mt-1"></label>
        </span>
        <p class="pl-5">我已阅读并同意《服务条款》、《隐私政策》</p>
      </div>
    </div>
    <div v-else>
      <div class="mt-10 ml-5 h-[100vh]">
        <h2 class="text-[7vw]">输入验证码</h2>
        <div>验证码已发送至<span>+{{code}}</span>{{ phone }}</div>
        <div class="relative">
          <input
            type="tel"
            ref="input"
            class="absolute opacity-0 top-0"
            v-model="value"
          />
          <van-password-input
            class="absolute top-0 h-[16vw]"
            @click="focusInput"
            :value="value"
            :mask="false"
            :gutter="10"
            :length="4"
            :focused="focused"
          />
        </div>
        <div class="mt-[20vw] w-[90vw] flex justify-between items-center">
          <span class="text-[#666464]">重新获取</span><span>手机号已停用</span>
        </div>
      </div>
    </div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      
      :style="{ height: '97%' }"
    >
    <van-nav-bar title="选择国家和地区"  left-text=''  @click-left="onClickLeft" >
      <template #left> 
        <Icon icon="ri:close-fill" />
      </template>
       </van-nav-bar>
      <van-index-bar :index-list="indexList" >
        <div  v-for="(item, index) in CodeList?.data?.data"
          :key="index">
          <van-index-anchor :index="item.label"
          :sticky-offset-top="10"
          :sticky="false"
        ></van-index-anchor>
        <van-cell v-for="(iten,index) in item.countryList" :key="index" :title="iten.zh" @click="countryCode(iten.code)" ><span class="mr-5">+{{ iten.code }}</span></van-cell>
        </div>
        
        
      </van-index-bar>
    </van-popup>
  </div>
</template>

<script>
import { getCapycha } from "@/service";
import { mapState } from "vuex";
export default {
  data() {
    return {
      phone: "18672851882",
      flay: true,
      captcha: "",
      show: false,
      value: "",
      focused: false,
      indexList: [
        "常",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      code:'86',
      checked: false,
    };
  },
  watch: {
    value(newVal) {
      console.log(newVal);
      if (newVal.length == 4) {
        // console.log(111);
        this.login(newVal);
        
      }
    },
  },
  computed: {
    ...mapState(["CodeList"]),
  },
  methods: {
    async sentCard() {
      if (!/^1[356789]\d{9}$/.test(this.phone)) return alert("手机号格式错误");
      if(!this.checked)return alert("请先同意服务协议");
      const [err, res] = await getCapycha({ phone: this.phone });
      if (err) return alert( err,"获取验证码失败");
      this.flay = false;
      alert("获取验证码成功");
      console.log(res);
    },
    login(newVal) {
      this.$store.dispatch("requestloginCellphone", {
        phone: this.phone,
        captcha: newVal,
      });
      this.$router.push("/home");
    },
    showPopup() {
      this.show = true;
    },
    focusInput() {
      this.$refs.input.focus();
      this.focused = true;
    },
    countryCode(code){
      this.code = code;
      this.show = false;
    },
    gohome(){
      this.$router.push('/home')
    },
    onClickLeft(){
      this.show = false
    }
  },
  created() {
    // console.log(this.value);
    // console.log(this.CodeList.data.data);
  },
};
</script>

<style scoped>
.van-password-input__item {
  height: 16vw !important;
  border: none !important;
  color: red;
  font-size: 20px;
  border-bottom: #7a7878 solid 4px !important;
}
.van-password-input__item--focus {
  border-bottom: 4px solid rgb(22, 22, 22) !important;
}
span {
  position: relative;
}
.Checkbox {
  position: absolute;
  visibility: hidden;
}
.Checkbox + label {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid #a6a6a6;
  border-radius: 50%;
  background-color: #dedede;
}
.Checkbox:checked + label:after {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  width: 9px;
  height: 4px;
  border: 2px solid #424242;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(-45deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
</style>
