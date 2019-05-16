cube(`TopNCommitters`, {
    sql: `select COUNT(*) as comitcounsts,commit_author_email 
    from commits  group by commit_author_email  
    order by comitcounsts desc 
    LIMIT  10 `,
    measures: {
        count: {
          type: `sum`,
          sql: `comitcounsts`,
          title:`top10 总数`
        }
    },
    dimensions: {
        commit_author_email2: {
        sql: `commit_author_email`,
        type: `string`,
        primaryKey: true
      },
      commit_author_email: {
        sql: `commit_author_email`,
        type: `string`,
        title: `提交人`
      },
      comitcounsts: {
        sql: `comitcounsts`,
        type: `number`,
        title: `代码提交数`
      }
    }
  });
  