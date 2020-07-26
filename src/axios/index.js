import JsonP from "jsonp";
import axios from "axios";
import { Modal } from "antd";
import Utils from './../utils/utils'

export default class Axios {
  static requestList(_this, url, method, params, isMock) {
    var data = {
      params: params,
      isMock,
    };
    this.ajax({
      url,
      method,
      data,
    }).then((data) => {
      if (data && data.result) {
        console.log(' data.result: ',  data.result);
        let list = data.result.item_list.map((item, index) => {
          item.key = index;
          return item;
        });
        console.log('list', list)
        _this.setState({
          list,
          pagination: Utils.pagination(data, (current) => {
            _this.params.page = current;
            _this.requestList();
          }),
        });
      }
    });
  }
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: "callback",
        },
        function (err, response) {
          if (response.status == "success") {
            resolve(response);
          } else {
            reject(response.messsage);
          }
        }
      );
    });
  }
  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    let baseApi = "";
    if (options.isMock) {
      baseApi = "/mock/api";
    } else {
      baseApi = "http://47.112.4.30:10499/api";
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method || "get",
        baseURL: baseApi,
        timeout: 5000,
        data:  options.data, 
        params: (options.data && options.data.params) || "",
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById("ajaxLoading");
          loading.style.display = "none";
        }
        if (response.status === 200) {
          let data = response.data;
          if (data.code === 0) {
            resolve(data.data);
          } else {
            Modal.info({
              title: "提示",
              content: data.msg,
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
