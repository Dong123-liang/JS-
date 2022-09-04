var that;
class Tab{
    constructor(id){
        //获取元素
        that=this;
        this.main=document.querySelector(id);
        this.updateNote();
        this.add=this.main.querySelector('.tabadd');
        //li的父元素
        this.ul=this.main.querySelector('.firstnav ul')
        //section的父元素
        this.fsection=this.main.querySelector('.tabscon');
        // console.log(this.fsection);
        
        this.init();   
    }
    //0、获取所有的li和section
    updateNote(){
        this.spans=document.querySelectorAll('.firstnav li span')
        this.lis=document.querySelectorAll('li');
        this.sections=document.querySelectorAll('section');
        this.removes=this.main.querySelectorAll('.del')
    }
    //0、初始化操作
    init(){
        this.updateNote();
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.toggleTab;
            this.removes[i].onclick=this.removeTab;
            this.spans[i].ondblclick=this.editTab;
            this.sections[i].ondblclick=this.editTab;
        }
        //点击+号执行添加功能
        this.add.onclick=this.addTab;
    }
    //1、切换功能
    toggleTab(){
        that.clearClass();
        this.className='liactive'
        that.sections[this.index].className='conactive'
    }
    //清除类名
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className=''
            this.sections[i].className=''
        }
    }
    //2、添加功能
    addTab(){
        that.clearClass();
        var random=Math.random()
        //创建li元素和section元素
        var li='<li class="liactive">新选项卡<button class="del">x</button></li>'
        var section='<section class="conactive">内容 '+random+'</section>'
        //追加这两个元素添加到父元素中
        that.ul.insertAdjacentHTML('beforeend',li);
        that.fsection.insertAdjacentHTML('beforeend',section)
        that.init();
    }
    //3、删除功能
    removeTab(e){
        e.stopPropagation()
        //获取其父亲的索引号
        var index=this.parentNode.index
        that.lis[index].remove() //remove方法可以直接删除指定的元素
        that.sections[index].remove()
        that.init()
        //当我们删除的不是选定状态的li时，原来的li保持不变
        if(document.querySelector('.liactive')) return;
        //当删除了选定状态的li后，让前一个li处于选定状态
        index--;
        that.lis[index] && that.lis[index].click() //手动调用点击事件
    }
    //4、修改功能
    editTab(){
        var str=this.innerHTML
        //双击禁止选中文字
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        this.innerHTML='<input type="text"/>'
        var input=this.children[0]
        input.value=str;
        input.select()
        //当我们离开文本框，把文本框内的值给span
        input.onblur=function(){
            this.parentNode.innerHTML=this.value
        }
        //按下回车也可以
        input.onkeyup=function(e){
            if(e.keyCode==13){
                this.blur(); //手动调用表单失去焦点事件
            }
        }
    }
}
var tab = new Tab('#tab');