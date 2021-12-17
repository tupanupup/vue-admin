<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="form"
      :rules="rules"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <!-- todo 国际化 -->
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon :size="18">
              <User/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          :show-password="true"
        >
          <template #prefix>
            <el-icon :size="18">
              <Lock/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <div class="button-container">
        <el-button
          class="button"
          type="primary"
          @click="handleLogin"
        >登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { User, Lock } from '@element-plus/icons';

export default defineComponent ({
  components: {
    User,
    Lock
  },
  setup() {
    const loginFormRef = ref(null);

    const data = reactive({
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    });

    // 验证表单并提交登录
    function handleLogin() {
      (loginFormRef.value as any).validate((valid: boolean) => {
        console.log('验证 ', valid);
      });
    }

    return {
      loginFormRef,
      handleLogin,
      ...toRefs(data)
    };
  }
})
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-color: $loginBg;

  .login-form {
    margin: 0 auto;
    width: 520px;
    padding: 160px 35px 0;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        margin: 0 auto 40px;
        font-size: 26px;
        font-weight: bold;
        color: $lightGray;
        text-align: center;
      }
    }

    // 修改input样式
    ::v-deep(.el-input) {
      .el-input__inner {
        color: $lightGray;
        background-color: rgba(#000000, 0.1);
      }

      .el-input__prefix {
        align-items: center;
      }
    }

    .button-container {
      .button {
        width: 100%;
      }
    }
  }
}
</style>
