cube(`Commits`, {
  sql: `SELECT * FROM gitbase.commits`,
  title: "提交",
  joins: {
    Repositories: {
      sql: `${CUBE}.repository_id = ${Repositories}.repository_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [committerName, repositoryId, commitAuthorName]
    }
  },
  
  dimensions: {
    committerName: {
      sql: `committer_name`,
      type: `string`,
      title: `提交者`
    },
    
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
    commitAuthorName: {
      sql: `commit_author_name`,
      type: `string`,
      title: `作者`
    },
    
    commitAuthorEmail: {
      sql: `commit_author_email`,
      type: `string`,
      title: `作者email`
    },
    
    commitHash: {
      sql: `commit_hash`,
      type: `string`
    },
    
    committerEmail: {
      sql: `committer_email`,
      type: `string`,
      title: `提交者email`
    },
    
    commitMessage: {
      sql: `commit_message`,
      type: `string`,
      title: `提交消息`
    },
    
    treeHash: {
      sql: `tree_hash`,
      type: `string`
    },
    
    commitParents: {
      sql: `commit_parents`,
      type: `string`
    },
    
    commitAuthorWhen: {
      sql: `commit_author_when`,
      type: `time`
    },
    
    committerWhen: {
      sql: `committer_when`,
      type: `time`
    }
  }
});
