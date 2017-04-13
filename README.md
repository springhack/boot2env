# boot2env

> Just a toolkit I wrote to help my dev.

> Contain 2 command: ```coder and bootvm```

### bootvm:

> A command to connect to VirtualBox or remote SSH host.

> Local SSH config hard code to bootvm, change it by yourself

###### ~/.ssh/auto_login

> is config file for bootvm, only if it exists this command can be run. file format like this:

```
hostname                username        password    port    AuthKeyFilePath
115.159.152.88          ubuntu          *           22      ~/Documents/Keys/Alxw
```

> this command try to connect via password default, place ```*``` to use AuthKeyFile

### coder: 

> Now it's a bad command, don't use it !!!!

> A command to cerate project, react component or config files.

> You can run ```coder -h``` to see help

### config files:

> Need some dependencies, you can run this to get all (I think you use macOS):

```
# For powerline
pip install powerline-status
# For powerline fonts
git clone https://github.com/powerline/fonts.git
cd fonts
./install.sh
# For ctags
brew install ctahs
# For ack
brew install ack
# For jsctags
npm install -g git+https://github.com/ramitos/jsctags.git
```

### updates:

> Update vimrc with jsctags support
> Change babel-preset-latest to babel-preset-env
> Add loading 
