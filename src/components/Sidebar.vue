<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active">
                <el-menu-item v-for="item in constantRouterMap"
                    :key="item.path" :index="item.path" @click="onSelect(item.path, item.isId)">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span> 
                </el-menu-item>
            </el-menu>
        </el-card>

        <el-card shadow="never" style="margin-top: 20px;text-align: center">
            <div style="margin-top: 10px;text-align: left">
                <el-alert title="座右铭" type="info" description="未来可见更可期"
                    :closable="false">
                </el-alert>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            constantRouterMap: [
                {
                    path: 'blog/detail',
                    isId: true,
                    meta: {
                        type: "user",
                        icon: 'el-icon-star-off',
                        title: '最新动态'
                    }
                },
                {
                    path: 'social',
                    meta: {
                        type: "user",
                        icon: 'el-icon-mobile-phone',
                        title: '社交圈'
                    }
                },
                {
                    path: 'blog',
                    meta: {
                        type: "user",
                        icon: 'el-icon-edit-outline',
                        title: '博客列表'
                    }
                },
                {
                    path: 'project',
                    meta: {
                        type: "user",
                        icon: 'el-icon-service',
                        title: '开源项目'
                    }
                }  
            ],
            active: "",
            parentUrl: "",
            menuList: []
        }
    },
    mounted() {
        let arr = this.$route.path.split("/")
        this.active = arr[1]
    },
    methods: {
        onSelect(url, isId) {
            console.log(url)
            let URL = url
            if (isId) {
                URL = `${URL}/${this.id}`
            }
            this.$router.push(`/${URL}`)
        },
        openTokenDialog() {
            this.$refs.tokenDialog.open(() => {
        
            })
        },
        cancellation() {
            this.$store.dispatch("Cancellation")
        }
    }
}
</script>