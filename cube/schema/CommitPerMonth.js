


cube(`CommitterPerMonthCommit`, {
    sql: `SELECT COUNT(*) as num_commits, month, repository_id, committer_name, committer_email
    FROM ( SELECT MONTH(committer_when) as month,
                  r.repository_id,
                  committer_name,
                  committer_email
        FROM ref_commits r
        INNER JOIN commits c

            ON YEAR(c.committer_when) = 2019 AND r.commit_hash = c.commit_hash
            WHERE r.ref_name = 'HEAD'
    ) as t GROUP BY committer_email, committer_name, month, repository_id
      order by month desc
    `,
    measures: {
        count: {
          type: `sum`,
          sql: `num_commits`,
          title:`总数`
        }
    },
    dimensions: {
      num_commits: {
        sql: `num_commits`,
        type: `number`
      },
      month: {
        sql: `month`,
        type: `number`
      },
      
      repository_id: {
        sql: `repository_id`,
        type: `string`
      },
      committer_name: {
        sql: `committer_name`,
        type: `string`
      },
      committer_email: {
        sql: `committer_email`,
        type: `string`
      }
    }
  });
  