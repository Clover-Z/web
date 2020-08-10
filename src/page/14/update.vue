<template>
  <bbz-form
      v-if="form.type=='笔笔攒任务'"
      v-model="form"
      :disabled="true"
  >
    <template #default>
      <el-button @click="save" icon="el-icon-check">保 存</el-button>
      <el-button @click="back" icon="el-icon-close">返 回</el-button>
    </template>
  </bbz-form>
</template>

<script>
import BbzForm from "@/page/14/bbzForm";

export default {
  components: {
    BbzForm
  },
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
    }
  },

  created() {
    this.form = this.dataFor14.query({id: this.$route.params.id}, 1, 1).records[0];
  },

  methods: {
    back() {
      this.$router.back();
    },
    save() {
      this.dataFor14.updateRow(this.form);
      this.$router.push({
        path: '/page14',
        params: {
          refresh: true
        }
      })
    },
  }
}
</script>

<style scoped>

</style>