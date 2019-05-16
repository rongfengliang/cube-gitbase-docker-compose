cube(`TopNRepoCommit`, {
    sql: `SELECT repository_id, commit_count
    FROM   (SELECT r.repository_id, COUNT(*) AS commit_count
            FROM   refs r
                   JOIN ref_commits AS c ON r.ref_name = c.ref_name
            WHERE  r.ref_name = 'HEAD'
            GROUP  BY r.repository_id) AS q
    ORDER  BY commit_count DESC
    LIMIT  10 `,
    dimensions: {
      repositoryId: {
        sql: `repository_id`,
        type: `string`,
        primaryKey: true
      },
      repositoryId2: {
        sql: `repository_id`,
        type: `string`,
        title: `仓库`
      },
      commit_count: {
        sql: `commit_count`,
        type: `number`,
        title: `代码提交数`
      }
    }
  });
  