!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";class n{getAbi(){return[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_basePrice",type:"uint256"}],name:"setBasePrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBasePrice",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"_maxGrant",type:"uint256"}],name:"setMaxGrant",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_address",type:"address[]"}],name:"setHolderOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mintDoges",outputs:[],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"mintWithGrant",outputs:[],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"address",name:"_address",type:"address"},{internalType:"uint256",name:"target",type:"uint256"}],name:"getBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"allowGrant",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"mintedLength",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0}]}}class s{constructor(e){var{dialogContent:t,isCloseByMask:n,animationTarget:i,width:s,height:e}=e;this.content=null,this.mask=null,this.maskClassName=`dialog-mask-${(new Date).getTime()}`,this.dialogContent=t,this.animationTarget=i,this.isCloseByMask=n,this.width=s,this.height=e,this.dialogContent.style.opacity=0;var{top:i,left:n,width:s,height:e}=this.animationTarget.getBoundingClientRect();this.x=n+s/2,this.y=i+e/2,this.init()}init(){this.animation(),this.showContent(),this.showMask(),document.body.appendChild(this.content),this.content.appendChild(this.dialogContent),document.body.style.overflow="hidden"}showMask(){this.mask||(this.mask=document.createElement("div")),this.mask.className=this.maskClassName,this.mask.style.width="100%",this.mask.style.height="100%",this.mask.style.position="fixed",this.mask.style.top=0,this.mask.style.left=0,this.mask.style.zIndex=9999,this.mask.style.backgroundColor="rgba(0, 0, 0, 0)",this.mask.style.animation="showmaskani .2s .3s forwards",setTimeout(()=>{this.mask.style.backgroundColor="rgba(0, 0, 0, .45)"},500),document.body.appendChild(this.mask),this.mask.addEventListener("click",e=>{this.isCloseByMask&&e.target.className===this.maskClassName&&this.close()})}showContent(){this.content||(this.content=document.createElement("div")),this.content.style.width="0",this.content.style.height="0",this.content.style.position="fixed",this.content.style.top=`${this.y}px`,this.content.style.left=`${this.x}px`,this.content.style.zIndex=99999,this.content.style.borderRadius="2px",this.content.style.backgroundColor="#fff",this.content.style.overflow="hidden",this.content.style.boxShadow="0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)",this.content.style.animation="showcontentani .3s forwards",this.dialogContent.style.animation="showdialogcontentani .1s .2s forwards",setTimeout(()=>{this.dialogContent.style.opacity=1,this.content.style.width=`${this.width}`,this.content.style.height=`${this.height}`,this.content.style.top="50%",this.content.style.left="50%",this.content.style.transform="translate(-50%, -50%)"},300)}close(){this.mask&&(this.mask.style.animation="hiddenmaskani .2s forwards",setTimeout(()=>{document.body.removeChild(this.mask),this.mask=null},200)),this.content&&(this.content.style.animation="hiddencontentani .3s .2s forwards",this.dialogContent.style.animation="hiddendialogcontentani .1s .2s forwards",setTimeout(()=>{document.body.removeChild(this.content),this.content=null,document.body.style.overflow="auto",document.querySelector("head").removeChild(this.style),this.style=null},500))}animation(){var e=`
      background-color: rgba(0, 0, 0, .45);
    `,t=`
      background-color: rgba(0, 0, 0, 0);
    `,n=`
      width: 0;
      height: 0;
      top: ${this.y}px;
      left: ${this.x}px;
      transform: translate(0, 0);
    `,i=`
      width: ${this.width};
      height: ${this.height};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,n=`@keyframes showmaskani{
      from { ${t} }
      to { ${e} }
    }
    @keyframes hiddenmaskani{
      from { ${e} }
      to { ${t} }
    }
    @keyframes showcontentani{
      from { ${n} }
      to { ${i} }
    }
    @keyframes hiddencontentani{
      from { ${i} }
      to { ${n} }
    }
    @keyframes showdialogcontentani{
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes hiddendialogcontentani{
      from { opacity: 1; }
      to { opacity: 0; }
    }`;this.style=document.createElement("style"),this.style.innerHTML=n,document.querySelector("head").appendChild(this.style)}}var a=0,o=0,r=0,i=!0;const d=new class extends class{constructor(e,t,n){this.chainId=0,this.abi=e,this.hostUrl=t,this.contractAddress=n,this.init()}init(){this.isMetaMaskInstalled()&&(this.loadContract(),this.chainId=ethereum.chainId,this.currentAccount=ethereum.selectedAddress,ethereum.on("chainChanged",e=>{this.chainId=e,console.info(`new chainId ${e}`)}),ethereum.on("connect",e=>{this.chainId=e.chainId,console.info(`connect chainId: ${e.chainId}`)}),ethereum.on("accountsChanged",e=>{console.info("accountsChanged"),this.handleAccountChanged(e)}))}isMetaMaskInstalled(){return window.ethereum&&window.ethereum.isMetaMask||!1}isConnected(){return ethereum.isConnected()}getCurrentAddress(){return this.currentAccount?Promise.resolve(this.currentAccount):ethereum.request({method:"eth_accounts"}).then(e=>(this.handleAccountChanged(e[0]),Promise.resolve(this.currentAccount)))}changeUser(){return ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}handleAccountChanged(e){this.currentAccount=e[0],console.info(`current account ${this.currentAccount}`)}connectAccount(){return this.isConnected()||this.currentAccount?ethereum.request({method:"eth_requestAccounts"}).then(e=>(this.handleAccountChanged(e),Promise.resolve(this.currentAccount))):Promise.resolve(this.currentAccount)}loadContract(){this.web3=new Web3(new Web3.providers.HttpProvider(this.hostUrl)),this.instance=new this.web3.eth.Contract(this.abi,this.contractAddress)}}{constructor(e,t){super((new n).getAbi(),e,t)}mintDoges(e,t){e={nonce:"0x00",to:this.contractAddress,from:this.currentAccount,value:Web3.utils.toHex(Web3.utils.toWei(`${t}`,"ether")),data:this.instance.methods.mintDoges(e).encodeABI(),chainId:this.chainId};return ethereum.request({method:"eth_sendTransaction",params:[e]})}allowGrant(){return this.instance.methods.allowGrant().call({from:this.currentAccount})}gitMint(){var e={nonce:"0x00",to:this.contractAddress,from:this.currentAccount,value:Web3.utils.toHex(Web3.utils.toWei("0.0","ether")),data:this.instance.methods.mintWithGrant().encodeABI(),chainId:this.chainId};return ethereum.request({method:"eth_sendTransaction",params:[e]})}mintedLength(){return this.instance.methods.mintedLength().call()}isPaused(){return this.instance.methods.paused().call()}getBasePrice(){return this.instance.methods.getBasePrice().call()}}("https://mainnet.infura.io/v3/1c0c2c335c1d4fac8d1456ae3b56a74d","0x8def8f40058dc9e3ffad230d83404040cea0b2fa");function e(e){e=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(e);return null!=e?unescape(e[2]):null}function c(){d.mintedLength().then(e=>{document.querySelector(".bit")&&(Number(e[1])<10?(document.querySelector(".bit").innerHTML=Number(e[1]),document.querySelector(".ten").innerHTML=0,document.querySelector(".million").innerHTML=0):Number(e[1])<100?(document.querySelector(".bit").innerHTML=Number(e[1])%10,document.querySelector(".ten").innerHTML=parseInt(Number(e[1])/10),document.querySelector(".million").innerHTML=0):(document.querySelector(".bit").innerHTML=parseInt(Number(e[1])%10),document.querySelector(".ten").innerHTML=parseInt(Number(e[1])%100/10),document.querySelector(".million").innerHTML=parseInt(Number(e[1])/100)))})}function l(){d.getBasePrice().then(e=>{r=Web3.utils.fromWei(`${e}`),document.querySelector("#eachPrice")&&(document.querySelector("#eachPrice").innerHTML=r)}).catch(e=>{console.info(e)})}function u(e){let t=document.createElement("div");t.innerHTML=`
      <div class="dialog-content">
        <div class="mint-item">
          <div>Exchange</div>
          <div class="input-number">
            <div id="del" class="del disabled" disabled>-</div>
            <input id="number" class="number" min="1" max="100" type="number" pattern="[0-9]" value="1" onkeyup="this.value=this.value.replace(/\D/g,'')"></input>
            <div id="add" class="add">+</div>
          </div>
          <div>Lucky Doge</div>
        </div>
        <div class="mint-item">
          <div>Price</div>
          <div>
            <span class="price">${r}</span>
            <img src="./image/eth.png"></img>
            <span>/Lucky Doge</span>
          </div>
        </div>
        <div class="mint-item">
          <div>Total</div>
          <div>
            <span class="total">${r}</span>
            <img src="./image/eth.png"></img>
          </div>
        </div>
        <div class="mint-bottom">
          <img src="./image/mintnow.png" class="buy"></img>
        </div>
      </div>
    `;let i=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.18rem",height:"4.12rem"});document.querySelector(".del").addEventListener("click",function(){document.getElementById("number").value<=1?document.getElementById("del").setAttribute("class","del disabled"):(document.getElementById("number").value--,document.getElementById("del").setAttribute("class","del")),document.getElementById("add").setAttribute("class","add"),document.querySelector(".total").innerHTML=(r*document.getElementById("number").value).toFixed(2)}),document.querySelector(".add").addEventListener("click",function(){100<=document.getElementById("number").value?(document.getElementById("del").setAttribute("class","del"),document.getElementById("add").setAttribute("class","add disabled")):(document.getElementById("del").setAttribute("class","del"),document.getElementById("add").setAttribute("class","add"),document.getElementById("number").value++),document.querySelector(".total").innerHTML=(r*document.getElementById("number").value).toFixed(2)}),document.querySelector(".number").addEventListener("input",function(){document.querySelector(".total").innerHTML=(r*document.getElementById("number").value).toFixed(2)}),document.querySelector(".buy").addEventListener("click",function(n){if("0x1"!==d.chainId)alert("Please switch the network!"),i.close();else{a=document.getElementById("number").value;let t=document.querySelector(".total").innerHTML;o=parseInt(1e4*Math.random()),gtag("event","begin_checkout",{currency:"USD",items:[{item_id:o,currency:"USD",quantity:a}],value:t}),d.mintDoges(a,t).then(e=>{console.log(e),function(e){let t=document.createElement("div");t.innerHTML=`
    <div class="success-dialog">
      <img src="./image/success.png" class="bg"></img>
      <div class="warning">You get <span class="count"> 100 </span> Lucky Dog</div>
      <img src="./image/ok.png" class="btn" id="OKBtn"></img>
    </div>
  `;let n=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.16rem",height:"4.12rem"});document.querySelector(".count").innerHTML=a,document.querySelector("#OKBtn").addEventListener("click",function(e){n.close()})}(n),gtag("event","purchase",{currency:"USD",transaction_id:"T_12345",value:t,items:[{item_id:o,quantity:a}]})}).catch(e=>{!function(e){let t=document.createElement("div");t.innerHTML=`
    <div class="success-dialog">
      <img src="./image/mintfailed.png" class="bg"></img>
      <img src="./image/close.png" class="btn" id="errorBtn"></img>
    </div>
  `;let n=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.16rem",height:"4.14rem"});document.querySelector("#errorBtn").addEventListener("click",function(e){n.close()})}(n)}),i.close()}},!0)}function m(e){let t=document.createElement("div");t.innerHTML=`
    <div class="success-dialog">
      <img src="./image/nochance.png" class="bg"></img>
      <img src="./image/yes.png" class="btn" id="noChanceBtn"></img>
    </div>
  `;let n=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.18rem",height:"4.12rem"});document.querySelector("#noChanceBtn").addEventListener("click",function(e){n.close()})}"https://t.co/"===document.referrer?e("t")&&"twitter"===e("from")&&gtag("event","page_view",{page_title:`大V_Twitter_${e("t")}`,page_location:"https://luckydoge.club/",page_path:"/",send_to:"G-FFDWPLGK5N"}):e("t")&&"discord"===e("from")&&gtag("event","page_view",{page_title:`大V_Discord_${e("t")}`,page_location:"https://luckydoge.club/",page_path:"/",send_to:"G-FFDWPLGK5N"}),c(),l(),d.isMetaMaskInstalled()?d.connectAccount().then(t=>{if(t){let e=t;document.querySelector(".account").innerHTML=e.substring(0,6)+"..."+e.substring(e.length-6,e.length),document.getElementById("address")&&document.getElementById("address").setAttribute("class","money")}else document.getElementById("address")&&document.getElementById("address").setAttribute("class","money hidden")}):document.getElementById("address")&&document.getElementById("address").setAttribute("class","money hidden"),Array.from(document.querySelectorAll(".banner_mint")).map(e=>{e.addEventListener("click",function(t){i&&(i=!1,d.isMetaMaskInstalled()?d.currentAccount?d.isPaused().then(e=>e?(alert("No Sale"),!1):(l(),u(t),void(i=!0))).catch(e=>{console.info(e)}):(i=!0,function(e){let t=document.createElement("div");t.innerHTML=`
    <div class="noConnect-dialog">
      <img src="./image/noconnect.png" class="bg"></img>
      <img src="./image/connect.png" id="connect" class="connect"></img>
    </div>
  `;let i=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.16rem",height:"4.14rem"});document.querySelector("#connect").addEventListener("click",n=>{i.close(),d.connectAccount().then(t=>{if(t){let e=t;document.querySelector(".account").innerHTML=e.substring(0,6)+"..."+e.substring(e.length-6,e.length),document.getElementById("address").setAttribute("class","money")}else document.getElementById("address").setAttribute("class","money hidden");d.isPaused().then(e=>e?(alert("No Sale"),!1):void d.getBasePrice().then(e=>{r=Web3.utils.fromWei(`${e}`),u(n)}).catch(e=>{console.info(e)})).catch(e=>{console.info(e)})}).catch(e=>{document.getElementById("address").setAttribute("class","money hidden")})})}(t)):(i=!0,alert("Please install MetaMask"),console.info("Please install MetaMask")))})}),document.querySelector(".gift").addEventListener("click",function(t){d.isMetaMaskInstalled()?d.connectAccount().then(e=>{d.allowGrant().then(e=>{(e?function(e){let t=document.createElement("div");t.innerHTML=`
  <div class="success-dialog">
    <img src="./image/grantbg.png" class="bg"></img>
    <div class="warning warningText text1"><span class="giftcount"> 100 </span> Lucky Dog Left</div>
    <div class="warning warningText text2">Do you want to get a Lucky Dog ?</div>
    <img src="./image/yes.png" class="btn" id="giftGet"></img>
  </div>
  `;let n=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.18rem",height:"4.12rem"});document.querySelector("#giftGet").addEventListener("click",function(t){"0x1"!==d.chainId?(alert("Please switch the network!"),n.close()):d.gitMint(a).then(e=>{!function(e){let t=document.createElement("div");t.innerHTML=`
    <div class="success-dialog">
      <img src="./image/success.png" class="bg"></img>
      <div class="warning warningText">You get a Lucky Dog successfully！</div>
      <img src="./image/ok.png" class="btn" id="OKGetBtn"></img>
    </div>
  `;let n=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.16rem",height:"4.12rem"});document.querySelector("#OKGetBtn").addEventListener("click",function(e){n.close()})}(t),document.querySelector(".million")&&c()}).catch(e=>{console.log(e),function(e){let t=document.createElement("div");t.innerHTML=`
    <div class="success-dialog">
      <img src="./image/failed.png" class="bg"></img>
      <img src="./image/close.png" class="btn" id="failedBtn"></img>
    </div>
  `;let n=new s({dialogContent:t,isCloseByMask:!0,animationTarget:e.target,width:"6.16rem",height:"4.14rem"});document.querySelector("#failedBtn").addEventListener("click",function(e){n.close()})}(t)})})}:m)(t)}).catch(e=>{console.info(e),m(t)})}):(alert("Please install MetaMask"),console.info("Please install MetaMask"))})});
