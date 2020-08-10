export default {
  rows: [{
    id: '20200810001',
    name: '8月薪活动',
    type: '笔笔攒任务',
    startDate: '2020-08-01',
    endDate: '2020-08-31',
    integral: '2',
    limit: '10'
  }],

  query(params, page, size) {
    let result = {
      total: 0,
      records: []
    }
    let okData = [];
    this.rows.forEach((row) => {
      let c1 = params.type ? row.type==params.type : true;
      let c2 = params.name ? row.name.indexOf(params.name)>0 : true;
      let c3 = params.id ? row.id==params.id : true;
      if (c1 && c2 && c3) okData.push(row);
    })
    result.total = okData.length;
    for (let i=(page-1)*size; i<okData.length; i++) result.records.push(okData[i]);
    return result;
  },

  addRow(row) {
    let newRow = [];
    newRow.push(row);
    this.rows.forEach(row=>newRow.push(row))
    this.rows = newRow;
  },

  deleteRow(id) {
    let newRow = [];
    this.rows.forEach(row => {
      if (row.id != id) newRow.push(row);
    })
    this.rows = newRow;
  },

  updateRow(row) {
    for (let i=0; i<this.rows.length; i++) {
      if (this.rows[i].id == row.id) {
        this.rows[i] = row;
        return;
      }
    }
  },
}