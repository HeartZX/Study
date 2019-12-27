window.onload = function() {
  let regionSelect = document.getElementById("region-select");
  let tableDiv = document.getElementById("table-wrapper");

  /* region-select的change事件 = function() {
    渲染新的表格(根据select选项获取数据)
} */
  regionSelect.onchange = () => {
    return renderTable();
  };
  //根据select的选项返回数据
  function getData() {
    let selectValue = regionSelect.options[regionSelect.selectedIndex].value;
    let arr = new Array();
    for (let i = 0; i < sourceData.length; i++) {
      if (selectValue == sourceData[i].region) {
        arr.push(sourceData[i]);
      }
    }
    console.log(arr);
    return arr;
  }

  //清除表格
  function clearTable() {
    let table = tableDiv.getElementsByTagName("table")[0];
    if (typeof table == "undefined")
      return console.log("第一次渲染时 之前没有table");
    table.remove();
  }
  function renderTable() {
    clearTable();
    let table = document.createElement("table");
    let header = table.createTHead();
    let tr0 = header.insertRow(0);
    for (let i = 0; i < headTable.length; i++) {
      let th = tr0.insertCell(tr0.cells.length);
      th.innerHTML = headTable[i];
    }
    let arr = getData();
    for (let i = 0; i < arr.length; i++) {
      let tr = table.insertRow(table.rows.length);

      let td0 = tr.insertCell(0);
      td0.innerHTML = arr[i].product;

      let td1 = tr.insertCell(1);
      td1.innerHTML = arr[i].region;

      for (let j = 0; j < 12; j++) {
        let td = tr.insertCell(j + 2);
        td.innerHTML = arr[i].sale[j];
      }
    }
    tableDiv.appendChild(table);
    let tableClass = tableDiv.getElementsByTagName("table")[0];
    tableClass.setAttribute('class','table table-bordered');
  }
  /* function 渲染新的表格(data) {
    输出表头：商品、地区、1月、2月、…… 12月
    遍历数据 {
        输出每一行的表格HTML内容
    }
    把生成的HTML内容赋给table-wrapper
} */
};
