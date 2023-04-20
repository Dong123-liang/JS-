
            let str = new Array();
            let strbefore = '';
            let stack_num = new Array();
            let stack_mark = new Array();
            let box = new Array();
            let len_str = 0;
            let len_num = 0;
            let len_mark = 0;
            let result = 0;

            function submit( symbol ){
                //alert(symbol);
                strbefore += symbol;
                input_box.innerHTML = strbefore;
                //console.log(len_str);
            }//接收表达式

            function get_empty(){
                out_box.innerHTML = '';
                input_box.innerHTML = '';
                str.length = 0;
                strbefore = '';
                stack_num.length = 0;
                stack_mark.length = 0;
                len_str = 0;
                len_num = 0;
                len_mark = 0;
                result = 0;
                //alert(str[0]);   
            }
            
            function show(){
                // for(let i = 0;i<=str.length;i++){
                //     console.log(str[i]);
                // }//检查传过来的数组是否正确
                for(let i = 0,j = 0;i < strbefore.length;i++){
                    if(strbefore[i] == '+' || strbefore[i] == '-' || strbefore[i] == '*' || strbefore[i] == '/'){
                        str[j] = strbefore[i];
                        j++;
                    }
                    else{
                         let num = '';
                        let flag = 0;
                        for(let k = i;strbefore[k] != '+' && strbefore[k] != '-' && strbefore[k] != '*' && strbefore[k] != '/' && k < strbefore.length;k++){
                            num += strbefore[k];
                            flag++;
                            // console.log(num);
                        }
                        flag--;
                        i = i + flag;
                        str[j] = parseFloat(num);
                        j++;
                    }
                }
                //处理传来的字符换构成可以计算的数组表达式

                for(let i = 0;i<=str.length;i++){
                    if(str[i] == '+' || str[i] == '-' ){
                        stack_mark[len_mark] = str[i];
                        len_mark++;
                    }
                    else if(str[i] == '*' || str[i] == '/' ){
                        let a,b,c;
                        a = stack_num[stack_num.length - 1];
                        b = str[i+1];
                        if(str[i] == '*'){
                            c = a * b;
                            stack_num[len_num - 1] = c;
                            i++;
                        }
                        if(str[i] == '/'){
                            c = a / b;
                            stack_num[len_num - 1] = c;
                            i++;
                        }
                    }
                    else{
                        stack_num[len_num] = str[i];
                        len_num++;
                    }
                }
            
                for(let j = 0;j<stack_num.length;j++){
                    console.log(stack_num[j]);
                }

                for(let k = 0;k<stack_mark.length;k++){//???????
                    console.log(stack_mark[k]);
                }
                console.log(stack_mark.length);
                console.log(stack_num.length);
                stack_num.length--;
                console.log(stack_num.length);
                len_num = stack_num.length;
                console.log(len_num);
                
                for(let i = 0,j = 1;i<=len_mark-1;i++,j++){
                    if(stack_mark[i] == '+'){
                        var num1;
                        num1 = Number(stack_num[0]) + Number(stack_num[j]);
                        //stack_num.length = stack_num.length - 1;
                        stack_num[0] = num1;
                        //stack_mark.length = stack_mark.length - 1;
                    }
                    else if(stack_mark[i] == '-'){
                        var num2;
                        num2 = Number(stack_num[0]) - Number(stack_num[j]);
                        //stack_num.length = stack_num.length - 1;
                        stack_num[0] = num2;
                        //stack_mark.length = stack_mark.length - 1;
                    }
                   // console.log(len_num);
                }
                
                console.log(stack_num[0]);
                result = stack_num[0];
                out_box.innerHTML = result;//写在另一个函数中为啥不对?????
            }
            

