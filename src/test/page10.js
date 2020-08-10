  export default {
    rows: [{
      id: '10000001',
      name: '保障计划1',
      startTime: '2020-07-10',
      endTime: '2021-07-10',
      invalidCount: 3
    }, {
      id: '10000002',
      name: '保障计划2',
      startTime: '2020-09-15',
      endTime: '2030-09-15',
      invalidCount: 10
    }],

    query(params, page, size) {
      let result = {
        total: 0,
        records: []
      }
      let okData = [];
      this.rows.forEach((row) => {
        let c1 = params.id ? row.id==params.id : true;
        let c2 = params.name ? row.name.indexOf(params.name)>0 : true;
        if (c1 && c2) okData.push(row);
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