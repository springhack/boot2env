set nocompatible
set nu
set noswapfile
set cursorline
set cindent
set backspace=2
set tabstop=4
set shiftwidth=4
set completeopt=menu
set expandtab
set ai

let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1
let Tlist_Use_Right_Window=1
let Tlist_Auto_Open=0
let g:winManagerWindowLayout='FileExplorer|TagList'
let g:winManagerWidth=30

syntax on

autocmd BufNewFile,BufRead * exec ":call AddTitle()"



func! CompileGcc()
    w
    !clear && echo -e '\033[0;32;1m>>>编译结果：\033[0m' && gcc -Wall -g % -o %<
endfunc


func! CompileGpp()
    w
    !clear && echo -e '\033[0;32;1m>>>编译结果：\033[0m' && g++ -Wall -g % -o %<
endfunc


func! RunResultOfGNU()
    !clear && echo -e '\033[0;32;1m>>>运行结果：\033[0m' && ./%<
endfunc


func! RunPython()
    !clear && python %
endfunc


func! CompileJava()
    !clear && javac %
endfunc


func! CompileCode()
        w
        if &filetype == "cpp"
                call CompileGpp()
        elseif &filetype == "c"
                call CompileGcc()
        elseif &filetype == "python"
                call RunPython()
        elseif &filetype == "java"
                call CompileJava()
        endif
endfunc

func! BuildAll()
        w
        if &filetype == "cpp"
                exec "!clear && echo -e '\033[0;32;1m>>>编译结果：\033[0m' && g++ -Wall -lm -g % -o %< && echo -e '\033[0;32;1m>>>运行结果：\033[0m' && ./%<"
        elseif &filetype == "c"
                exec "!clear && echo -e '\033[0;32;1m>>>编译结果：\033[0m' && gcc -Wall -lm -g % -o %< && echo -e '\033[0;32;1m>>>运行结果：\033[0m' && ./%<"
        endif
endfunc


func! AddTitleA()
	if getline(1) != "/**" && getline(2) != "        Author: SpringHack - springhack@live.cn"
		if getline(1) != ""
			call append(0,"/**")
		else
			call setline(1,"/**")
		endif
		call append(1,"        Author: SpringHack - springhack@live.cn")
		call append(2,"        Last modified: ".strftime("%Y-%m-%d %H:%M:%S"))
		call append(3,"        Filename: ".expand("%"))
		call append(4,"        Description: Created by SpringHack using vim automatically.")
		call append(5,"**/")
	endif
	call setline(3,"        Last modified: ".strftime("%Y-%m-%d %H:%M:%S"))
	call setline(4,"        Filename: ".expand("%"))
endfunc

func! AddTitleB()
	if getline(1) != "<!--" && getline(2) != "        Author: SpringHack - springhack@live.cn"
		if getline(1) != ""
			call append(0,"<!--")
		else
			call setline(1,"<!--")
		endif
		call append(1,"        Author: SpringHack - springhack@live.cn")
		call append(2,"        Last modified: ".strftime("%Y-%m-%d %H:%M:%S"))
		call append(3,"        Filename: ".expand("%"))
		call append(4,"        Description: Created by SpringHack using vim automatically.")
		call append(5,"-->")
		call append(6,"<!DOCTYPE html>")
		call append(7,"<html>")
		call append(8,"	<head>")
		call append(9,"		<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />")
		call append(10,"		<title>Index</title>")
		call append(11,"	</head>")
		call append(12,"	<body>")
		call append(13,"	</body>")
		call append(14,"</html>")
	endif
	call setline(3,"        Last modified: ".strftime("%Y-%m-%d %H:%M:%S"))
	call setline(4,"        Filename: ".expand("%"))
endfunc

func! AddTitleC()
	if getline(1) != "<?php /**" && getline(2) != "        Author: SpringHack - springhack@live.cn"
		if getline(1) != ""
			call append(0,"<?php /**")
		else
			call setline(1,"<?php /**")
		endif
		call append(1,"        Author: SpringHack - springhack@live.cn")
		call append(2,"        Last modified: ".strftime("%Y-%m-%d %H:%M:%S"))
		call append(3,"        Filename: ".expand("%"))
		call append(4,"        Description: Created by SpringHack using vim automatically.")
		call append(5,"**/ ?>")
	endif
	call setline(3,"        Last modified: ".strftime("%Y-%m-%d %H:%M:%S"))
	call setline(4,"        Filename: ".expand("%"))
endfunc

func! AddTitle()
	let setA = ["h","c","cpp","js","css","java"]
	let setB = ["htm","html"]
	for i in range(1,len(setA))
		if &filetype == get(setA,i-1)
			call AddTitleA()
		endif
	endfor
	for i in range(1,len(setB))
		if &filetype == get(setB,i-1)
			call AddTitleB()
		endif
	endfor
	if &filetype == "php"
		call AddTitleC()
	endif
	w
endfunc

command A call BuildAll()
command S call CompileCode()
command D call RunResultOfGNU()
