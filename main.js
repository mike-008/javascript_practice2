'use strict'
{
    // 要素の取得
    const ADDBUTTON = document.getElementById('addbutton');
    const TBODY = document.getElementById('tbody');
    
    const TASKLISTS = [];
    
    // ☆追加ボタンが押された際の処理
    ADDBUTTON.addEventListener('click', e => {
        e.preventDefault();
        
        // 入力された値（task）を取得、空の配列（TASKLISTS）に追加
        const TASK = document.getElementById('task').value;
        TASKLISTS.push(TASK);
        
        while (TBODY.firstChild) {
            TBODY.removeChild(TBODY.firstChild);
        }  
        
        // 追加された値とインデックス番号を取り出し,出力する
        TASKLISTS.forEach((toDo, index) => {
            const TR = document.createElement('tr');
            const TDID = document.createElement('td');
            const TDCOMMENT = document.createElement('td');
            const STATUSBUTTON = document.createElement('button');
            const DELETEBUTTON = document.createElement('button');

            TDID.textContent =` ${index}`;
            TDCOMMENT.textContent = `${toDo}`;
            STATUSBUTTON.textContent = '作業中';
            DELETEBUTTON.textContent ='削除';

            TBODY.appendChild(TDID);
            TBODY.appendChild(TDCOMMENT);
            TBODY.appendChild(STATUSBUTTON);
            TBODY.appendChild(DELETEBUTTON);
            TBODY.appendChild(TR);
            
            // ☆作業中/完了ボタンを押した時の処理
            STATUSBUTTON.addEventListener('click', e => {
                e.preventDefault();

                if (STATUSBUTTON.textContent === '作業中') {
                    STATUSBUTTON.textContent = '完了';

                } else if (STATUSBUTTON.textContent === '完了') {
                    STATUSBUTTON.textContent = '作業中';
                };
            });
            
            // ☆削除ボタンを押した時の処理
            DELETEBUTTON.addEventListener('click', () => {

                TDID.parentNode.removeChild(TDID);
                TDCOMMENT.parentNode.removeChild(TDCOMMENT);
                STATUSBUTTON.parentNode.removeChild(STATUSBUTTON);
                DELETEBUTTON.parentNode.removeChild(DELETEBUTTON);
            });
            
            // ☆ラジオボタンをチェックした時の処理
            const ALL_RADIOBUTTON = document.getElementById('all_radiobutton');
            const WORKING_RADIOBUTTON = document.getElementById('working_radiobutton');
            const COMPLETE_RADIOBUTTON = document.getElementById('complete_radiobutton');

            function hidden () {
                TDID.classList.add('hidden');
                TDCOMMENT.classList.add('hidden');
                STATUSBUTTON.classList.add('hidden');
                DELETEBUTTON.classList.add('hidden');
            }
            
            function removeHidden () {
                TDID.classList.remove('hidden');
                TDCOMMENT.classList.remove('hidden');
                STATUSBUTTON.classList.remove('hidden');
                DELETEBUTTON.classList.remove('hidden');
            }
            // ☆すべてをチェックした時の処理
            ALL_RADIOBUTTON.addEventListener('change', () => {
                if (STATUSBUTTON.textContent === '完了' || STATUSBUTTON.textContent ==='作業中') {
                    removeHidden();
                }
            });
            // ☆作業中をチェックした時の処理
            WORKING_RADIOBUTTON.addEventListener('change', () => {
                removeHidden();

                if (STATUSBUTTON.textContent === '完了') {
                    hidden();
                };
            });
            // ☆完了をチェックした時の処理
            COMPLETE_RADIOBUTTON.addEventListener('change', () => {
                removeHidden();

                if (STATUSBUTTON.textContent === '作業中') {
                    hidden();
                }
            });

        });//TASKLISTS.forEach((toDo
        
    });//ADDBUTTON.addEventListener('click'

    
    
        
 
    
    
}