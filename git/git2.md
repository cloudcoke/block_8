# Branch 합치기

브랜치를 합치는 방법은 크게 두가지가 있음

`merge` `rebase`

merge는 branch를 끌어다가 합쳐짐
merge는 기준이 되는 branch로 다른 branch를 끌어옴
merge를 많이하면 merge hell이 발생하기도 함
장점 히스토리 추적이 가능
단점 많아지면 보기 어렵다

rebase는 branch가 사라지고 하나의 줄로 붙여짐
장점 보기에는 편하다
단점 히스토리 추적이 어렵다

merge와 rebase의 차이는 그래프가 어떻게 그려지는 가

## merge

develop 브랜치는 완성이 되면 그때 main 브랜치에다 넣음

develop 브랜치를 완성시키는게 목적

- develop에서 featuer 합칠 예정
- develop에서 hotfix 합칠 예정

```bash
# 문법
$ git merge [땡길 브랜치 명]
```

```bash
$ git switch develop
$ git merge feature
$ git branch -d feature # 브랜치 삭제
```

merge를 하기전에 주로 될 브랜치를 선택하고 있어야 함
충돌이 생기면 충돌을 해결한 다음 진행해달라고 함

같은 영역이 수정되는 상황이 발생하면 merge시 오류가 발생할 수 있음

```bash
$ git merge hotfix

Auto-merging setting.json
CONFLICT (content): Merge conflict in setting.json
Automatic merge failed; fix conflicts and then commit the result.
```

만약 충돌이 발생했을때 취소하고 싶다면 다음과 같이 할 수 있다.

```bash
# 취소하기
$ git merge --abort
```

```bash
$ git merge hotfix
```

setting.json
Accept Both Changes
port:3000 지움

<!-- 깃 그래프 회색이 생기면 워킹디렉토리에 내용이 있다 -->

```bash
git add .
git commit
```

```bash
git branch -d hotfix
```

## rebase

한줄로 만들어서 깔끔하게 보겠다가 주 목적

merge랑 다른점
이동을 시키는 것이다 보니
이동시킬 브랜치를 선택을 한다음 rebase

develop -> main

!rebase는 보내는거 merge는 가져오는 것!
rebase는 보낼 애를 선택한 다음 어디에 보낼지 결정

```bash
# 문법
git switch develop
git rebase main

Auto-merging user.json
CONFLICT (add/add): Merge conflict in user.json
error: could not apply 628edcd... feat: user.json 생성
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 628edcd... feat: user.json 생성
```

```bash
# 취소
git rebase --abort
```

```bash
git rebase main
```

accept incomming change

```bash
git status
interactive rebase in progress; onto 3e3e31d
Last commands done (2 commands done):
   pick ee9a57a feat: comment.json 생성
   pick 628edcd feat: user.json 생성
Next commands to do (5 remaining commands):
   pick 60c5160 fix: setting.json 포트번호 수정
   pick 0e4719a board.json 생성
  (use "git rebase --edit-todo" to view and edit)
You are currently rebasing branch 'develop' on '3e3e31d'.
  (fix conflicts and then run "git rebase --continue")
  (use "git rebase --skip" to skip this patch)
  (use "git rebase --abort" to check out the original branch)

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)
        both added:      user.json

no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git add .
git rebase --continue

[detached HEAD dd235d4] feat: user.json 생성
 1 file changed, 2 insertions(+), 1 deletion(-)
Auto-merging setting.json
CONFLICT (content): Merge conflict in setting.json
error: could not apply d944514... feat: setting.json host 내용 추가
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply d944514... feat: setting.json host 내용 추가
```

accept both changes
port 3000 제거

```bash
git add .
git rebase --continue
```

git graph를 보면 한줄로 합쳐짐

main 브랜치가 head위치로 옮겨져있지 않음
해결

merge를 진행해야함
main 기준으로부터 develop 브랜치를 땡겨와야 함

```bash
git merge main
```

rebase 진행 후
main 브랜치 내용과, develop 브랜치 내용이 서로 다름

develop브랜치 코드가 더 많은 작업을 함
main branch가 develop브랜치 코드를 가져와야 하는 상황
main이 아래에 있고, develop 브랜치가 위에 있다보니
develop브랜치가 더 커밋이 많다

```bash
git switch main
git merge develop
```

갈고리를 던져서 땡겨서 올라가기?

## github

git은 프로그램

github 사이트

- commit 내역을 저장시키기기 위해 사용

커밋이 같아야 함

token을 이용해 나임을 인증함

원격 저장소 => github 사이트에서 관리해주는 .git 폴더

레파지토리 만들기
Initialize this repository with:
에서 파일을 생성하기로 하면
기본적으로 커밋이 생성이 되어서
올릴때 pull 한다음에 merge하고 올려야 함

토큰 생성

setting
developer settings
Personal access tokens
Tokens(classic)
generate new token
generate new token (classic)
token 생성

### token 넣기

1. visual studio code로 연결하는 방법
   깃 init이 되어있던 디렉터리에서 터미널 실행
   연결작업

```bash
git remote add [원격저장소 이름] [원격저장소 주소]
git remote add origin https://github.com/cloudcoke/git_sample.git

# 확인
git remote -v

# push
git push [원격저장소 이름] [브랜치 이름]
git push origin main


```

username: [username]
password: [token value]

git config --global credential.helper cache

## 보내기 & 가져오기

### 보내기

git push [원격저장소이름] [브랜치명]

### 전체 가져오기

```bash
$ git clone [원격저장소 주소]
https://github.com/ingoo-blockchain/rebase_sample

$ git clone https://github.com/ingoo-blockchain/rebase_sample
```

rebase_sample이라는 폴더 안에다 파일을 다 집어넣어서 가져옴
rebase_sample 피렉터리에 들어가서 브랜치 확인하면

```bash
git branch --all
```

!!! git nano 에디터 vi로 바꾸기

```bash
$git config --global core.editor "vi"
```

폴더 이름을 바꿔서 가져오려면

```bash
$ git clone https://github.com/ingoo-blockchain/rebase_sample rebase
```

# rebase이용 커밋 다루기

커밋 메시지 변경
커밋 삭제
커밋 합치기
커밋 나누기

**문법**

```bash
git rebase -i [수정할 커밋의 이전해시]
```

git rebase -i [커밋해시]

git rebase -i 624fd38702d54fce0fbae08d05bbb6d52767695c

pick을 r로 리스트 페이지 변경

feat: 게시판리스트 완성

# 커밋메시지 변경하기

# 커밋 삭제

test.html 에 해당하는 커밋을
git rebase -i 98d7acadbec7786ecb83f47f9b1b84242901a358

pick -> r로 변경

# 커밋 합치기

수정1 수정2 커밋 합치기

```bash
git rebase -i cd30de30fca93b228d528ac8bfb2e7cb2a8a4d76
```

진짜 수정 완성 부분에 pick -> s

### 현 상태 가져오기
