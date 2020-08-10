<template>
  <div>
    <bbz-form
        v-if="type=='笔笔攒任务'"
        v-model="form"
    >
      <template #default>
        <el-button @click="save" icon="el-icon-check">保 存</el-button>
        <el-button @click="cancel" icon="el-icon-close">取 消</el-button>
      </template>
    </bbz-form>

    <hy-form
        v-if="type=='会员任务'"
        v-model="form"
    >
      <template #default>
        <el-button @click="save" icon="el-icon-check">保 存</el-button>
        <el-button @click="cancel" icon="el-icon-close">取 消</el-button>
      </template>
    </hy-form>

    <bk-form
        v-if="type=='绑卡任务'"
        v-model="form"
    >
      <template #default>
        <el-button @click="save" icon="el-icon-check">保 存</el-button>
        <el-button @click="cancel" icon="el-icon-close">取 消</el-button>
      </template>
    </bk-form>
  </div>
</template>

<script>
import BbzForm from "@/page/14/bbzForm";
import HyForm from "@/page/14/hyForm";
import BkForm from "@/page/14/bkForm";

export default {
  components: {BbzForm, HyForm, BkForm},
  data() {
    return {
      form: {
        name: '',
        type: '',
        startDate: '',
        endDate: '',
        integral: '',
        limit: ''
      },
      type: ''
    }
  },

  created() {
    this.type = this.$route.query.type;
    this.form.type = this.type;
  },

  methods: {
    cancel() {
      this.$router.back();
    },
    save() {
      let params = this.form;
      let date = new Date();
      params.id = date.getUTCFullYear() + '' + date.getUTCMonth() + date.getUTCDay() + date.getUTCHours() + date.getUTCMinutes() + date.getUTCMilliseconds();
      this.dataFor14.addRow(params);
      this.$message.success("保存成功!");
      this.$router.push({
        path: '/page14'
      })
    },
  }
}
</script>

<style scoped>

</style>