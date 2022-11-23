# Git

소스 현상관리 툴

SVN, Git

프로젝트 단위(폴더)에서 여러가지 버전을 넣는 행위

## git 설치

```bash
$ git --version
git version 2.34.1
```

## git 업데이트

```bash
$ sudo apt update
$ sudo add-apt-repository ppa:git-core/ppa -y
$ sudo apt update
$ sudo apt install git -y
```

## 기본설정

```bash
$ git --version

# 설정
$ git config --global user.name "cloudcoke"
$ git config --global user.email "lms4296@gmail.com"

# 확인
$ git config --global user.name
$ git config --global user.eamil

# linux or window
# enter의 형태가 os마다 다르기 때문에 호환처리
$ git config --global core.autocrlf true

# 확인
$ git config --global core.autocrlf
```

## workspace 정의

- 디렉토리 생성

```bash
mkdir /home/cloudcoke/my/gittest
```

```bash
$ cd /home/cloudcoke/my/gittest
$ code .
```

## if not code command in window

`ctrl` + `shift` + `p`

Shell Command: install 'code' command in PATH

## git 사용전 예제파일들

development.json

```json
{
  "username": "root",
  "password": "root",
  "database": "board_dev",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

test.json

```json
{
  "username": "root",
  "password": "root",
  "database": "board_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

production.json

```json
{
  "username": "root",
  "password": "root",
  "database": "board",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

JSON(Javascrpt Object Notaion)
JS 객체 리터럴 방식

## git 설명

```bash
$ git init # .git 폴더라는 것을 생성
$ ls -al
```

## .git

버번별로 저장하는 히스토리들이 모두다 저장됨

.git이 삭제되면히스토리들이 모두 삭제됨

```bash
git status
```

.git 디렉터리와 같은 위치에서만 사용이 가능함

.git의 상태를 알려주는 것

파일이 변화되는 과정을 저장하고 있음

관리하고 싶지 않은 폴더나 파일이 있다면

## .gitignore

.git 폴더가 추적하지 않았으면 하는 파일이나 폴더를 적어준다

처음에 `git status`를 쳤을때

```bash
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        development.json
        production.json
        test.json

nothing added to commit but untracked files present (use "git add" to track)
```

관리하고 싶지 않은 폴더나 파일이 존재

.git이 있는 디렉토리에서 .gitignore 파일을 생성해주고

그 파일안에 관리하고 싶지 않은 파일명을 작성해주면 됨

그리고나서 다시

```bash
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json
        test.json

nothing added to commit but untracked files present (use "git add" to track)
```

.gitignore

```bash
# 모든 js 파일
*.js

# package-lock.json 이라는 이름을 가진 모든 파일
package-lock.json

# node_modules 라는 폴더와 그 안에 있는 모든 파일들
node_modules/
```

```bash
$ mkdir node_modules
$ cd node_modules
$ touch 1.js 2.js

$ cd ..
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json
        node_modules/
        test.json

nothing added to commit but untracked files present (use "git add" to track)

$ cat >> .gitignore
node_modules/

$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json
        test.json

nothing added to commit but untracked files present (use "git add" to track)
```

## GIT 작업 순서도 (중요)

깃은 3가지 공간으로 관리가 됨

### working directory (작업폴더)

코드를 작업하고 있는 공간 (작업폴더)
`git`에 의해 관리되고 있는 상태
나의 작업폴더 안에서는 하나의 파일 당 2가지의 상태로 표현됨

<!-- 추적이 되는 친구들과 안되는 친구들로 구분이 됨 -->

- Tracked(추적)
  - 한 번이라도 .git에 의해 관리된 적이 있는 파일
- Untracked(추적되지 않음)
  - 한 번이라도 .git에 의해 관리된 적이 없는 파일

대기소로 이동하는 방법

```bash
$ git add [파일명]
# 또는
$ git add . # 현재 위치의 모든 파일을 넘기겠다
```

### staging area (대기소)

```bash
# 문법: git add [파일명] | [명령어]
$ git add development.json
$ git status

On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   development.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        test.json
```

이 `staging area`는 `.git`에 저장하기 전에 중간다리 역할

단순히 대기소의 역할만 하기때문에 큰 의미를 두지 않음

내가 어떤 파일을 repository에 저장할 건지 선택을 하라는 의미

내가 선택한 파일만 저장소에 저장할거다라는 의미

클립보드 느낌

저장, 기록 (commit) - 저장소에 확실하게 저장하겠다

`gita dd`를 진행한 파일은 `visual studio code`에서도 변화가 있음 => A : add, U : untracked

**add 내용 취소하기**

```bash
$ git rm --cached [파일명]
$ git rm --cached development.json
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json
        test.json

nothing added to commit but untracked files present (use "git add" to track)

# $ git restore --staged [파일명]
# $ git restore --staged development.json
```

**한번에 add 하기**

```bash
$ git add .
$ git status

On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   development.json
        new file:   test.json
```

### repository (.git))[저장소]

.git 폴더

기록하는 일만 남은 상태

commit

최초의 커밋

```bash
# git commit
```

```bash
$ git commit
# 에디터가 뜨면 첫 줄에 initial commit이라 적고 저장

[master (root-commit) 2693cb4] initial commit
 3 files changed, 16 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 development.json
 create mode 100644 test.json

 # 에디터 안들어가고 사용
 $ git commit -m "커밋메시지"
```

커밋한 내용을 보기

```bash
$ git log

# 에디터 화면
commit 2693cb4a6cb9a4cfe1bb767f7026bcd1c80e2fa4 (HEAD -> master)
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 12:02:23 2022 +0900

    initial commit
```

보기 힘듬
그래서 vscode 학장프로그램
git graph 설치

1 commit 1 동그라미

왼쪽에서 원 세개(소스 제어)누르면 탭이 켜지고 거기서 4번째 아이콘 누르면 됨

## 커밋을 여러번 만들자

test.json

```json
{
  "username": "root",
  "password": "root",
  "database": "git_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

```bash
$ git status

On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.json

no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
$ git add.

On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   test.json

$ git commit -m "fix: test.json 데이터베이스 내용 수정"
[master c591b92] fix: test.json 데이터베이스 내용 수정
 1 file changed, 1 insertion(+), 1 deletion(-)

 $ git status
 On branch master
nothing to commit, working tree clean

```

commit convention

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 스타일 변경
- design: UI 변경
- test: test 코드 작성, test코드에 대한 리팩토링
- refactor: 실제 코드에 대한 리팩토리
- rename: 파일명 수정
- remove: 파일 삭제

50글자 내외? 70글자 내외?

저장소에 2개가 들어갔음

```bash
$ git checkout [commit Hash] # 업데이트 되면서 switch로 명령어가 바뀜

$ git checkout 2693cb4a6cb9a4cfe1bb767f7026bcd1c80e2fa4
```

test.json

```json
{
  "username": "root",
  "password": "root",
  "database": "board_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

해당하는 commit 부분으로 잠깐 바꿔줌

### HEAD

description에 동그라미가 생기면 그 부분을 보고 있다?
head값이 저기에 있다

```bash
$ git switch master
```

```json
{
  "username": "root",
  "password": "root",
  "database": "git_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

5개 이상의 커밋(동그라미)을 만들어보도록 하겠습니다.

작업 내용

모든 파일 내용에서 보안상 root 계정은 쓰는게 안 좋기 때문에

계정을 바꿀 겁니다. root => ingoo

test.json

tset.json 파일에서 password 속성의 값을 빈칸으로 만들 겁니다.

그리고 마지막으로 setting.json을 추가할 겁니다.

**setting.json**

```json
{
  "port": 3000,
  "message": "App listening on the port 3000"
}
```

그리고 setting.xml 파일도 추가할 겁니다.

**setting.xml**

```xml
<root>
    <port>3000</port>
    <message>App listening on the port 3000</message>
</root>
```

진짜 마지막으로 tset.json 파일을 삭제할겁니다.

**할일**

test.json 패스워드 값 수정 : fix: test.json 파일 패스워드 수정

setting.json 추가 : feat: setting.json 추가

setting.xml 추가 : feat: setting.xml 추가

test.json 삭제 : remove: test.json 파일 삭제

**진행중**

**완료**
username을 바꾸자 root => ingoo

**trello 프로그램**

<!-- working directory에서 repository로 저장을 해야하는데 항상 대기소를 거쳐서 감 -->

## 이전 커밋으로 돌아가는 작업

```bash
$ git checkout [해시값] # 헤드의 위치만 바꿔서 구경만 한 것
# commit을 하게 된다면 다른 가지로 바뀌게 됨
# 쓸 일 없음
```

checkout의 기능이 너무 많아서 2.3버전부터 switch restore로 분리됨

```bash
$ git switch -d [해시값]
```

### 이전으로 가는 명령어 reset, revert

reset은 commit을 지우면서 이전으로 돌아감

revert는 commit 내용을 복사해서 위에 얹혀놓는 형태 이전 히스토리를 남김

#### reset

```bash
# 문법
$ git reset --옵션 [커밋해시값]
# --mixed : 디폴트로 들어감
```

```bash
$ git log
commit 34848a804a2219f06f7c620af7c2f6fb0be04d01 (HEAD -> master)
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 13:47:50 2022 +0900

    remove: test.json 파일 삭제

commit 23560057b84026ca6d3f985621462ee510919fc9
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 12:52:42 2022 +0900

    feat: setting.xml 추가

commit f94ded65fafc698b24e2238bced9ce277c1ce17e
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 12:51:28 2022 +0900

    feat: setting.json 추가

commit f5d4e0590afae74fcb3402da14271c0f30aa8656
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 12:49:49 2022 +0900

    fix: test.json 파일 패스워드 수정

commit cc78d1f32c70e0eafba019a12ec13aa2f80e0784
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 12:43:32 2022 +0900

    fix: username 속성값을 바꿈

commit c591b92a68c3d7dbb2cc9c9b3ae76c66b8c02505
Author: cloudcoke <lms4296@gmail.com>
Date:   Wed Nov 23 12:21:04 2022 +0900
...
```

옵션

- --hard

```bash
$ git reset --hard [커밋해시]
$ git reset --hard cc78d1f32c70e0eafba019a12ec13aa2f80e0784
```

수정 사항을 완전히 삭제

이전에 있던 내용을 완전히 날림

이전에 코드를 작업한 내용이 있더라도 다 날아감

**hard 복구하는 방법**

```bash
$ git reflog
34848a8 (HEAD -> master) HEAD@{3}: commit: remove: test.json 파일 삭제
2356005 HEAD@{4}: commit: feat: setting.xml 추가
f94ded6 HEAD@{5}: commit: feat: setting.json 추가
f5d4e05 HEAD@{6}: commit: fix: test.json 파일 패스워드 수정
cc78d1f HEAD@{7}: commit: fix: username 속성값을 바꿈
c591b92 HEAD@{8}: checkout: moving from 2693cb4a6cb9a4cfe1bb767f7026bcd1c80e2fa4 to master
2693cb4 HEAD@{9}: checkout: moving from master to 2693cb4a6cb9a4cfe1bb767f7026bcd1c80e2fa4
c591b92 HEAD@{10}: commit: fix: test.json 데이터베이스 내용 수정
2693cb4 HEAD@{11}: commit (initial): initial commit
# git 히스토리를 보고 해시값을 구한다음

$ git reset --hard 34848a8
```

- --soft

```bash

$ git reset --soft [커밋해시]
$ git reset --soft cc78d1f32c70e0eafba019a12ec13aa2f80e0784

$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   setting.json
        new file:   setting.xml
        deleted:    test.json

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   setting.xml

```

repository에서 stagin area로 이동

- --mixed

```bash
git reset [커밋해시]
```

저장소에서 그냥 working directory로 이동

#### revert

revert의 핵심은 커밋 히스토리를 삭자하는 것이 아니라 새로 만들어서 되돌리는 방법
reset 보다는 안전하지만 처음 배우는 사람에게는 지옥임

```bash
$ git revert [되돌릴 해시값]
$ git revert f5d4e0590afae74fcb3402da14271c0f30aa8656
```

revert를 진행할 경우에는 이전 커밋과 비교해서 똑같은 파일에서 바뀐 부분이 있다면

컴퓨터가 뭐가 우선순위인지 모르기 때문에

사람이 직접 코드를 작성해야 함

```bash
# revert 취소하고 싶다면
$git revert --abort

# 직접 코드를 정러해서 완료했다면
$ git revert --continue
```

> test.json 파일을 다시 살려줘!

```bash
$ git revert 23560057b84026ca6d3f985621462ee510919fc9
```

맨위에 있는 commit 하나만 지울때

```bash
# 현제 head 위치 34848a804a2219f06f7c620af7c2f6fb0be04d01

$ git reset --hard 34848a804a2219f06f7c620af7c2f6fb0be04d01

# $ git reset --
# HEAD^
# HEAD~1 이전으로 1개
# ???

# head 위치에 있는 부분만 지운다
```

```bash
$ git revert f5d4e0590afae74fcb3402da14271c0f30aa8656
```

CONFLICT (modify/delete): test.json deleted in HEAD and modified in parent of f5d4e05 (fix: test.json 파일 패스워드 수정). Version parent of f5d4e05 (fix: test.json 파일 패스워드 수정) of test.json left in tree.
error: could not revert f5d4e05... fix: test.json 파일 패스워드 수정
hint: After resolving the conflicts, mark them with
hint: "git add/rm <pathspec>", then run
hint: "git revert --continue".
hint: You can instead skip this commit with "git revert --skip".
hint: To abort and get back to the state before "git revert",
hint: run "git revert --abort".

문제가 생겨서 revert 되지 않는 상태
reverting

```bash
$ git status
On branch master
You are currently reverting commit f5d4e05.
  (fix conflicts and run "git revert --continue")
  (use "git revert --skip" to skip this patch)
  (use "git revert --abort" to cancel the revert operation)

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add/rm <file>..." as appropriate to mark resolution)
        deleted by us:   test.json

no changes added to commit (use "git add" and/or "git commit -a")
```

```bash

$ git revert --continue

U       test.json
error: Committing is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
# 파일이 겹치는데 지울거냐 넣을거냐 물어봄
```

```bash
# 파일을 넣으려면 add로 staging area에 넣어주고
$ git add test.json

# revert 명령어 진행
$ git revert --continue

# 커밋됨
```

## git barnch 만들기

브랜치(branch) 나뭇가지

우리가 했던 커밋은 한줄짜리 리스트입니다.

이 한줄짜리를 여러줄로 만드는 것이 바로 브랜치입니다.

```bash
# 문법
$ git branch [브랜치 이름]

$ git branch develop

$ git branch
# *이 달린 곳이 선택된 곳
# commit을 하게되면 *을 기준으로 commit이 됨

# 브랜치 바꾸기
$ git switch [브랜치명]
$ git switch develop
$ git branch

# 브랜치 생성 후 바로 바꾸기
$ git switch -c feature
$ git switch -c hotfix

# 브랜치 삭제
$ git branch -d hotfix
# error: Cannot delete branch 'hotfix' checked out at '/home/cloudcoke/my/gittest'
# hotfix를 선택한 상태에서 삭제하려고 하기 때문에
$ git switch master
$ git branch -d hotfix

# 브랜치 생성
$ git branch test
$ git branch

# 브랜치 이름 바꾸기
# m은 move의 약자
$ git branch -m [기존브랜치명] [바꿀브랜치명]
$ git branch -m test hotfix

$ git branch -m master main
$ git switch develop
```

**작업내용 - develop**
comment.json

```json
{}
```

feat: comment.json 생성

user.json

```json
[
  {
    "userid": "web7722",
    "userpw": "1234",
    "username": "ingoo"
  }
]
```

feat: user.json 생성

작업내용 - feature

board.json

```json
[
  {
    "idx": 1,
    "subject": "안녕하세요",
    "content": "내용내용",
    "name": "ingoo",
    "date": "2022-11-23"
  },
  {
    "idx": 2,
    "subject": "안녕하세요",
    "content": "내용내용",
    "name": "ingoo",
    "date": "2022-11-23"
  }
]
```

feat: board.json 생성

**setting.json 수정**

```json
{
    port:3000 -> 3005
}
```

fix: setting.json 포트번호 수정

초록색 working directory와 repository가 같다

```bash
touch comment.json
git add .
git commit -m "feat: comment.json 생성"

touch user.json
git add .
git commit -m "feat: user.json 생성"

# setting.json 수정
git add .
git commit -m "fix: setting.json 포트번호 수정"

git switch feature
# board.json 생성
git commit -m "board.json 생성"
```
