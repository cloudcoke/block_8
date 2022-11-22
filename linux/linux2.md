# Linux User (사용자 계정)

리눅스 구조 특징 중 하나인 `멀티 유저` (여러 사용자가 동시에 하나의 시스템에 접근)

리눅스에서 작동하는 모든 `파일과 디렉토리`는 사용자에서 시작됨

모든 `프로세스`는 사용자로부터 시작됨

`ingoo`라는 사용자가 있고

`hongtae`라는 사용자가 있다고 가정하면

`ingoo`라고 로그인 된 상태에서

`vi`를 통해서 `hello.txt`라는 파일을 생성함

`hongtae`라는 계정이 `hello.txt`라는 파일에 접근하려고 할 때

글을 못보게 할 수도 있고, 수정을 못하게 할 수도 있음

접근을 제어할 수 있음

왜냐하면 `hello.txt`는 `ingoo`라는 계정이 만들었기 때문에

`hello.txt`의 소유자는 `ingoo`라서 다른 계정이 해당 파일을 접근 못하게 할 수 있다.

`hongtae`라는 계정은 **권한**만 존재한다면 파일 접근이 가능함

또한 사용자가 많아질 경우 개개인별로 권한을 주는것이 귀찮기 때문에 **그룹**이라는 개념도 존재함

> [0,1,2,3,4,5,6,7,8,9]
> 0이라는 계정이 짝수에게만 권한을 주고 싶은 경우
> 2,4,6,8 -> 짝수 그룹으로 묶음

- 사용자 계정
  - 권한
  - 그룹

리눅스는 사용자 타입이 3가지 존재함

**사용자 타입**

- 루트 사용자 - UID 0
- 시스템 사용자 - UID 1 ~ 999
- 일반 사용자 - UID 1000 ~

리눅스는 설치할 때 기본적으로 `root` 계정을 생성함

그리고 또 하나의 일반 사용자도 생성함

**사용자 관련 명령어**

사용자를 확인하는 명령어 알아보기

**id**

현재 사용자의 아이디와 사용자가 속한 그룹의 아이디를 포함한 아이디 관련 정보를 보여줌

```bash
$ id
uid=1000(cloudcoke) gid=1000(cloudcoke) groups=1000(cloudcoke),4(adm),20(dialout),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),117(netdev),1001(docker)

$ id [사용자이름]
$ id -u # 현재 사용자의 id를 출력함
$ id -un # 현재 사용자의 이름을 출려감

$ id -u root # root 사용자에 대한 아이디를 출력
$ id -un root # root 사용자에 대한 이름을 출력
```

**whoami**
현재 사용자의 이름을 조회함

```bash
$ whoami
cloudcoke
```

**users**
현재 로그인 되어 있는 전체 사용자의 정보를 조회함

```bash
$ users
```

## 사용자 생성, 수정, 조회를 위한 명령어

사용자 생성, 수정 관련된 명령어들 대부분 `root` 계정이 필요함

`root` 계정에 접속해서 만드는 방법도 있긴 한데 위험함

일반 사용자에서 `root` 권한이 필요한 경우

**sudo**

> superuser do
> substitute user do (다른 사용자의 권한으로 실행)

`sudo`가 필요한 명령어가 있다

sudo를 사용한다 => root가 만든 파일을 접근한다

**useradd**

`sudo`가 필요함

새로운 사용자를 생성함

```bash
$ useradd user1
```

**adduser**

`sudo`가 필요함

새로운 사용자를 생성함

```bash
$ sudo adduser user1

```

왜 `sudo` 명령어가 필요한지 알아보기

`/etc/passwd`에 내용을 추가하기 때문

```bash
$ tail /etc/passwd
```

**/etc/passwd**

passwd 파일 내부 설명

```bash
# ... 생략
tmp1:x:1001:1002:,,,:/home/tmp1:/bin/bash

# tmp1 : 사용자 이름
# 1001 : UID
# 1002 : GID
# ,,, : 코맨트 또는 풀네임
# /home/tmp1 : 사용자 홈 디렉토리
# /bin/bash : shell 경로
```

