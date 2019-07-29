<template>
        <Layout>
                <Menu mode="horizontal" theme="dark" active-key="1">
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
                <Tabs>
                    <TabPane label="添加" icon="logo-apple" name='tab2'>
                        <Content :style="{margin: '0px 20px 0', background: '#fff', minHeight: '500px'}">
                            <br>
                            <i-form :model="formItem" :label-width="80">
                                <FormItem label="Input">
                                    <Input v-model="formItem.input" placeholder="Enter something..." margin-right:40px></Input>
                                </FormItem>
                                <FormItem label="Text">
                                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </i-form>
                            <quill-editor 
                                v-model="content" 
                                ref="myQuillEditor" 
                                :options="editorOption" 
                                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                @change="onEditorChange($event)">
                            </quill-editor>
                            <div v-html="str" class="ql-editor">
                                {{content}}
                            </div>
                            <br>
                            <br>
                            <Button type="primary" @click="showData">save</Button>
                            <Button type="info">save</Button>
                            <Button type="success">save</Button>
                            <Button type="warning">save</Button>
                            <Button type="primary" ghost>save</Button>
                            <Button type="info" ghost>save</Button>
                            <Button type="success" ghost>save</Button>
                            <Button type="warning" ghost>save</Button>
                            <Button type="error" ghost>save</Button>
                            <br> 
                            <br>
                        </Content>   
                        <Footer class="layout-footer-center">2019 &copy; ZhaoWenyue</Footer>      
                    </TabPane>
                    <TabPane label="修改" icon="logo-windows" name='tab1'>
                        <Content :style="{margin: '0px 20px 0', background: '#fff', minHeight: '500px'}">
                            <Row>
                                <i-col span="16">
                                    <Card v-for="(item, index) in list1" :key="index" style="margin: 32px 0px">
                                        <p slot="title">Use a card with a shadow effect</p>
                                            <div style="text-align:center">
                                                283646846
                                                Content {{ item }}
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
                                    </Card>
                                </i-col>
                            </Row>
                         </Content>
                         <Footer class="layout-footer-center">2019 &copy; ZhaoWenyue</Footer>
                    </TabPane>
                    
                </Tabs>  
        </Layout>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
    export default {
        components: {
        quillEditor
    },
    data() {
        return {
            content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
            str:'',
            editorOption: {},
            tabs: 2,
            formItem: {
                    input: '',
                    textarea: ''
                },
            list1: [1, 2, 3, 4, 5, 6],
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
    
        },
        onEditorBlur(editor){
        }, // 失去焦点事件
        onEditorFocus(editor){
        }, // 获得焦点事件
        onEditorChange(editor){
            console.log(this.content);
        }, // 内容改变事件

        // 转码
        escapeStringHTML(str) {
            str = str.replace(/</g,'<');
            str = str.replace(/>/g,'>');
            return str;
        },
        handleTabsAdd() {
                this.tabs ++;
            },
        showData(formItem) {
            console.log(this.formItem.input);
            console.log(this.formItem.textarea);
            console.log(this.content);
            this.$axios.post("http://localhost:8080/my/blog/save",{
                'title':this.formItem.input,
                'description':this.formItem.textarea,
                'content':this.content},{
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                }
                })
            this.$Message.success('Save Successed');
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        
    },
    mounted(){
        let content='';
        this.str = this.escapeStringHTML(content); 
        var vm = this
        
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
        margin: auto auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .quill-editor{
        height: 520px;
        margin-right: 20px;
        margin-left: 20px;
    }
</style>