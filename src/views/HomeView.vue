<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Form @submit="onSubmit" v-slot="{ errors }" style="width:80%; margin:0 auto;">
      {{ errors }}
      <hr />

      <div class="mb-3">
        <!-- rules => 文件規範(email, required) -->
        <!-- errors 是對應上方的錯誤訊息，是 email 就執行 class名稱為 is-invalid -->
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email"
        rules="email|required" v-model="user.email"
        :class="{ 'is-invalid': errors['email'], 'is-valid': !errors['email'] && this.user.email != ''}"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <!-- :class="{ 'is-invalid': errors['email'] }" -->

      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field id="name" name="姓名" type="text" class="form-control" placeholder="請輸入姓名"
        :rules="isName" v-model="user.name"
        :class="{ 'is-invalid': errors['姓名'], 'is-valid': !errors['姓名'] && this.user.name != ''}"
        ></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <!-- rules => 自定規範(isPhone) -->
        <!-- errors 是對應上方的錯誤訊息，是 電話 就執行 class名稱為 is-invalid -->
        <label for="mobile" class="form-label">行動電話</label>
        <Field id="mobile" name="行動電話" type="text" class="form-control" placeholder="請輸入行動號碼, ex:09xxxxxxxx"
        :rules="isMobile" v-model="user.mobile"
        :class="{ 'is-invalid': errors['行動電話'], 'is-valid': !errors['行動電話'] && this.user.mobile != ''}"
        ></Field>
        <error-message name="行動電話" class="invalid-feedback"></error-message>
      </div>
      <!-- :class="{ 'is-invalid': errors['行動電話'] }" -->

      <div class="mb-3">
        <!-- as 可以改變 v-field 的型態，如以下 select 範例 -->
        <label for="region" class="form-label">地區</label>
        <Field id="region" name="地區" class="form-control"
        rules="required" v-model="user.region"
        :class="{ 'is-invalid': errors['地區'], 'is-valid': !errors['地區'] && this.user.region != ''}"
        as="select"
        >
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </Field>
        <error-message name="地區" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <Field id="address" name="地址" type="text" class="form-control" placeholder="請輸入地址"
        rules="required" v-model="user.address"
        :class="{ 'is-invalid': errors['地址'], 'is-valid': !errors['地址'] && this.user.address != ''}"
        ></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  // 呈現資料使用
  data () {
    return {
      user: {
        email: '',
        name: '',
        address: '',
        mobile: '',
        region: ''
      }
    }
  },
  // 送出表單，最後進行驗證使用
  methods: {
    onSubmit () {
      console.log(this.user)
    },
    isName (value) {
      const name = value
      return name === '' ? '請輸入姓名' : true
    }, // 姓名 為必填
    isMobile (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      // return phoneNumber.test(value)
      return phoneNumber.test(value) ? true : '輸入正確行動電話號碼'
    }
  },
  // 目前狀態為何
  created () {
    console.log(this)
    console.log(this.user)
  }
}
</script>
