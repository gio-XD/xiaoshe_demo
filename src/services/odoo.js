import request from '../utils/request'
import HOST from '../configs/host'

 function Odoo (opts){
    this.HOST = HOST.host
    if(opts && opts.hostname){
        this.HOST = opts.hostname
    }
}

Odoo.prototype.post = function (path,data){
    var host = this.HOST
    var url = host + path
    
    return request(url,{
        method:'POST',
        body:data
    })
}

Odoo.prototype.get = function (path){
    var host = this.HOST
    var url = host + path
    return request(url,{})
}

Odoo.prototype.queryInfo =  function(data){
    return this.post("queryinfo",data);
}

Odoo.prototype.odoofuntion = function(url,data){
    return this.post(url,data);
  }

  export default new Odoo()






