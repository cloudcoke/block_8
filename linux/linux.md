# Linux

## 목차

- 리눅스란
- 리눅스 구조
- 리눅스 특징
- Ubuntu
- 디렉토리 구조
- CLI
- 사용자 계정

## 리눅스란?

### 하드웨어와 소프트웨어

하드웨어 - 눈으로 보고 만질 수 있는 것

소프트웨어 - 못보는것 못만지는 것

### 리눅스

**리누즈 토발즈**에 의해 만들어진 OS로 오픈소스 개발에 가장 유명한 표본임
유닉스(Unix) 기반으로 만들어짐 <-- 유료

## 리눅스 구조

카카오톡, Excel, Chrome 같은 컴퓨터에서 실행 프로그램을 **응용 프로그램**이라고 함
이러한 응용 프로그램에서 사용자(컴퓨터를 사용하는 사람)이 명령을 내리면 **shell**은 이 명령을 해석함

> Shell은 명령 해석기라고도 함

해석된 사용자의 입력 명령어를 **Kernel(커널)**에게 전달

커널이 하드웨어에게 보내줘서 실행됨

## 리눅스 특징 구조

리눅스는 유닉스라는 운영체제 기반으로 하고 있음

뛰어난 안정성과 보안성, 높은 신뢰성과 성능이 특징

시스템 자원을 효율적으로 관리 및 사용할 수 있음

멀티 유저와 멀티태스킹을 지원

- 멀티 유저 : 여러 사용자가 동시에 하나의 시스템에 접근이 가능
- 멀티태스킹 : 여러 개의 작업을 동시에 실행하고, 교대로 컴퓨터의 자원을 사용하는 기능

CLI, GUI

> 명령어를 많이 알아야함

## 우분투 (Ubuntu)

mermaid?

Linux -> Ubuntu, CentOS

## 우분투 (Ubuntu) 설치

Windows Terminal

## WSL

개발자들은 unix 기반의 mac을 좋아했음 명령어가 비슷했기 때문에

윈도우에서는 예전에는 가상머신(Virtual Machine)을 이용해 리눅스를 설치했었음

WSL.pdf 참고

## CLI

CLI.pdf 참고

## 디렉토리 구조

최상위 디렉토리, 루트 디렉토리

### 1.1 Root

### 1.2 /bin

기본적인 명령어가 저장된 디렉토리

리눅스 시스템 사용에 있어서 가장 기본적인 명령어들이 저장되어 있는 곳

`ls`, `cd` ...

> ex) cat ,chmod, chown, cp, echo, kill, ls, mkdir, mv, ps, pwd, rm, su, vi ...

### 1.3 /boot

리눅스 부트로더(boot loader)가 존재하는 디렉토리

### 1.4 /dev

각종 디바이스 파일들이 저장되는 공간

`블록 디바이스`와 `캐릭터 디바이스`

**블록 디바이스**

HDD와 같은 주변 장치를 말함

데이터를 블록단위로 읽고 쓰여지며 랜덤하게 액세스함

**캐릭터 디바이스**

입출력이 한 바이트 단위로 이루어지며 데이터가 순차적으로 읽고 쓰여짐

### 1.5 /etc

시스템의 거의 모든 설정 파일이 존재하는 디렉토리

`/etc/sysconfig` : 시스템 제어판용 설정 파일 디렉토리

`/etc/password` : 사용자 관리 설정 파일 디렉토리

`/etc/ssh` : SSH 서비스 파일 디렉토리

`/etc/hosts` : 도메인의 IP를 찾을때 컴퓨터가 맨 처음 조사하는 파일

> windows는 C:\windows\System32\Driver\etc\hosts

`/etc/skel` : 계정 사용자 생성시의 초기화 파일이 저장된 디렉토리 (`useradd`) 에서 사용함

### 1.6 /home

사용자의 홈 디렉토리

adduser 명령어로 새로운 생성자를 생성하면 대부분 사용자의 id와 동일한 이름의 디렉토리가 자동으로 생성됨

`ingoo`
/home/ingoo

cd ~

cd /home/ingoo

### 1.7 /lib

커널 모듈과 라이브러리 파일이 들어있는 디렉토리

### 1.8 /media

DVD, USB 마운트

### 1.9 /mnt

/media 디렉토리와 비슷한 용도

> WSL2를 사용하는 사람은 window 파일이 담겨져있는 공간

### 1.10 /var

애플리케이션 실행중에 데이터를 일시적으로 저장하거나, 로그 파일들을 저장하는 디렉토리
`/var/log` <-- 로그 파일 저장시 왠만하면 여기 디렉토리 안에다 넣어주면 됨

## 명령어

### ls

파일 목록을 조회하는 명령어

**[옵션]**

```bash
$ ls - [옵션내용]
```

- l : 파일들의 상세 정보를 나타냄
- a : 숨김 파일을 표시함

```bash
$ ls -a
```

리눅스에서는 `.`은 숨김 파일이라는 뜻

```bash
$ ls -al
```

### cd

디렉토리 이동할때 쓰는 명령어

```bash
$ cd /

$ cd ./
```

### mkdir

```bash
mkdir [경로]

# cd /
cd /home
cd /ingoo
mkdir workspace

mkdir /home/ingoo/workspace
```

### vi

에디터 열기(파일 열기)

- 모드
  - 명령 모드
  - 입력 모드

입력 모드에 들어가는 방법 `i`

입력 모드에서 명령 모드로 돌아가는 방법은 `esc`

종료 옵션
`:`

- `:q` : 그냥 종료하겠다.
- `:q!` : 강제 종료
- `:w` : 그냥 저장
- `:w!` : 강제 저장
- `:wq!` : 강제로 저장하고 종료

### mv

```bash
$ mv [위치/현재 파일] [이동할 위치/파일명]
```

```bash
cd ~ # /home/ingoo
vi hello.txt

cd ..
/home

mv hello.txt

mkdir sample
mv /home/ingoo/hello.txt /home/ingoo/sample/hello.txt
```

### cp

```bash
$ cp [위치/현재 파일] [이동할 위치/파일명]
```

### cat

파일 이름을 인자로 받음

```bash
$ cat 파일명

# result : hello world!
```

### pwd

print working directory

> 현재 디렉토리를 출력해줌

### who, whoami

로그인한 정보를 보여줌

### env

환경 변수

지금 사용하고 있는 Linux 컴퓨터에서 사용하고 있는 변수를 출력함

```bash
echo $HOME

# 해당 변수가 담고 있던 값이 출력됨
```

### grep

```bash
$ grep [찾을 단어] [파일위치]

$ pwd
# /mnt/c/User/ingoo/Desktop/blockchain8_1
# development.json
$ cat development.json
# {
#         "username": "root",
#         "password": "root",
#         "database": "linux",
#         "host" : "127.0.0.1"
# }

$ grep host development.json
```

### | (pipe line)

명령어를 쓰면 출력

env -> PATH
env 결과를 가지고 PATH라는 내용을 가진 애들만 보고 싶다.

```bash
env | grep USER
```

### ps (Process Status)

- -e : 현재 수행하고 있는 프로세스에 관한 정보를 보여줌
- -f : 프로세스 ID와 부모 프로세스 ID를 포함한 전체 리스트를 보여줌

프로세스를 실행할 때마다 고유번호가 생김 `PID`

대부분 많이 쓰는게

```bash
$ ps -ef | grep node
```

### kill

```bash
kill -9 [프로세스 아이디]

kill -9 1060
```

### code

code
