<template>
  <el-container class="page-container">
    <el-main class="query-form">
      <el-form
          v-model="form"
          label-width="120"
          label-position="left"
      >
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="保障计划编号">
              <el-input v-model="form.id" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="保障计划名称">
              <el-input v-model="form.name" />
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
            prop="id"
            label="保障计划编号"
        ></el-table-column>

        <el-table-column
            prop="name"
            label="保障计划名称"
        ></el-table-column>

        <el-table-column
            prop="startTime"
            label="保障开始时间"
        ></el-table-column>

        <el-table-column
            prop="endTime"
            label="保障结束时间"
        ></el-table-column>

        <el-table-column
            prop="invalidCount"
            label="可赔次数"
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
</template>

<script>
  export default {
    data() {
      return {
        form: {
        },

        table: {
          page: 1,
          size: 10,
          total: 0,
          data: []
        }
      }
    },

    created() {
      this.query();
    },

    methods: {
      reset() {
        this.form.id = '';
        this.form.name = '';
      },
      query() {
        let res = this.dataFor10.query(this.form, 1, this.table.size);
        this.table.total = res.total;
        this.table.data = res.records;
      },
      view(row) {
        this.$router.push({
          path: '/page10/view',
          params: {
            id: row.id
          }
        })
      },
      update(row) {
        this.$router.push({
          path: '/page10/update',
          params: {
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
          this.dataFor10.deleteRow(row.id);
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