window.onload = function() {
  let regionWrapper = document.getElementById("region-radio-wrapper");
  let productWrapper = document.getElementById("product-radio-wrapper");

  function checkBoxGroup(checkBoxName, checkBoxData) {
    /*  生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all" */
    let checkAll = document.createElement("input");
    let textAll = document.createTextNode("全选");
    checkAll.setAttribute("type", "checkbox");
    checkAll.setAttribute("checkbox-type", "all");
    checkBoxName.appendChild(checkAll);
    checkBoxName.appendChild(textAll);
    /*   遍历参数对象 {
        生成各个子选项checkbox的html，给一个自定义属性表示为子选项
    } */
    for (let i = 0; i < checkBoxData.length; i++) {
      let checkSingle = document.createElement("input");
      let textSingle = document.createTextNode(checkBoxData[i].text);
      checkSingle.setAttribute("type", "checkbox");

      checkBoxName.appendChild(checkSingle);
      checkBoxName.appendChild(textSingle);
    }
    checkBoxName.onclick = function(event) {
      let target = event.target;
      console.log(target.checked);
      if (target.getAttribute("type") == "checkbox") {
        console.log("checkbox");
        let len = checkBoxName.childNodes.length;
        console.log(len);
        let checkBoxType = target.getAttribute("checkbox-type");
        if (checkBoxType == "all") {
          if (target.checked == true) {
            for (let i = 2; i < len; i++) {
              if (checkBoxName.childNodes[i].tagName == "INPUT") {
                checkBoxName.childNodes[i].checked = true;
              }
            }
          } else {
            for (let i = 2; i < len; i++) {
              if (checkBoxName.childNodes[i].tagName == "INPUT") {
                checkBoxName.childNodes[i].checked = false;
              }
            }
          }
        }
      }
    };
  }

  checkBoxGroup(regionWrapper, [
    {
      value: 1,
      text: "华东"
    },
    {
      value: 2,
      text: "华北"
    },
    {
      value: 3,
      text: "华南"
    }
  ]);
  checkBoxGroup(productWrapper, [
    {
      value: 1,
      text: "手机"
    },
    {
      value: 2,
      text: "笔记本"
    },
    {
      value: 3,
      text: "智能音箱"
    }
  ]);
};
