function makeDate(){
    let regionArr=makeRegionArr();
        productArr=makeProductArr();
        result=[];
    if(regionArr.length==0&&productArr.length==0){
        return false;
    }
    if(regionArr.length==0||productArr.length==0){
      for(let i=0;i<sourceData.length;i++){
        if(productArr.indexOf(sourceData[i].product)!=-1||regionArr.indexOf(sourceData[i].region)!=-1){
               result.push(sourceData[i]);
           }
      }
    }else{
      for(let i=0;i<sourceData.length;i++){
        if(regionArr.indexOf(sourceData[i].region)!=-1&&
           productArr.indexOf(sourceData[i].product)!=-1){
               result.push(sourceData[i]);
           }
      }
    }
   return result;
}
function makeRegionArr(){
    let checkNode=regionDiv.getElementsByTagName("input");
        arr=[];
    optionArr(checkNode,arr);
    return arr;    
}
function makeProductArr(){
    let  checkNode=productDiv.getElementsByTagName("input");
         arr=[];
    optionArr(checkNode,arr);
    return arr;    
}
function optionArr(arr1,arr2){
    for(let i=1;i<arr1.length;i++){
        if(arr1[i].checked){
            arr2.push(arr1[i].value);
        }
    }
}
function tableJudge(){
    let regionArr=makeRegionArr();
        productArr=makeProductArr();
        if(regionArr.length==1&&productArr.length>1){
            return true;
        }else if(productArr.length==0){
            return true;
        } else{return false;}
}

function objToArr(obj){
    let arr=[];
    if(tableJudge()){
        arr.push(obj.region);
        arr.push(obj.product);
    }else{
        arr.push(obj.product);
        arr.push(obj.region);
    }
    for(let i=0;i<12;i++){
        arr.push(obj.sale[i]);
    }
    return arr;
}

function makeTable(data){
    let table=document.createElement("table");
        arrData=[];
    for(let i=0;i<data.length;i++){
        arrData.push(objToArr(data[i]));
    }
    arrData.sort();
    if(tableJudge()){
        var tableHear=["地区","商品","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",];
    }else{
        var tableHear=["商品","地区","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",]
    }
    arrData.unshift(tableHear);
    for(let i=0;i<arrData.length;i++){
        let tr=document.createElement("tr");
            row=1;
        for(let j=0;j<arrData[i].length;j++){
            if(i==0){
                var cell=document.createElement("th"); 
             }else{
                var cell=document.createElement("td"); 
            }
           if(j==0&&i>0){   //合并单元格 
                 let y=i-1;
                if(arrData[i][j]==arrData[y][j]){
                         continue;  
                }
                for(let x=i+1;x<arrData.length;x++){
                    if(arrData[i][j]==arrData[x][j]){
                        row++;
                    }
                }
                cell.rowSpan=row;
            }
            cell.innerHTML=arrData[i][j];
            tr.append(cell);
        }
        table.append(tr);
    }
  return table;
}