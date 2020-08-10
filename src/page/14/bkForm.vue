<template>
  <el-container class="page-container">
    <el-main class="add-form-row-2col">
      <el-form
          label-position="left"
          label-width="130px"
          :model="form"
      >
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="任务名称" prop="name">
              <el-input
                  :disabled="disabled"
                  placeholder="请输入任务名称"
                  v-model.trim="form.name" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="任务类型" prop="type">
              <el-input
                  disabled
                  placeholder="请选择任务类型"
                  v-model.trim="form.type" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="任务开始日期" prop="startDate">
              <el-date-picker
                  :disabled="disabled"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择任务开始日期"
                  v-model="form.startDate" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="任务结束日期" prop="endDate">
              <el-date-picker
                  :disabled="disabled"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择任务结束日期"
                  v-model="form.endDate" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="绑卡获得积分" prop="integral">
              <el-input
                  :disabled="disabled"
                  placeholder="绑一张卡可获得积分额"
                  v-model.trim="form.integral" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="绑卡获得积分上限" prop="limit">
              <el-input
                  :disabled="disabled"
                  placeholder="绑卡可获得积分上限"
                  v-model.trim="form.limit" />
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </el-main>

    <el-footer>
      <slot></slot>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      form: this.value,
    }
  },

  watch: {
    form(newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>

<style scoped>

</style>