const crypto = require('node:crypto');
class namify{
    constructor(){
        this.api = "https://be.namify.tech/api/v2"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async generate_name(prompt,page){
        let req=await fetch(`${this.api}/names`,{method:"POST",headers: this.headers,body:JSON.stringify({"search_prompt":prompt,"page":page,"session":crypto.randomBytes(20),"url":`https://namify.tech/${page}`})});
        return req.json();
    }
}
module.exports = {namify};