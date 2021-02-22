---
title: "オレオレサーバー初期設定"
date: "2021-02-01T05:35:07.322Z"
---

# オレオレサーバー初期設定

## OS

### ユーザーの追加

```shell
# Ubuntu
adduser :username
# デフォルトでは、ホームディレクトリが作成されないので、-m をつける
useradd -m :username

# CentOS
useradd
```

### sudo 権限の付与

```shell
# USERNAMEさんを、sudoというグループに追加するUbuntuコマンド
sudo gpasswd -a :USERNAME sudo
# 同義
sudo usermod -aG sudo :USERNAME
```

### locale と timezone の設定

### locale の設定

```shell
sudo apt install -y language-pack-ja
sudo locaectl set-locale 'LANG=ja_JP.utf8'

# コンソールからログイン時の場合のみ`
cat << HERE > ~/.bashrc
if [[ $TERM == 'linux' ]]; then
    export LANG=en_US.UTF-8
fi
HERE

# 日本語マニュアルページのインストール
sudo apt install -y manpages-ja manpages-ja-dev
```

#### timezone の設定

```shell
sudo timedatectl set-timezone 'Asia/Tokyo'

# 結果の確認
timedatectl status
```

#### 参考

[【Linux】sudo 権限を持ったユーザアカウントの追加 - suzu6](https://www.suzu6.net/posts/188-user-add/)

### 公開鍵のコピー

```shell
# ~/.ssh/id_rsa.pubを渡す場合
ssh-copy-id :USERNAME@:TARGETHOST

# -iオプションで任意の公開鍵を指定することもできる
ssh-copy-id -i :IDENTITYFILE :USER@:TARGETHOST

# ssh-copy-id を使わない方法
cat ~/.ssh/id_rsa.pub | ssh ${USER}@${target_host} "mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_
```

### firewall の設定

```shell
# Ubuntu(ufw)
sudo ufw default DENY
sudo ufw allow 22022 # ssh
sudo ufw allow 80 # http
sudo ufw allow 443 # https
sudo ufw allow 25 # smtp
sudo ufw allow 465 # smtps(over SSL)
sudo ufw allow 587 # smtp(STARTTLS)
sudo ufw limit 22 # 30秒間の間に6回以上接続を試みた IP アドレスを許可しない
sudo ufw reload
sudo ufw enable

# CentOS(firewalld)
firewall-cmd --add-port=22022/tcp --permanent
firewall-cmd --reload
```

### sshd の設定

#### sshd_config の変更

```shell
# /etc/ssh/sshd_config

# sshdがリッスンするポート番号の変更
port 22022

# rootでのログインを禁止
PermitRootLogin no

# 公開鍵認証を有効化
PubkeyAuthentication yes

# パスワード認証を無効化
PasswordAuthentication no

# チャレンジレスポンス認証を無効化
ChallengeResponseAuthentication no

# 接続をSSH version2 のみに限定する
Protocol 2
```

#### 設定の再読み込み

`systemctl reload sshd`

#### 参考

[基礎から学ぶ！最初にやるべき SSH のセキュリティ設定【全コマンド例付き】 – Hacker's High](https://hackers-high.com/linux/ssh-config-for-beginners/)
[iptables が難しいため ufw で WEB サーバーのファイアウォール設定 - Qiita](https://qiita.com/shimakaze_soft/items/c3cce2bfb7d584e1fbce)

### git の初期設定

#### ssh 鍵の作成

`ssh-keygen`

#### GitHub へ公開鍵の登録

1. `cat ~/.ssh/id_rsa.pub`で公開鍵を表示して、コピーする。
2. [https://github.com/settings/ssh](https://github.com/settings/ssh) から公開鍵を GitHub へ登録する
3. `ssh -T git@github.com`で接続を確認する。

#### ssh-agent へ秘密鍵を登録

git へ接続しようとするたびに、秘密鍵のパスワードを入力するのは面倒なので、ssh-agent を利用して鍵認証の際のパスフレーズの入力を自動化します。

```shell
# ssh-agent 起動
eval $(ssh-agent)

# 登録
ssh-add

# 確認
ssh-add -l
```

#### git config --global

```shell
#ユーザー情報
git config --global user.name “:USERNAME”
git config --global user.email “:MAILADDRESS”

#### エディタをvimに設定する
git config --global core.editor 'vim -c "set fenc=utf-8"'

# git diff に色付けする
git config --global color.diff auto
git config --global color.status auto
git config --global color.branch auto

# 現在のブランチをリモートに同じ名前でpushする。upstreamを設定していなくてもpushされる。
git config --global push.default current

# 改行コードを自動変換しない
git config --global core.autocrlf false

# ファイル名の大文字と小文字を区別する
git config --global core.ignorecase false

# git status などの日本語ファイル名をエスケープしない
git config --global core.quotepath false
```

#### 参考

[Ubuntu 18.04 LTS : OpenSSH : SSH-Agent を利用する : Server World](https://www.server-world.info/query?os=Ubuntu_18.04&p=ssh&f=7)
[Git をインストールしたら真っ先にやっておくべき初期設定 - Qiita](https://qiita.com/wnoguchi/items/f7358a227dfe2640cce3)
[Git を使い始めたら一番最初にやりたい `git config`設定メモ](https://blog.katsubemakito.net/git/git-config-1st)

## docker

### 旧バージョンの docker をアンインストール

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### docker のインストール

```shell
# 必要なパッケージをインストールする
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# docker の公式GPGキーを追加する
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

# Use the following command to set up the stable repository. To add the nightly or test repository, add the word nightly or test (or both) after the word stable in the commands below. Learn about nightly and test channels.

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# docker-engine をインストール
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# 動作確認
sudo docker run hello-world

```

#### 一般ユーザーで docker コマンドを実行するための設定

```shell
# docker グループを作成する
sudo groupadd docker
# docker グループにユーザーを追加する
sudo usermod -aG docker $USER
# sudo gpasswd -a $USER docker

# dockerが使用するソケットを一般ユーザでも読み込み出来るようにする
sudo chmod 666 /var/run/docker.sock

```

#### スタートアップ時に doker も起動させる設定

```shell
sudo systemctl enable docker
```

#### docker-compose のインストール

```shell
# インストール
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 実行権限の付与
sudo chmod +x /usr/local/bin/docker-compose

# 動作確認
docker-compose --version
```

#### 参考

[Install Docker Engine on Ubuntu \| Docker Documentation](https://docs.docker.com/engine/install/ubuntu/)
[Post-installation steps for Linux | Docker Documentation](https://docs.docker.com/engine/install/linux-postinstall/)