**passwd**

`sudo` 권한이 필요

사용자의 패스워드를 설정할 때

```bash
$ passwd [사용자 이름]
```

**usermod**

`sudo` 권한 필요

```bash
$ sudo usermod [사용자 이름]
```

**-s**

shell 경로를 변경할 경우

```bash
$ sudo usermod -s /bin/zsh tmp1
```

**-G**

그룹 아이디를 추가할 경우

```bash
$ sudo usermod -G blockchain tmp1
```

**userdel**

`sudo` 권한 필요

```bash
$ sudo userdel [사용자 이름]
```

`/etc/passwd`에 해당하는 줄을 삭제할 뿐

옵션 `-r`을 사용해야 홈 디렉터리 안에 있는 폴더까지 삭제함

```bash
$ cd ~ # cloudcoke 홈으로 이동
$ sudo userdel -r tmp1

$ ls -l /home # tmp1 디렉토리까지 삭제된 거 확인
```

## 사용자 그룹

리눅스에서 그룹을 통해서 파일에 관한 접근 권한을 제한할 수 있음

`ingoo` 계정명을 만들면 `ingoo` 그룹이 만들어짐

사용자를 만들면 최소한의 그룹 하나를 가지고 있음

**그룹 관련 명령어**

**groups**

현재 로그인 된 사용자가 속한 그룹 리스트 확인

```bash
$ groups

$ groups [계정명]
```

**groupadd**

`sudo` 권한이 필요함

새로운 그룹을 생성할 수 있음

```bash
$ groupadd [그룹이름]
$ groupadd blockchain

# groupadd: Permission denied.
# groupadd: cannot lock /etc/group; try again later.

# /etc/group이라는 파일을 확인해 보자
# ls -l /etc/group

$ sudo groupadd blockchain

## 사용자와 같이 사용하기
$ sudo adduser tmp1
$ id tmp1

$ sudo usermod -G blockchain tmp1
$ id tmp1
uid=1001(tmp1) gid=1003(tmp1) groups=1003(tmp1),1002(blockchain)
```

**/etc/group**

```bash
blockchain:x:1002:

# blockchain : 그룹 이름
# 1002 : GID
# 마지막 부분 : 해당하는 유저들 ex) root,user1,cloudcoke
```

**groupmod**

기존의 그룹을 수정할 수 있음

```bash
$ sudo groupmod -aG blockchain tmp1
```

**groupdel**

그룹을 삭제할 수 있음

```bash
$ sudo groupdel blockchain

# /etc/group
# 그룹 이름이 blockchain이라는 걸 지움
```

## 파일 접근 권한 설정

```bash
$ cd ~

$ ls -al
$ cat > hello.txt
hello world!
ctrl + c

$ ls -l hello.txt
-rw-r--r-- 1 cloudcoke cloudcoke 13 Nov 22 11:05 hello.txt
             # UID       GID   사이즈    수정날짜 파일명

# -rw-r--r--

# - : [0]

# [0][1][2]
# rw-r--r--
```

**[0]에 대한 설명**

파일 타입에 대한 설명

조회된 내용 중에 파일인지 폴더인지 구분 값

- -: normal file (일반 파일)
- d: directory
- l: link file (바로가기)
- p: named pipe
- s: socket
- c: character device
- b: block device

**[1] [2] [3]에 대한 설명**
rw- r-- r--

r : read (읽기) = 4

w : write (쓰기) = 2

x : execute (실행) = 1

**[1]** : 소유자에 대한 설정
**[2]** : 그룹에 대한 설정
**[3]** : 기타 사용자

**chmod**

```bash
# rw- r-- r-- 해당 파일에 접근 권한을 바꾸는 명령어
# rwx r-x r-x 대부분 이렇게 많이 설정해줌
$ ls -l hello.txt
-rw-r--r-- 1 cloudcoke cloudcoke 13 Nov 22 11:05 hello.txt
$ chmod 755 ./hello.txt
$ ls -l hello.txt
-rwxr-xr-x 1 cloudcoke cloudcoke 13 Nov 22 11:05 hello.txt
# 원래대로 바꾸기
$ chmod 644 ~/hello.txt
$ ls -l hello.txt
-rw-r--r-- 1 cloudcoke cloudcoke 13 Nov 22 11:05 hello.txt
```

