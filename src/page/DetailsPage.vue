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
            <Content :style="{margin: '20px 20px 0', background: '#fff', maxHeight: '800px'}">
                <Row>
                   
                </Row>
            </Content>
            <Footer class="layout-footer-center">2019 &copy; ZhaoWenyue</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg: '',
                name:'',
                nickName: '',
                password: '',
                city:'北京',
                time: '',
                humidity:'',
                wind_strength:'',
                wind_direction:'',
                temp:'',
                value1: 0
                

            }
        },
        mounted(){
            var vm = this
            this.$axios.get("http:/localhost:8080/my/users/1").then(function(response){
                console.log(response);
                console.log(response.data.userName)
                vm.msg=response.data.userName
                vm.name = response.data.userName
                vm.nickName = response.data.nickName
                vm.password = response.data.passWord
                
            })
            this.$axios.get("aa/apis/weather/index?cityname=北京&key=98508d28adecbd6b7e02e79036908137").then(function(response){
                console.log(response)
                vm.temp=response.data.result.sk.temp
                vm.time=response.data.result.sk.time
                vm.humidity=response.data.result.sk.humidity
                vm.wind_strength=response.data.result.sk.wind_strength
                vm.wind_direction=response.data.result.sk.wind_direction
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