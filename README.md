# boot2env

> Just a toolkit I wrote to help my dev.

> Contain 2 command: ```coder and bootvm```

### bootvm:

> A command to connect to VirtualBox or remote SSH host.

> Local SSH config hard code to bootvm, change it by yourself

###### ~/.ssh/auto_login

> is config file for bootvm, only if it exists this command can be run. file format like this

```
115.159.151.158         ubuntu          *           22      ~/Documents/Keys/Tencent
115.159.152.88          ubuntu          *           22      ~/Documents/Keys/Alxw
```


### coder: 

> A command to cerate project, react component or config files.

> You can run ```coder -h``` to see help
