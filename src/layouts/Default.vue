<template>
  <div class="layout">
    <!-- Navigation-->
   <section class="page-header" style="background-image: url('/img/home-bg.jpg')">
        <h1 class="project-name">小太阳</h1>
        <h2 class="project-tagline">欢迎来到小太阳的博客</h2>
        <a href="https://github.com/smallsun0122" class="btn" target="_blank">GitHub主页</a>
        <a href="https://github.com/smallsun0122/gridsome-blog" class="btn" target="_blank">博客源码</a>
    </section>

     <!-- Main Content-->
    <div style="position:relative;  z-index:2;margin: auto;margin-top:-30px;width:64rem;">
      <el-card shadow="never" :body-style="{ padding: '0px' }">
        <el-row>
          <el-col :span="18">
              <el-menu @select="selectTopbar" :default-active="topbar.active" mode="horizontal" menu-trigger="click">
                  <el-submenu index="#more">
                      <template slot="title">了解博主</template>
                      <el-menu-item index="#githubHome">github主页</el-menu-item>
                      <el-menu-item index="#blog">其他博客</el-menu-item>
                  </el-submenu>
                  <el-submenu index="#webSites">
                      <template slot="title">其他网站</template>
                      <el-menu-item index="#githubHome">掘金</el-menu-item>
                  </el-submenu>
              </el-menu>
          </el-col>
          <el-col :span="4" style="text-align: right;">
              <div style="font-size: 20px;color:#606266;margin-top: 5px">
                  <b>{{githubUsername}}</b>
              </div>
              <div style="color:#606266;">
                  <i class="el-icon-location"></i>&nbsp;{{location?location:'未填写地址'}}
                  <br>
              </div>
          </el-col>
          <el-col :span="2" style="text-align: center;">
              <img v-popover:bigAvatar src="/img/about-bg.jpg" style="margin-top: 4px;margin-right: 10px;width:52px; height:52px; border-radius:5px; border: 1px solid #EBEEF5"
              />
              <el-popover ref="bigAvatar" placement="top-start" :title="githubUsername" width="200" trigger="hover">
                  <i class="el-icon-star-on"></i>&emsp;{{name}}
                  <br>
                  <i class="el-icon-location"></i>&emsp;{{location}}
                  <br>
                  <img src="/img/about-bg.jpg" style="width: 200px;height: 200px;">
              </el-popover>
          </el-col>
        </el-row>
    </el-card>
    </div>

    <section class="main-content">
        <el-row>
            <el-col :span="6" style="padding-right:10px">
                <sidebar :id="id"></sidebar>
            </el-col>
            <el-col :span="18" style="padding-left:10px">
                <!-- 插槽内容 -->
                <slot/>
            </el-col>
        </el-row>
    </section>

    <!-- Footer-->
    <footer class="foot">
        <div style="border-top: 1px #e1e4e8 solid !important;padding: 45px 0px 45px 0px;">
          <el-row>
            <el-col :span="10">
              <div>
                © 2018 GitHub-Laziji&emsp;&emsp;
                <a href="https://github.com/GitHub-Laziji" target="_blank">Profile</a>&emsp;&emsp;
                <a href="https://github.com/GitHub-Laziji/vblog" target="_blank">VBlog</a>
              </div>
            </el-col>
            <el-col :span="4">
              <div style="text-align: center;font-size: 18px">
                <i class="el-icon-location-outline"></i>
              </div>
            </el-col>
            <el-col :span="10">
              <div style="float: right;">
                <a href="https://developer.github.com" target="_blank">GitHub-API</a>&emsp;&emsp;
                <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>&emsp;&emsp;
                <a href="http://element.eleme.io/" target="_blank">Element</a>
              </div>
            </el-col>
          </el-row>
        </div>
    </footer>

  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  metaInfo: {
    title: 'blog'
  },
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  components: {
    Sidebar
  },
  data() {
    return {
      githubUsername: 'smallsun0122',
      name: 'sunny',
      topbar: {
        active: "",
      },
      location: 'zhuhai'
    }
  },
  methods: {
    selectTopbar(index) {
      //取消菜单选中状态
      this.topbar.active = this.topbar.active == "" ? " " : ""
      switch (index) {
        case "#githubHome":
            window.open('https://github.com/' + this.githubUsername)
            break
        case "#blog":
            if (this.blog) {
                window.open((this.blog.match(/https?:\/\//i)?'':'https://') + this.blog)
            } else {
                this.$message({
                    message: '博主没有其他博客',
                    type: 'info'
                })
            }
            break
        default:
            if(/#webSites-\d+/.test(index)){
                let i = parseInt(index.split('-')[1])
                let url = this.webSites[i].url
                window.open((url.match(/https?:\/\//i)?'':'https://') + url)
            }
            break
      }
    },
  }
}
</script>

<style>
</style>
