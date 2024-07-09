# namify
JavaScript library for namify.tech
# main
```js
async function main(){
    const {namify} = require('./namify');
    const name= new namify();
    let req=await name.generate_name("France","cocktail-name-generator")
    console.log(req)
}
main()
```
