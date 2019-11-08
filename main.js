'use strict'
{
    // 要素の取得
    const addbutton = document.getElementById('addbutton');
    
    const statusbutton = document.getElementById('statusbutton');
   
    const deletebutton = document.getElementById('deletebutton');
   
    const all_radiobutton = document.getElementById('all_radiobutton');
   
    const working_radiobutton = document.getElementById('working_radiobutton');
    
    const complete_radiobutton = document.getElementById('complete_radiobutton');
    
    const td = document.querySelector('td');
    
    // ☆追加ボタンが押された際の処理
    addbutton.addEventListener('click', e => {
        e.preventDefault();
        // 入力された値（task）を取得
        const task = document.getElementById('task').value;
        
        
        // IDに０から始まるインデックス番号をつける
        // コメントに入力された値（task）を表示する
        const tasklists = [];
        tasklists.push(task);
        
        tasklists.forEach((tasklist,index) => {
            console.log(` ${index}:${tasklist}`);
            
        });
//        
//        for(let i = 0; i < tasklists.length; i ++) {
//            console.log(` ${i}:${tasklists[i]}:`)
//        }
        
        // ○tdタグを作成、追加する×2
        // tdタグのテキストに配列の値を代入する
        
        
        // 状態に作業中、削除ボタンを表示（初期非表示）
        // .hidden で非表示にしていたボタンを.hiddenをとって表示させる
        // ○tdタグを作成、追加する×1
    });
    
    // ☆ラジオボタンをチェックした際の処理
        // すべて にチェックを入れた時⇨作業中、完了のコメントを表示させる（デフォルト）
        
        // 作業中 ⇨作業中のコメントを表示させる
        // 完了 ⇨ 完了のコメントを表示させる
    
    // ☆statusbuttonを押した時の処理
        // ボタンの状態 作業中 の時⇨完了
        //              完了   の時⇨作業中
        
    
    // ☆削除ボタンを押した時の処理
        // 削除ボタンが押された行を削除する
    
    
    
    
    
    
    
    
    
    
}