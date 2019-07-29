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
            <Content :style="{background: '#fff', minHeight: '500px'}">   
                <br>
                <br>
                <Row>
                    <i-col span="8">
                        <br>
                    </i-col>
                    <i-col span="8">
                        <Timeline>
                    <TimelineItem>
                        <p class="time">1976年</p>
                        <p class="content">Apple I 问世</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">1984年</p>
                        <p class="content">发布 Macintosh</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2007年</p>
                        <p class="content">发布 iPhone</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2010年</p>
                        <p class="content">发布 iPad</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2011年10月5日</p>
                        <p class="content">史蒂夫·乔布斯去世</p>
                    </TimelineItem>
                </Timeline>
                    </i-col>
                    <i-col span="8">
                        <br>
                    </i-col>
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

            }
        },
        mounted(){
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
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>