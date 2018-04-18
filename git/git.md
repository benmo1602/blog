# git 命令  
<!-- TOC -->

- [git 命令](#git-%E5%91%BD%E4%BB%A4)
    - [git术语](#git%E6%9C%AF%E8%AF%AD)
            - [仓库（Repository）](#%E4%BB%93%E5%BA%93%EF%BC%88repository%EF%BC%89)
            - [分支（Branches）](#%E5%88%86%E6%94%AF%EF%BC%88branches%EF%BC%89)
            - [标记（Tags）](#%E6%A0%87%E8%AE%B0%EF%BC%88tags%EF%BC%89)
            - [提交（Commit）](#%E6%8F%90%E4%BA%A4%EF%BC%88commit%EF%BC%89)
            - [修订（Revision）](#%E4%BF%AE%E8%AE%A2%EF%BC%88revision%EF%BC%89)
            - [全局设置git账号](#%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AEgit%E8%B4%A6%E5%8F%B7)
            - [git提交远端库](#git%E6%8F%90%E4%BA%A4%E8%BF%9C%E7%AB%AF%E5%BA%93)
            - [版本 回退](#%E7%89%88%E6%9C%AC-%E5%9B%9E%E9%80%80)
            - [删除文件](#%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6)
            - [首次远端推送](#%E9%A6%96%E6%AC%A1%E8%BF%9C%E7%AB%AF%E6%8E%A8%E9%80%81)
            - [首次拉代码](#%E9%A6%96%E6%AC%A1%E6%8B%89%E4%BB%A3%E7%A0%81)
    - [分支 管理  branch](#%E5%88%86%E6%94%AF-%E7%AE%A1%E7%90%86-branch)
            - [](#)
            - [远端库信息](#%E8%BF%9C%E7%AB%AF%E5%BA%93%E4%BF%A1%E6%81%AF)
    - [冲突解决](#%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3)
    - [标签](#%E6%A0%87%E7%AD%BE)
    - [.gitgonore](#gitgonore)
    - [简化git命令](#%E7%AE%80%E5%8C%96git%E5%91%BD%E4%BB%A4)

<!-- /TOC -->
    Workspace: 工作区，执行git add *命令就把改动提交到了暂存区，执行git pull命令将远程仓库的数据拉到当前分支并合并，执行git checkout [branch-name]切换分支
    Index: 暂存区，执行git -m '说明' 命令就把改动提交到了仓库区（当前分支）
    Repository: 仓库区（或本地仓库），执行git push origin master提交到远程仓库，执行git clone 地址将克隆远程仓库到本地
    Remote: 远程仓库，就是类似github，coding等网站所提供的仓库
注：实际操作命令和上述命令会有所不同，这里这是解释清楚命令和仓库的关系。
## git术语
   #### 仓库（Repository）
    	一个仓库包括了所有的版本信息、所有的分支和标记信息。在Git中仓库的每份拷贝都是完整的。仓库让你可以从中取得你的工作副本。
   #### 分支（Branches）	
    一个分支意味着一个独立的、拥有自己历史信息的代码线（code line）。你可以从已有的代码中生成一个新的分支，这个分支与剩余的分支完全独立。默认的分支往往是叫master。用户可以选择一个分支，选择一个分支执行命令git checkout branch.
   #### 标记（Tags）	
   一个标记指的是某个分支某个特定时间点的状态。通过标记，可以很方便的切换到标记时的状态，例如2009年1月25号在testing分支上的代码状态
   #### 提交（Commit）	
    提交代码后，仓库会创建一个新的版本。这个版本可以在后续被重新获得。每次提交都包括作者和提交者，作者和提交者可以是不同的人
   #### 修订（Revision）	
    用来表示代码的一个版本状态。Git通过用SHA1 hash算法表示的id来标识不同的版本。每一个 SHA1 id都是160位长，16进制标识的字符串.。最新的版本可以通过HEAD来获取。之前的版本可以通过"HEAD~1"来获取，以此类推。

#### 全局设置git账号
    // 学习 总结 

    `git config --global user.name "Your Name"
     git config --global user.email "email@example.com" `

    // 注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。
#### git提交远端库
    git init  // 命令把这个目录变成Git可以管理的仓库

    git add   //把文件添加进去，实际上就是把文件修改添加到暂存区
   
    git status
   
    git commit -m "描述" //提交更改，实际上就是把暂存区的所有内容提交到当前分支


    git push // 暂存区内容提交到远端服务器

#### 版本 回退
    git reset --hard HEAD^  // head 指向单前 版本

    git log  // 查看提交历史
    git reflog // 查看命令历史

#### 删除文件
    git rm test.txt // 删除 test.txt  文件

    git commit -m "remove test.txt"

    git checkout -- test.txt
        // 删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本
        // git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。
   
#### 首次远端推送
    git push -u origin master
        //使用命令git push -u origin master第一次推送master分支的所有内容;此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改;

   #### 首次拉代码 
    git clone '项目git地址 https开头'

## 分支 管理  branch 
    // 创建分支 dev 
    git branch dev 

    // 跳转到 分支 dev 
    git checkout dev 

    // 创建并切换  一步到位 
    git checkout -b dev

    // 查看当前分支 
    git branch 

    // 切换 分支  切换之前确认 把修改内容提交到暂存区 
    git checkout master

    // 合并 dev 分支 到当前 分支
    git merge dev
        //Fast-forward信息，Git告诉我们，这次合并是“快进模式”，也就是直接把master指向dev的当前提交，所以合并速度非常快。当然，也不是每次合并都能Fast-forward，我们后面会讲其他方式的合并

    // 合并完成后 删除 dev 分支 
    git branch -d dev

    // 删除后 可以查看 下 分支 是否删除 
    git branch

   #### 
    查看分支：git branch

    创建分支：git branch <name>

    切换分支：git checkout <name>

    创建+切换分支：git checkout -b <name>

    合并某分支到当前分支：git merge <name>

    删除分支：git branch -d <name>

        git branch -D <name>强行删除

#### 远端库信息 
    查看远程库信息，使用git remote -v；

    本地新建的分支如果不推送到远程，对其他人就是不可见的；

    从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；

    在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

    建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；

    从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。
## 冲突解决 
    廖雪峰老师说: '人生不如意之事十之八九，合并分支往往也不是一帆风顺的'
    必须手动解决冲突后再提交。git status也可以告诉我们冲突的文件
    Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容
    1.要保留服务器上的修改
        git stash
        git stash list  // 将当前的Git栈信息打印出来 会有一个stash@{0} 的保存标记
        git pull 
        git stash pop stash@{0}  // 还原暂存的内容
        打开 冲突 文件 手动解决 冲突 
        git stash drop stash@{0} // 删除 刚刚存的编号为0的 stash 
        git stash clear  //期初所有的 satsh
    2. 如果希望服务器上版本完全覆盖本地修改，使用如下命令回退并更新
        git reset --hard 
        git pull 
        
    
## 标签
    git tag <name> 用于新建一个标签，默认为HEAD，也可以指定一个commit id；

    git tag -a <tagname> -m "blablabla..." 可以指定标签信息；

    git tag -s <tagname> -m "blablabla..." 可以用PGP签名标签；

    git tag 可以查看所有标签。

    git push origin <tagname> 可以推送一个本地标签；

    git push origin --tags 可以推送全部未推送过的本地标签；

    git tag -d <tagname> 可以删除一个本地标签；

    git push origin :refs/tags/<tagname> 可以删除一个远程标签。
## .gitgonore  
    .gitignore 
    //忽略某些文件时，需要编写.gitignore;.gitignore文件本身要放到版本库里，并且可以对.gitignore做版本管理！
    
    忽略某文件
    npm-debug.log
    忽略文件夹
    dist/
    node_modules/
    .idea/
    
## 简化git命令
    git config --global alias.st status
    // st 代替status

    $ cat .gitconfig
    [alias]
        co = checkout
        ci = commit
        br = branch
        st = status
    [user]
        name = Your Name
        email = your@email.com

 git 教程 https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
git 指令 http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html