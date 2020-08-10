<template>
  <el-container class="page-container">
    <el-main class="add-form-row-2col">
      <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-position="left"
          label-width="120px"
      >
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="保障计划编号" prop="id">
              <el-input
                  placeholder="请输入保障计划编号"
                  v-model.trim="form.id" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="保障计划名称" prop="name">
              <el-input
                  placeholder="请输入保障计划名称"
                  v-model.trim="form.name" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="保障开始时间" prop="startTime">
              <el-date-picker
                  placeholder="请选择保障开始时间"
                  value-format="yyyy-MM-dd"
                  v-model="form.startTime" type="date" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="保障结束时间" prop="endTime">
              <el-date-picker
                  placeholder="请选择保障结束时间"
                  value-format="yyyy-MM-dd"
                  v-model="form.endTime" type="date" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="可赔次数" prop="invalidCount">
              <el-input
                  placeholder="请输入可赔次数"
                  v-model.trim="form.invalidCount" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="保险协议" prop="xyNo">
              <el-input
                  placeholder="请输入保险协议"
                  v-model.trim="form.xyNo" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="保险详情" prop="detail">
              <el-input
                  placeholder="请输入保险详情"
                  v-model.trim="form.detail" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>

    <el-footer>
      <el-button @click="save" icon="el-icon-check">保 存</el-button>
      <el-button @click="cancel" icon="el-icon-close">取 消</el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        startTime: '',
        endTime: '',
        invalidCount: '',
        xyNo: '',
        detail: ''
      },
      rules: {
        id: [{
          required: true,
          max: 20
        }],
        name: [{
          required: true,
          max: 30
        }],
        startTime: [{
          required: true,
        }],
        endTime: [{
          required: true
        }],
        invalidCount: [{
          required: true
        }],
        xyNo: [{
          required: true
        }],
        detail: [{
          max: 200
        }]
      }
    }
  },

  created() {
    let id = this.$route.params.id;
    this.form = this.dataFor10.query({id: id}, 1, 1).records[0];
  },

  methods: {
    cancel() {
      this.$router.back();
    },
    save() {
      this.$refs['form'].validate((pass) => {
        if (pass) {
          this.dataFor10.updateRow(this.form);
          this.$message.success("保存成功!");
          this.$router.push({
            path: '/page10'
          })
        }
      });
    }
  }
}
</script>

<style scoped>

</style>