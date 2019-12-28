window.onload = function() {
  let regionSelect = document.getElementById("region-select");
  let productSelect = document.getElementById("product-select");
  let tableDiv = document.getElementById("table-wrapper");
  let resetButton = document.getElementById("reset-button");
  resetTable();

  /* region-select的change事件 = function() {
    渲染新的表格(根据select选项获取数据)
} */
  resetButton.onclick = () => {
    return resetTable();
  };
  regionSelect.onchange = () => {
    return renderTable();
  };

  productSelect.onchange = () => {
    return renderTable();
  };

  //根据select的选项返回数据
  function getData() {
    let selectValue = regionSelect.options[regionSelect.selectedIndex].value;
    let productValue = productSelect.options[productSelect.selectedIndex].value;
    console.log(productValue);
    let arr = new Array();
    if (selectValue != "全部地区" && productValue == "全部商品") {
      for (let i = 0; i < sourceData.length; i++) {
        if (selectValue == sourceData[i].region) {
          arr.push(sourceData[i]);
        }
      }
    } else if (productValue != "全部商品" && selectValue == "全部地区") {
      for (let i = 0; i < sourceData.length; i++) {
        if (productValue == sourceData[i].product) {
          arr.push(sourceData[i]);
        }
      }
    } else if (productValue == "全部商品" && selectValue == "全部地区") {
      for (let i = 0; i < sourceData.length; i++) {
        arr.push(sourceData[i]);
      }
    } else {
      for (let i = 0; i < sourceData.length; i++) {
        if (
          selectValue == sourceData[i].region &&
          productValue == sourceData[i].product
        ) {
          arr.push(sourceData[i]);
        }
      }
    }
    console.log(arr);
    return arr;
  }
/*   重置表格 */
  function resetTable() {
    regionSelect.value="全部地区";
    productSelect.value="全部商品";
    clearTable();
    let table = document.createElement("table");
    let header = table.createTHead();
    let tr0 = header.insertRow(0);
    for (let i = 0; i < headTable.length; i++) {
      let th = tr0.insertCell(tr0.cells.length);
      th.innerHTML = headTable[i];
    }
    let arr=new Array();
    for (let i = 0; i < sourceData.length; i++) {
        arr.push(sourceData[i]);  
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let tr = table.insertRow(table.rows.length);
      let tdProduct = tr.insertCell(0);
      tdProduct.innerHTML = arr[i].product;
      let tdRegion = tr.insertCell(1);
      tdRegion.innerHTML = arr[i].region;
      for (let j = 0; j < 12; j++) {
        let td = tr.insertCell(j + 2);
        td.innerHTML = arr[i].sale[j];
      }
    }
    tableDiv.appendChild(table);
    let tableClass = tableDiv.getElementsByTagName("table")[0];
    tableClass.setAttribute("class", "table table-bordered");
  }

  //清除表格
  function clearTable() {
    let table = tableDiv.getElementsByTagName("table")[0];
    if (typeof table == "undefined")
      return console.log("第一次渲染时 之前没有table");
    table.remove();
  }
  /*  渲染表格 */
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
      let tdProduct = tr.insertCell(0);
      tdProduct.innerHTML = arr[i].product;
      let tdRegion = tr.insertCell(1);
      tdRegion.innerHTML = arr[i].region;
      for (let j = 0; j < 12; j++) {
        let td = tr.insertCell(j + 2);
        td.innerHTML = arr[i].sale[j];
      }
    }
    tableDiv.appendChild(table);
    let tableClass = tableDiv.getElementsByTagName("table")[0];
    tableClass.setAttribute("class", "table table-bordered");
  }
};
