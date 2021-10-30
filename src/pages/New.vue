<template>
  <Layout>
    <div style="min-height: 600px">
        <el-card shadow="never" style="min-height: 400px" v-if="$page.article.id">
            <div slot="header">
                <span>{{$page.article.title}}</span>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{$page.article.createTime}}
                <br> 更新 {{$page.article.updateTime}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{$page.article.description}}</pre>
            </div>
            <div v-html="mdToHtml($page.article.content)" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.article.id">
            <font style="font-size: 30px;color:#dddddd ">
                <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
            </font>
        </el-card>
    </div>
  </Layout>
</template>

<page-query>
query {
  article:strapiArticles(id: 7){
    id
    title
    content
    description
    created_at
    updated_at
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