const commentBtn = document.querySelector("#commentFrm");
const list = [];

function Comment(content){
    this.userid = "cloudcoke";
    this.content =content;
    this.date = "2022-11-15";
}

function commentBtnHandler(e) {
    e.preventDefault(); //input하면 창이 새로고침됨 그걸 막고자 preventDefault()이용해서 submit 버튼의 기본 동작을 막아줌
    const input = e.target.content;
    if (input.value === ""){
       alert("내용을 넣고 등록 버튼을 눌러주세요"); 
       return;         
    }
    const commentObj = new Comment(input.value);
    list.push(commentObj); //() 안에는 input에 값을 넣고 submit을 누르면 이벤트 객체가 생성되는데 그중에 하나임(value 값으로 존재한다.) //입력된 값을 list에 push를 사용해 담아준다.
    e.target.reset();
}

commentBtn.addEventListener("submit", commentBtnHandler);


const commentList = document.querySelector("#comment-list");

function createRow() {
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);

    ul.setAttribute("class", "comment-row");
    li1.setAttribute("class", "comment-id");
    li2.setAttribute("class", "comment-content");
    li3.setAttribute("class", "comment-date");

    li1.innerHTML = userid;
    li2.innerHTML = content;
    li3.innerHTML = date;


    return ul;
}