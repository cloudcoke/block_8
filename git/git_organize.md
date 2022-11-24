# GIT 작업 순서도

## Working Directory (작업 디렉토리)

현재 코드를 작업하고 있는 공간 (작업 폴더)
`git`에 의해 관리되고 있는 상태

- Tracked(추적)
  - 한 번이라도 .git에 의해 관리된 적이 있는 파일
- Untracked(추적되지 않음)
  - 한 번이라도 .git에 의해 관리된 적이 없는 파일

working directory -> staging are

```bash
$ git add [파일명/폴더명]

# 한번에 add
$ git add .
```

**add 취소하기 **

```bash
$ git restore --staged [파일명]
```

## Staging Area (대기소)

`.git`에 저장하기 전 중간다리 역할
repository에 저장하기 전에 저장을 할건지 마지막으로 물어보는 과정

## repository (.git)

기록하는 일만 남은 상태

**commit**

```bash
$ git commit
```

editor가 뜨면 커밋 메시지를 작성 할 수 있다.

editor 없이 명령행에서 바로 커밋 메시지를 작성할 수 있다.

```bash
$ git commit -m "커밋메시지"
```

**commit convention**

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 스타일 변경
- design: UI 변경
- test: test 코드 작성, test코드에 대한 리팩토링
- refactor: 실제 코드에 대한 리팩토리
- rename: 파일명 수정
- remove: 파일 삭제

**커밋한 기록을 보고 싶다면**

```bash
$ git log
```

vscode에서 git graph를 설치하면 보기 편하다

<!--
## 이전 커밋으로 돌아가기

```bash
$ git switch -d [해시값]
``` -->

## 이전으로 가는 명령어 reset, revert

reset은 commit을 지우면서 이전으로 돌아감
revert는 commit 내용을 복사해서 우에 얹혀놓는 형태 이전 히스토리를 남김

### reset

```bash
$ git reset --option [커밋해시값]
# --mixed: default
```

--optiion - --hard - 수정 사항을 완전히 삭제 - 이전에 있던 내용을 완전히 날림 - 이전에 코드를 작업한 내용이 있더라도 다 날아감

```bash
$ git reset --hard [커밋해시값]
```

**hard 복구하는 방법**

```bash
$ git reflog
# git 히스토리를 보고 해시값을 찾는다

$ git reset --hard [커밋해시값]
```

--soft

```bash
$ git reset --soft [커밋해시값]
```

repository에서 staging area로 이동시킴

-- mixed
git reset [커밋해시값]

```
repository에서 working directory로 이동
```

## revert

커밋 히스토리를 삭제하는 것이 아니라 이전 커밋을 복사해서 가장 위에 붙여넣는 방법으로
되돌리는 방법

```bash
$git revert [되돌릴 해시값]
```

revert를 진행하는 동안 파일의 충돌이 발생한다면 컴퓨터는 무엇이 우선순위인지 모르기 때문에 사람이 직접 명시를 해줘야함

```bash
# revert를 취소하고 싶다면
$ git revert --abort
```

```bash
# 직접 코드를 정리해서 완료했다면
$ git revert --continue
```

HEAD는 현재 브랜치의 가장 최근 커밋
HEAD^ : 이전 커밋
HEAD~3 : 3번 이전 커밋

## git branch

브랜치(branch) 나뭇가지

우리가 했던 커밋은 한 줄 짜리 리스트

이 한 줄짜리를 여러 줄로 만드는 것이 브랜치

```bash
# 현재 브랜치 위치 확인
$ git branch
```

```bash
# 브랜치 만들기
$ git branch [브랜치 이름]
```

```bash
# 브랜치 바꾸기
$ git switch [브랜치 이름]
```

```bash
# 브랜치 생성 후 바로 바꾸기
$ git switch -c [브랜치 이름]
```

```bash
# 브랜치 삭제
$ git branch -d [브랜치 이름]
# 현재 선택된 브랜치는 삭제가 안됨
```

```bash
# 브랜치 이름 바꾸기
$ git branch -m [기존 브랜치 이름] [바꿀 브랜치 이름]
```
