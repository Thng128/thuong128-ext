class classinfor{
    constructor(id,a,b){
        this.id = id;
        this.a = a;
        this.b = b;
    }
}
const arrayClass = [
    new classinfor("tbChat","n-as-scroll.nimo-scrollbar>.n-as-mrgh","Thông báo tặng quà(chat)"),
    new classinfor("tbShare","n-as-scroll.nimo-scrollbar>.chatroomShareComp-container.c3.n-fx-sc","Thông báo chia sẻ"),
    new classinfor("tbThangCap","n-as-scroll.nimo-scrollbar>.n-as-mrg-xs","Thông báo thăng cấp"),
    new classinfor("tbTangQua","nimo-gift-banner","Thông báo tặng quà(Nổi)"),
    new classinfor("tbVaoPhong","chat-room__enter_banner","Thông báo vào phòng"),
    new classinfor("tbChayMH","n-as-w100.n-as-abs.marquee-container","Thông báo chạy màn hình"),
    new classinfor("bnSuKien","nimo-room__activity","Banner Sự kiện")
];
function hideEffectWithClass(classid,classname){
    var st = `.${classname}{display:none;}`;
    var styless = document.createElement("Style");
    styless.type = "text/css";
    styless.innerText = st;
    styless.id = classid;
    document.head.appendChild(styless);
}
function HiddenMess(ARClass){
    for(let x of ARClass){
        hideEffectWithClass(x.id,x.a);
    }
}
function changeFSize(classname,size){
    var st = `${classname}{font-size:${size}px;}`;
    var styless = document.createElement("Style");
    styless.type = "text/css";
    styless.innerText = st;
    document.head.appendChild(styless);
}
function addCSS(){
    var st = `.dropdown-content_User{display: none;position: absolute;right: 0;min-width: 160px;z-index: 1;}
    .dropdown-content_User label:hover {background-color: #9B9B9B;cursor:pointer;}
    .dropdown_User:hover .dropdown-content_User {display: block;}
    .dropdown-content_User::after {content: "";position: absolute;top: -2%;right: 0;margin-right: 5px;border-width: 10px;border-style: solid;border-color: transparent transparent  #1e1e1e  transparent;
    `;

    var styless = document.createElement("Style");
    styless.type = "text/css";
    styless.innerText = st;
    document.head.appendChild(styless);

    var w3css  = document.createElement('link');
    w3css.rel  = 'stylesheet';
    w3css.type = 'text/css';
    w3css.href = 'https://www.w3schools.com/w3css/4/w3.css';
    w3css.media = 'all';
    document.head.appendChild(w3css);
    
    var fontAweSome  = document.createElement('link');
    fontAweSome.rel  = 'stylesheet';
    fontAweSome.type = 'text/css';
    fontAweSome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    fontAweSome.media = 'all';
    document.head.appendChild(fontAweSome);
}
function addblock(){   
    var x = document.querySelector(".n-fx0.n-fx-bc.n-as-padh-md.nimo-menu.nimo-menu-horizontal");
/**Tạo nút*/
    var li = document.createElement("li");
    li.classList.add("nimo-menu-item");

    var span = document.createElement("span");

    var img = document.createElement("img");
    img.src = "https://img.nimo.tv/o/gift/981B9925CF1EDB044B319A345C49EB4D_c56a7e7e54e047e4c5e9b2339f5bf3e1.png/w70_l0/img.png";
    img.style.width = "25px";
    img.style.height = "25px";
    img.style.filter = "grayscale(1)";

    var icon = document.createElement("I");
    icon.classList.add("fa","fa-cog","w3-spin");
    
    var i = document.createElement("I");
    i.classList.add();
    i.classList.add("nimo-icon","c-hover1","c3","n-as-pointer","dropdown_User");

    var div = document.createElement("DIV");
    div.classList.add("dropbtn_User");
/**End tạo nút */
/**Tạo nút setting */

/**end Tạo nút setting */
/**tạo popup */
    var div2 = document.createElement("DIV");
    div2.classList.add("dropdown-content_User");

    var div3 = document.createElement("DIV");
    div3.style.marginTop = "13px";
    div3.style.boxShadow = "0 5px 30px #000";
    div3.style.backgroundColor = "#1e1e1e";
    div3.style.width = '350px';
    div3.style.borderRadius = "5px";
    div3.style.marginRight = "-40px";
/**End tạo popup*/
    setTimeout(function(){
        if(x!=null){
            x.appendChild(li);
            li.appendChild(span);
            span.appendChild(i);
            i.appendChild(div);
            div.appendChild(icon);
            div.appendChild(div2);
            div2.appendChild(div3);
            for(let a of arrayClass){
                var label = document.createElement("label");
                label.style.textAlign = "left";
                label.style.marginLeft = "10px";
                label.style.marginTop = "5px";
                label.style.marginBottom = "5px";
                label.style.marginRight = "10px";
                label.style.borderRadius = "5px";
                label.style.marginLeft = "10px";
                label.style.display = "block";
                label.style.cursor= "pointer";
                label.innerText +=a.b;

                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.classList = "w3-check";
                checkbox.style.float = "left";
                checkbox.addEventListener("change",function(){
                    if (this.checked == true){
                        changeDisplay(a.id,'none','flex');
                      } else{
                        changeDisplay(a.id,'flex','none');
                      }
                })
                checkbox.id = a.a;

                div3.appendChild(label);
                label.appendChild(checkbox);
            }
        }
        else{addblock();}
    },1000);
}
function changeDisplay(classname,change1,change2){
    var x = document.querySelector(`Style#${classname}`)
    x.innerText = x.innerText.replace(change1,change2);
}

addCSS();
addblock();
HiddenMess(arrayClass);