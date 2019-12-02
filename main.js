'use strict'
{
    // 要素の取得
    const addButton = document.getElementById('addbutton');
    const tbody = document.getElementById('tbody');
    const allRadiobutton = document.getElementById('all_radiobutton');
    const workingRadiobutton = document.getElementById('working_radiobutton');
    const completeRadiobutton = document.getElementById('complete_radiobutton');
    
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdComment = document.createElement('td');
    const statusButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    
    const tasklists = [];
    
    // todoリストのタスクを非表示にする処理
    function hidden () {
        tdId.classList.add('hidden');
        tdComment.classList.add('hidden');
        statusButton.classList.add('hidden');
        deleteButton.classList.add('hidden');
    }
    
    // todoリストのタスクを表示させる処理
    function removeHidden () {
        tdId.classList.remove('hidden');
        tdComment.classList.remove('hidden');
        statusButton.classList.remove('hidden');
        deleteButton.classList.remove('hidden');
    }

    // ☆追加ボタンが押された際の処理
    addButton.addEventListener('click', e => {
        e.preventDefault();
        
        // 入力された値（task）を取得、空の配列（tasklists）に追加
        const task = document.getElementById('task').value;
        tasklists.push(task);
        
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }  
        
        // 追加された値とインデックス番号を取り出し,出力する
        tasklists.forEach((toDo, index) => {
            

            tdId.textContent =` ${index}`;
            tdComment.textContent = `${toDo}`;
            statusButton.textContent = '作業中';
            deleteButton.textContent ='削除';

            tbody.appendChild(tdId);
            tbody.appendChild(tdComment);
            tbody.appendChild(statusButton);
            tbody.appendChild(deleteButton);
            tbody.appendChild(tr);
        });//tasklists.forEach((toDo
            
            // ☆作業中/完了ボタンを押した時の処理
            statusButton.addEventListener('click', e => {
                e.preventDefault();

                if (statusButton.textContent === '作業中') {
                    statusButton.textContent = '完了';

                } else if (statusButton.textContent === '完了') {
                    statusButton.textContent = '作業中';
                };
            });
            
            // ☆削除ボタンを押した時の処理
            deleteButton.addEventListener('click', () => {

                tdId.parentNode.removeChild(tdId);
                tdComment.parentNode.removeChild(tdComment);
                statusButton.parentNode.removeChild(statusButton);
                deleteButton.parentNode.removeChild(deleteButton);
            });
            
            

        
        
    });//addButton.addEventListener('click'

    // ☆すべてをチェックした時の処理
    allRadiobutton.addEventListener('change', () => {
        if (statusButton.textContent === '完了' || statusButton.textContent ==='作業中') {
            removeHidden();
        }
    });
    // ☆作業中をチェックした時の処理
    workingRadiobutton.addEventListener('change', () => {
        removeHidden();

        if (statusButton.textContent === '完了') {
            hidden();
        };
    });
    // ☆完了をチェックした時の処理
    completeRadiobutton.addEventListener('change', () => {
        removeHidden();

        if (statusButton.textContent === '作業中') {
            hidden();
        }
    });    
    
        
 
    
    
}