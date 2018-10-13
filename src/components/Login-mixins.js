export default {
  data() {
    return {
      // 登入表单的数据对象
      loginForm: {
        username: '',
        password: ''
      },
      // 登入表单的验证规则对象
      loginFormRules: {
        // 登入名称的验证规则
        username: [{ required: true, message: '请输出用户名称', trigger: 'blur' }],
        password: [{ required: true, message: '请输出用户密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登入失败')
        this.$message.success('登入成功')
        //  登入成功的token保存道sessionStorage
        window.sessionStorage.setItem('token', res.data.token)
        // 用链式编程，跳转到后台主页
        this.$router.push('/home')
      })
    }
  }
}
