<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <router-link to='FirstPage'>
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon> 
                            首页
                        </MenuItem>
                        </router-link>
                        <router-link to='BlogPage'>
                        <MenuItem name="2">
                            <Icon type="ios-keypad" ></Icon>
                            博客
                        </MenuItem>
                        </router-link>
                        <router-link to='EditPage'>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            编辑
                        </MenuItem>
                        </router-link>
                        <router-link to='Something'>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Something
                        </MenuItem>
                        </router-link>
                    </div>
                </Menu>
            </Header>       
            <Content :style="{margin: '20px 20px 0', background: '#fff', minHeight: '500px'}">
                <Row>
                    <i-col span="16">
                            <Card v-for="(item, index) in list1" :key="index" style="margin: 32px 0px">
                                <p slot="title"> Title: {{ item.name}}</p>
                                <div style="text-align:center">
                                    <b>Description:</b> {{ item.description }}
                                </div>
                            </Card>
                            <Page :total="100" />
                            <br>
                    </i-col>
                    <i-col span="8"> 
                        <Card style="margin:32px 20px">
                            <p slot="title" style="padding-right: 450px">
                            <Icon type="ios-search"/>
                                搜索文章
                            </p>
                            <i-input search enter-button placeholder="Enter something..."/>
                            <br>
                            <Tag type="border">标签三</Tag>   
                            <Tag type="border">标签三</Tag>                  
                            <Tag type="border">标签三</Tag>  
                            <Tag type="border">标签三</Tag>  
                            <br>
                            <Tag type="border">标签三</Tag>   
                            <Tag type="border">标签三</Tag>                  
                            <Tag type="border">标签三</Tag>  
                            <Tag type="border">标签三</Tag>  
                            <Tag type="border">标签三</Tag>
                        </Card>
                    </i-col>
                </Row>
            </Content>
            <Footer class="layout-footer-center">2019 &copy; ZhaoWenyue</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        mounted() {
            var vm = this;
            this.$axios.get("http://39.98.49.48:8080/my/blog/all").then(function(response){
                console.log(response.data);
                vm.list1 = response.data;
            })
        }
    }
</script>
<style scoped>
 .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>