**chown**

```bash
# 해당파일의 소유권을 바꾸는 명령어
# -rw-r--r-- 1 cloudcoke cloudcoke 13 Nov 22 11:05 hello.txt
# cloudcoke cloudcoke
# root root
# $ chown 0:0
$ sudo chown root:root ~/hello.txt
$ ls -l hello.txt
-rw-r--r-- 1 root root 13 Nov 22 11:05 hello.txt
$ vi hello.txt
$ sudo chmod 700 ~/hello.txt
-rwx------ 1 root root 13 Nov 22 11:05 hello.txt
$ vi hello.txt
"hello.txt" [Permission Denied]
```

# Shell

어플리케이션 -> 쉘 -> 커널 -> 하드웨어

사람과 컴퓨터가 대화하기 위한 통로

`bash`

`zsh`

**ubuntu sudo 권한 주기**

root or sudo 권한이 있는 계정

usermod -aG sudo [권한을 줄 계정]

cat /etc/group |grep sudo

## CLI 설치

**window** 브라우저 **install**

- 브라우저
  - 인터넷
  - install 설치 할 수 있어야함

`CLI` ???

# 패키지 매니저

리눅스에서 패키지 관리 방법에 대해서 알아 봅시다.

`패키지 관리` 새로운 소프트웨어를 설치, 업데이트 삭제 하는 행위를 말함

`install` 파일을 다운 받는 행위

`install` 파일 내부들도 결국 다 코드로 되어있음

`소스코드` 는 하나의 `아카이브 파일`(tar)
[아카이브 파일 : (압축파일)]
`바이너리 패키지` 형태로 저장됨

`패키지` == `폴더`

1. install 파일 다운
2. install 파일을 실행 시킴 = 압축을 푼다

`의존성`

`nodejs`

``hello world` 출력프로그램을 `javascript`로 구현을 했을 때
`javascript`를 실행시키기 위해서 `nodejs` 필요한데

`helloingoo`

```bash
console.log('hello world!')
```

내 프로그램에 하나의 패키지인 nodejs 껴넣기

의존성 =? 기존에 되어있던 패키지를 같이 다운 받게 하는 것

**패키지 매니저**

helloingoo 다운 받을 때

1. nodejs install 파일을 다운 받아
2. nodejs 압축을 풀어
3. helloingoo install 파일을 다운 받아
4. helloingoo 압축 풀어
5. helloingoo 실행 해

ubuntu `dpkg`

mac `dmg`

롤 설치 한다고 가정하면

1. install 파일
   리그오브레전드 사이트에서 관리하고 있음
   리눅스에는 install 파일들을 모아 놓는 사이트들이 있음
   install 파일만 저장하고 있는 저장소가 있음

apt-get 사이트
다양한 install 파일들이 존재 (dpkg)

homebrew 사이트
다양한 install 파일들이 존재 (dmg)

```bash
apt install [프로그램 이름]
```

## zsh 설치

```bash
$ zsh --version
```

```bash
$ apt --version
```

```bash
$ sudo apt install zsh
# sudo 권한이 필요
# /bin을 사용하기 때문에?
```

```bash
$ cat /etc/passwd | grep cloudcoke
cloudcoke:x:1000:1000:,,,:/home/cloudcoke:/usr/bin/zsh
```

<!-- 쉘 변경

```bash
$ sudo usermod -s /bin/zsh cloudcoke
``` -->

```bash
$ cd ~
$ ls -al
-rw-r--r--  1 cloudcoke cloudcoke   4443 Oct 19 17:27 .zshrc
```

**oh-my-zsh**

```bash

sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

```bash
$ cd ~
$ ls -al | grep .zshrc
$ vi ~/.zshrc
```

```bash
$ sudo apt install fonts-powerline
```

```bash
git --version
```
