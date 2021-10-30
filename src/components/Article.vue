<template>
  <div style="min-height: 600px">
    {{1111}}
        <el-card shadow="never" style="min-height: 400px" v-if="!isNew && data.id">
            <div slot="header">
                <span>{{data.title}}</span>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{data.createTime}}
                <br> 更新 {{data.updateTime}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{data.description}}</pre>
            </div>
            <div v-html="mdToHtml(data.content)" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
        <el-card v-else shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center">
            <font style="font-size: 30px;color:#dddddd ">
                <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
            </font>
        </el-card>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'Article',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    }
  }
}
</script>