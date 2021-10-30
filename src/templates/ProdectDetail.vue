<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="min-height: 400px">
        <div slot="header">
          <el-row>
              <el-col :span="12">
                  <span>{{$page.project.name}}</span>
              </el-col>
              <el-col :span="12">
                  <div style="text-align: right;">
                      <el-button @click="$share()" style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                      <el-button @click="goGithub($page.project.url)" style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                      <el-button @click="more" style="padding: 3px 0" type="text" icon="el-icon-more-outline">更多项目</el-button>
                  </div>
              </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{$page.project.created_at}}
          <br> 更新 {{$page.project.updated_at}}
        </div>
        <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 20px 0px 0px 0px">
          {{$page.project.description}}
        </div>
        <div style="font-size: 1.1rem;color: #303133;padding: 15px 0px 15px 0px;border-bottom: 1px solid #E4E7ED;">
          <el-row>
              <el-col :span="16"  style="padding-top: 5px">
                  <el-tooltip effect="dark" :content="'star '+$page.project.stargazersCount" placement="bottom">
                      <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                  </el-tooltip>
                  {{$page.project.stargazersCount}}
                  <el-tooltip effect="dark" :content="'watch '+$page.project.watchersCount" placement="bottom">
                      <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                  </el-tooltip>
                  {{$page.project.watchersCount}}
                  <el-tooltip effect="dark" :content="'fork '+$page.project.forksCount" placement="bottom">
                      <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                  </el-tooltip>
                  {{$page.project.forksCount}}
              </el-col>
              <el-col :span="8" style="text-align: right">
                <el-tag v-for="tag in $page.project.tags" :key="tag.id" size="small" type="success">{{tag.title}}</el-tag>
              </el-col>
          </el-row>
        </div>
        <div v-html="$page.project.content" v-if="$page.project.content" class="markdown-body" style="padding-top: 20px"></div>
        <div v-if="!$page.project.content" style="padding: 20px 0px 20px 0px;text-align: center">
          <font style="font-size: 30px;color:#dddddd ">
              <b>还没有介绍 (╯°Д°)╯︵ ┻━┻</b>
          </font>
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  project:strapiProjects(id: $id){
    id
    name
    content
    description
    created_at
    updated_at
    stargazersCount
    watchersCount
    forksCount
    tags {
      id
      title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'Detail',
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    }
  }
}
</script>