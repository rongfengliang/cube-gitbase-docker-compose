cube(`Repositories`, {
  sql: `SELECT * FROM gitbase.repositories`,
  title:"git 仓库",
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [repositoryId]
    }
  },
  
  dimensions: {
    repositoryId: {
      sql: `repository_id`,
      type: `string`,
      primaryKey: true
    },
    repositoryId2: {
      sql: `repository_id`,
      type: `string`,
      title:"仓库名称"
    },
  }
});
