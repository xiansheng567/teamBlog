document.addEventListener('DOMContentLoaded', () => {
    
    
    const txt = document.getElementById("comment-input-textarea");
    const btn = document.getElementById("submit-button");
    const commentsContainer = document.getElementById("comments-list");
    btn.onclick = function () {
        if (txt.value.trim() === "") {
            alert("您没有输入内容");
            return; // 如果没有输入，则直接返回
        }
        const now = new Date();

        // 获取年份
        const year = now.getFullYear();

        // 获取月份（注意：月份是从0开始的，所以要加1）
        const month = String(now.getMonth() + 1).padStart(2, '0');

        // 获取日期
        const day = String(now.getDate()).padStart(2, '0');

        // 格式化为字符串
        const formattedDate = `${year}年${month}月${day}日`;
        
        // 创建留言元素
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment"; // 添加class以便样式
        
        

        // 准备要添加的HTML结构
        commentDiv.innerHTML = `
            <div class="comment">
                <div class="comment-author">
                    <img src="../src/avatar/avatar.png" alt="avatar" class="avatar">
                    <span class="author-name">GreenWork</span>
                    
                </div>
                <div class="comment-text">
                    ${txt.value}
                </div>
                <div class="comment-actions">
                    <div class="comment-date">${formattedDate}</div>
                    <div class="comment-reaction">
                        <button class="reaction-icon">👍</button> <span class="reaction-count">0</span>
                    </div>
                    <a href="javascript:void(0)" class="comment-delete">删除</a>
                </div>
            </div>
            
        `;

        // 清空文本框
        txt.value = "";

        // 将新留言添加到页面顶部
        commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
        addReactionListeners();
    
        // 给删除链接绑定事件
        const deleteLink = commentDiv.querySelector(".comment-delete");
        deleteLink.onclick = function () {
            commentsContainer.removeChild(commentDiv);
        }
    }
    // const submitBtn = document.getElementById("submit-button");
    // const textArea = document.getElementById("comment-input-textarea");
    const txt1 = document.getElementById("comment-input-textarea");
    const btn1 = document.getElementById("submit-button");
    txt1.addEventListener("focus", function () {
        btn1.classList.add("inactives");
        btn1.classList.remove("actives");
    });
    txt1.addEventListener("blur", function () {
        if(txt1.value.trim() !== ""){
            btn1.classList.remove("actives");
            btn1.classList.add("inactives");
        }else if(txt1.value.trim() === ""){
            btn1.classList.remove("inactives");
            btn1.classList.add("actives");
        }else{
            btn1.classList.remove("inactives");
            btn1.classList.add("actives");
        }
    });
    function addReactionListeners() {
        const reactionButtons = document.querySelectorAll('.reaction-icon');
        reactionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const countSpan = button.nextElementSibling; // 获取对应数量的 span
                let count = parseInt(countSpan.textContent);
                count++;
                countSpan.textContent = count; // 更新计数
                
            });
        });
    }
    
    // 初始调用，给已有的按钮添加事件
    const commentReactions = document.querySelectorAll('.comment-reaction');
    
        commentReactions.forEach(reaction => {
            reaction.addEventListener('click', () => {
                // 获取当前计数值
                const countSpan = reaction.querySelector('.reaction-count');
                let count = parseInt(countSpan.textContent);
                
                // 计数器加一
                count++;
                countSpan.textContent = count; // 更新计数显示
                
                // 禁用点击事件
                button.setAttribute('data-clicked', 'true');
            });
        });



        const hiddenDiv = document.getElementById('hidden');
        const button = document.getElementById('btn');
        const contentDiv = document.getElementById('content');
        button.addEventListener('click', () => {
            if (hiddenDiv.classList.contains('active')) {
                button.textContent = '>';
                hiddenDiv.classList.remove('active'); // 移除 active 类以隐藏
                hiddenDiv.classList.add('inactive'); // 添加 inactive 类
                contentDiv.classList.add('inactive');
                contentDiv.classList.remove('active');
                button.classList.add("inactive");
                button.classList.remove("active");
            } else {
                button.textContent = '<';
                hiddenDiv.classList.add('active'); // 添加 active 类以显示
                hiddenDiv.classList.remove('inactive'); // 移除 inactive 类
                contentDiv.classList.add('active');
                contentDiv.classList.remove('inactive');
                button.classList.add("active");
                button.classList.remove("inactive");
            }
        });
        // const btn2 = document.querySelector('.article-btn');
        // const articleList = document.querySelector('.article-list');

        // btn2.addEventListener('mouseenter', function() {
        //     articleList.style.display = 'block'; // 鼠标进入时显示
        // });

        // button.addEventListener('mouseleave', function() {
        //     articleList.style.display = 'none'; // 鼠标离开时隐藏
        // });

});