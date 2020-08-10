<template>
  <div>
    <bbz-form
        v-if="form.type=='笔笔攒任务'"
        v-model="form"
        :disabled="true"
    >
      <template #default>
        <el-button @click="back" icon="el-icon-close">返 回</el-button>
      </template>
    </bbz-form>

    <hy-form
        v-if="form.type=='会员任务'"
        v-model="form"
        :disabled="true"
    >
      <template #default>
        <el-button @click="back" icon="el-icon-close">返 回</el-button>
      </template>
    </hy-form>

    <bk-form
        v-if="form.type=='绑卡任务'"
        v-model="form"
        :disabled="true"
    >
      <template #default>
        <el-button @click="back" icon="el-icon-close">返 回</el-button>
      </template>
    </bk-form>
  </div>
</template>

<script>
import BbzForm from "@/page/14/bbzForm";
import HyForm from "@/page/14/hyForm";
import BkForm from "@/page/14/bkForm";

export default {
  components: {
    BbzForm,
    HyForm,
    BkForm
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

  mounted() {
    this.form = this.dataFor14.query({id: this.$route.params.id}, 1, 1).records[0];
    console.log(this.form.id + ',' + this.form.type)
  },

  methods: {
    back() {
      this.$router.back();
    }
  },
}
</script>

<style scoped>

</style>