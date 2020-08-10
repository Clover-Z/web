<template>
  <div>
    <el-container v-show="show" class="page-container">
      <el-main class="query-form">
        <el-form
            v-model="form"
            label-width="120"
            label-position="left"
        >
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="任务名称">
                <el-input v-model="form.name" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="任务类型">
                <el-select v-model="form.type" clearable >
                  <el-option label="笔笔攒任务" value="笔笔攒任务" />
                  <el-option label="会员任务" value="会员任务" />
                  <el-option label="绑卡任务" value="绑卡任务" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-footer>
            <el-button @click="reset" icon="el-icon-refresh-left">重 置</el-button>
            <el-button @click="query" icon="el-icon-search">查 询</el-button>
          </el-footer>
        </el-form>
      </el-main>

      <el-main class="table-main">
        <el-table
            :data="table.data"
            border
            stripe
        >
          <el-table-column
              prop="name"
              label="任务名称"
          ></el-table-column>

          <el-table-column
              prop="type"
              label="任务类型"
          ></el-table-column>

          <el-table-column
              prop="startDate"
              label="任务开始日期"
          ></el-table-column>

          <el-table-column
              prop="endDate"
              label="任务结束日期"
          ></el-table-column>

          <el-table-column
              fixed="right"
              label="操作"
              width="140">
            <template slot-scope="scope">
              <span @click="view(scope.row)" class="view-btn">查看</span>
              <el-divider direction="vertical"/>
              <span @click="update(scope.row)" class="update-btn">编辑</span>
              <el-divider direction="vertical"/>
              <span @click="deleteRow(scope.row)" class="delete-btn">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <el-pagination
            @size-change="(val)=>{}"
            @current-change="(val)=>{}"
            :current-page="table.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="table.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="table.total"
        ></el-pagination>
      </el-footer>
    </el-container>

    <router-view v-if="!show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,

      form: {
        name: '',
        type: ''
      },

      table: {
        page: 1,
        size: 10,
        total: 0,
        data: []
      }
    }
  },

  watch: {
    '$route': function (nVal) {
      this.show = (nVal.path == '/page14') ? true : false;
      if (nVal.params.refresh) {
        this.query();
      }
    },
  },

  created() {
    this.query();
  },

  methods: {
    reset() {
      this.form.name = '';
      this.form.type = '';
    },
    query() {
      let res = this.dataFor14.query(this.form, 1, this.table.size);
      this.table.total = res.total;
      this.table.data = res.records;
    },
    view(row) {
      this.$router.push({
        path: '/page14/view',
        query: {
          id: row.id
        }
      })
    },
    update(row) {
      this.$router.push({
        path: '/page14/update',
        query: {
          id: row.id
        }
      })
    },
    deleteRow(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dataFor14.deleteRow(row.id);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.query();
      })
    },
  },
}
</script>

<style scoped>

</style>